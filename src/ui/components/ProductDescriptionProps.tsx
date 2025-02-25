import React from "react";

interface ProductDescriptionProps {
  description: string;
}

interface EditorJsBlock {
    id: string;
    type: string;
    data: {
      text: string;
      // You can add more fields here if needed
    };
  }
  
  interface EditorJsDescription {
    time: number;
    blocks: EditorJsBlock[];
    version: string;
  }
  

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  let parsed: EditorJsDescription;
  
  try {
    parsed = JSON.parse(description) as EditorJsDescription;
  } catch (error) {
    console.error("Error parsing product description", error);
    // Fallback: display the raw string if parsing fails
    return <p>{description}</p>;
  }

  return (
    <div>
      {parsed.blocks.map((block) => {
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

export default ProductDescription;
