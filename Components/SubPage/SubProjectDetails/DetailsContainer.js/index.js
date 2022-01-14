import React from "react";
import LargeViewProjectImages from "../ProjectImages/LargeViewProjects";
import MobileViewProjectImages from "../ProjectImages/MobileViewProjects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const dark = {
  'code[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
    background: "#1e1e1e",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#1e1e1e",
    padding: ".1em",
    borderRadius: ".3em",
  },
  comment: {
    color: "#6a9955",
  },
  prolog: {
    color: "#6a9955",
  },
  doctype: {
    color: "#6a9955",
  },
  cdata: {
    color: "#6a9955",
  },
  punctuation: {
    color: "#569cd6",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#ce9178",
  },
  keyword: {
    color: "#569cd6",
  },
  tag: {
    color: "#569cd6",
  },
  "class-name": {
    color: "#FFFFB6",
    textDecoration: "underline",
  },
  boolean: {
    color: "#99CC99",
  },
  constant: {
    color: "#99CC99",
  },
  symbol: {
    color: "#f92672",
  },
  deleted: {
    color: "#ce9178",
  },
  number: {
    color: "#FF73FD",
  },
  selector: {
    color: "#A8FF60",
  },
  "attr-name": {
    color: "@",
  },
  string: {
    color: "#ce9178",
  },
  char: {
    color: "#A8FF60",
  },
  builtin: {
    color: "#569cd6",
  },
  inserted: {
    color: "#A8FF60",
  },
  variable: {
    color: "#C6C5FE",
  },
  operator: {
    color: "##ce9178",
  },
  entity: {
    color: "#FFFFB6",
    cursor: "help",
  },
  url: {
    color: "#96CBFE",
  },
  ".language-css .token.string": {
    color: "#99CC99",
  },
  ".style .token.string": {
    color: "#99CC99",
  },
  atrule: {
    color: "#F9EE98",
  },
  "attr-value": {
    color: "#F9EE98",
  },
  function: {
    color: "#569cd6",
  },
  regex: {
    color: "#E9C062",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};
const ProjectDetailsContainer = ({ details, projectImages }) => {
  return (
    <React.Fragment>
      {
        //mobile
      }
      <div className="w-full px-6 mt-12 md:mt-16 xl:mt-32 mb-12 md:mb-16 xl:mb-32 flex flex-col lg:hidden">
        <MobileViewProjectImages
          projectImages={projectImages}
          details={details}
        />
        <div className="md">
        <ReactMarkdown
            remarkPlugins={{ remarkGfm }}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}>
            {details?.descriptions || ""}
          </ReactMarkdown>
        </div>
      </div>
      {
        //large
      }
      <div className="w-full hidden lg:px-24 mt-12 md:mt-16 xl:mt-32 mb-12 md:mb-16 xl:mb-32 flex-col lg:flex">
        <LargeViewProjectImages
          projectImages={projectImages}
          details={details}
        />
        <div className="md text-lg">
        <ReactMarkdown
            remarkPlugins={{ remarkGfm }}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}>
            {details?.descriptions || ""}
          </ReactMarkdown>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProjectDetailsContainer;
