import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import ProductTagList from "./ProductTagList";

import styles from "./ProductForm.module.css";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "1자 이상 입력해 주세요" })
    .max(10, { message: "10자 이내로 입력해 주세요" }),
  description: z
    .string()
    .min(10, { message: "10자 이상 입력해 주세요" })
    .max(100, { message: "100자 이내로 입력해 주세요" }),
  price: z
    .string()
    .min(1, { message: "가격을 입력해 주세요" })
    .regex(/^[0-9]+$/, { message: "숫자로 입력해 주세요" })
    .transform((val) => Number(val))
    .refine((val) => val >= 0, { message: "가격은 0원 이상이어야 합니다" }),
  tags: z
    .array(z.string().max(5, { message: "5글자 이내로 입력해 주세요" }))
    .min(1, { message: "태그를 최소 1개는 추가해 주세요" })
    .max(5, { message: "태그는 최대 5개까지만 가능합니다" }),
});

function ProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
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

  const currentTags = watch("tags");

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
      setValue("tags", [...currentTags, newTag]);
      e.target.value = "";
    } else {
      e.target.value = "";
    }
  };

  const removeTag = (tagToRemove) => {
    const filteredTags = currentTags.filter((tag) => tag !== tagToRemove);
    setValue("tags", filteredTags);
  };

  const onSubmit = (data) => {
    console.log("최종 제출 데이터:", data);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.headWrapper}>
        <h1 className={styles.formTitle}>상품 등록하기</h1>
        <Button isDisabled={!isValid} size="sm40">
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
