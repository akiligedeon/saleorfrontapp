import React from "react";

interface ProductDescriptionProps {
  description: string;
}

interface EditorJsBlock {
  id: string;
  type: string;
  data: {
    text: string;
    // Add more fields if needed
  };
}

interface EditorJsDescription {
  time: number;
  blocks: EditorJsBlock[];
  version: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  let parsed: EditorJsDescription | null = null;

  try {
    parsed = JSON.parse(description) as EditorJsDescription;
  } catch (error) {
    console.error("Error parsing product description", error);
  }

  if (!parsed) {
    return <p>{description}</p>;
  }

  return (
    <div>
      {parsed.blocks.map((block: EditorJsBlock) => {
        if (block.type === "paragraph") {
          return (
            <p key={block.id} className="mb-4 text-base text-gray-700">
              {block.data.text}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};