import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";


const KeywordText = styled.section`
position: absolute;
background-color: ${colors.white};
width: 100%;
font-family: ${fonts.tech};
font-size: 20px;
color: ${colors.darkGray};
.content {
    padding: 10px 15px;
    li {
        list-style-position: inside;
    }
}
`;

function KeywordDef({ text, expanded, contentRef }) {
    const [expandedHeight, setExpandedHeight] = useState(0);

    useEffect(() => {
        if (expanded && contentRef.current) {
            setExpandedHeight(contentRef.current.clientHeight + 0);
        }
    }, [expanded, contentRef]);

    return (
        <KeywordText
            className={`keyword-definition ${expanded ? 'expanded' : ''}`}
            style={{ height: expanded ? `${expandedHeight}px` : '0' }}
        >
            <div ref={contentRef} className="content">
                {text}
            </div>
        </KeywordText>
    );
}

export default KeywordDef;
