import investorAttentionContent from "./InvestorData"; 
import React from "react";

function Investor() {
  return (
    <div style={{
      minWidth: '300px', 
      maxWidth: '800px',
      margin: '0 auto', // Center the block-level element horizontally
      padding: '20px',
      marginTop:'124px', // Add some padding around the content
    }}>
      {investorAttentionContent.map((block, index) => (
        <React.Fragment key={index}>
          {block.type === 'paragraph' && (
           
            block.content === "For investor's attention" && index === 0 ? (
              <h2 className="text-center text-4xl  mb-5">{block.content}</h2> 
            ) : (
              <p className="mt-4">{block.content}</p>
            )
          )}
          {block.type === 'heading' && block.level === 2 && (
            <h2
              className="text-center text-4xl mt-5" 
            >
              {block.content}
            </h2>
          )}
          {block.type === 'list' && (
            <ul className="list-disc mt-3">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item.content}</li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Investor;