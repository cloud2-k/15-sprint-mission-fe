import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

import { createProduct } from "../../api/product";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import ProductTagList from "./ProductTagList";

import styles from "./ProductForm.module.css";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "1자 이상 입력해 주세요")
    .max(10, "10자 이내로 입력해 주세요"),
  description: z
    .string()
    .min(10, "10자 이상 입력해 주세요")
    .max(100, "100자 이내로 입력해 주세요"),
  price: z
    .string({ error: "가격을 입력해 주세요" })
    .min(1, "가격을 입력해 주세요")
    .regex(/^[0-9]+$/, "숫자로 입력해 주세요")
    .transform((val) => Number(val))
    .refine((val) => val >= 0, "가격은 0원 이상이어야 합니다"),
  tags: z
    .array(z.string().max(5, "5글자 이내로 입력해 주세요"))
    .min(1, "태그를 최소 1개는 추가해 주세요")
    .max(5, "태그는 최대 5개까지만 가능합니다"),
});

function ProductForm() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      tags: [],
    },
  });

  const currentTags = useWatch({
    control,
    name: "tags",
    defaultValue: [],
  });

  const handleTagKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key !== "Enter") return;
    e.preventDefault();

    const newTag = e.target.value.trim();

    if (newTag !== "" && !currentTags.includes(newTag)) {
      if (newTag.length > 5) {
        setError("tags", {
          type: "manual",
          message: "태그는 5글자 이내로 입력해 주세요.",
        });
        return;
      }
      clearErrors("tags");
      setValue("tags", [...currentTags, newTag], { shouldValidate: true });
      e.target.value = "";
    } else {
      e.target.value = "";
    }
  };

  const removeTag = (tagToRemove) => {
    const filteredTags = currentTags.filter((tag) => tag !== tagToRemove);
    setValue("tags", filteredTags, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const result = await createProduct(data);
      navigate(`/items/${result.data.id}`);
    } catch (error) {
      const err = /** @type {import('axios').AxiosError<any>} */ (error);

      if (err.response) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "상품 등록에 실패했습니다.";

        setError(errorMessage);

        console.error(
          "❌ product 생성 API 에러 발생: ",
          err.response.status,
          err.response.data,
        );
      } else {
        setError("product API 생성 리퀘스트에 실패하였습니다.");
        console.error("❌ product 생성 API 에러 발생: 리퀘스트 실패");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.headWrapper}>
        <h1 className={styles.formTitle}>상품 등록하기</h1>
        <Button isDisabled={!isValid || isLoading} size="sm40">
          등록
        </Button>
      </div>
      <div className={styles.contentWrapper}>
        <Input
          id="productName"
          label="상품명"
          placeholder="상품명을 입력해 주세요"
          {...register("name")}
          error={errors.name}
        />
        <Textarea
          id="productDesc"
          label="상품 소개"
          placeholder="상품 소개를 입력해 주세요"
          {...register("description")}
          error={errors.description}
        />
        <Input
          id="productPrice"
          error={errors.price}
          label="판매가격"
          placeholder="판매가격을 입력해 주세요"
          type="number"
          onWheel={(e) => e.target.blur()}
          {...register("price")}
        />
        <div className={styles.tagInputSection}>
          <Input
            id="productTag"
            error={errors.tags}
            label="태그"
            placeholder="태그를 입력해 주세요"
            onKeyDown={handleTagKeyDown}
          />
          <ProductTagList tags={currentTags} onRemove={removeTag} />
        </div>
      </div>
    </form>
  );
}
export default ProductForm;
