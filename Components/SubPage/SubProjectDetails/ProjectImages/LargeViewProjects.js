import React from "react";
// import Slider from "react-slick";
import moment from "moment";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import ItemsCarousel from "react-items-carousel";
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
const LargeViewProjectImages = ({ projectImages, details }) => {
  const [currentActiveIndex, setCurrentActiveIndex] = React.useState(0);
  return (
    <div className="flex w-full flex-wrap flex-row-reverse mb-7">
      <div className="w-1/2 flex flex-col container gap-6 justify-start px-10">
        <h1 className="font-bold text-2xl md:text-4xl">{details?.title}</h1>
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
            {details?.blurb}
          </ReactMarkdown>
        </div>

        <h1 className="text-xl flex w-full flex-row">
          <div
            className="flex flex-col w-1/3 gap-4"
            style={{
              maxWidth: "120px",
            }}>
            <b className="mr-4">Date:</b>
            <b className="mr-4">Client:</b>
          </div>
          <div className="flex flex-col flex-grow gap-4 text-gray-600">
            <p>{moment(details.releaseDate).format("MMM Do YYYY")}</p>
            <p>{details.clientName}</p>
          </div>
        </h1>
        <a
          className="underline"
          target="__blank"
          href={`https://${
            details?.liveLink?.split("//").length === 2
              ? details?.liveLink?.split("//")[1]
              : details?.liveLink?.split("//")[0]
          }`}>
          Project link
        </a>
      </div>
      <div className="w-1/2 px-5 md:px-5 flex flex-col items-center justify-center">
        <div
          className="w-full h-519 rounded-2xl duration-300"
          style={{
            background: `url(${
              projectImages?.length === 0
                ? "/Assets/logo.svg"
                : projectImages[currentActiveIndex]?.src
            }) ${
              projectImages?.length === 0 ? "center" : "center/cover"
            } no-repeat`,
          }}></div>
        {projectImages?.length > 1 && (
          <div className="w-5/6 h-auto mt-6 block relative">
            <ItemsCarousel
              infiniteLoop={false}
              gutter={12}
              activePosition={"center"}
              chevronWidth={60}
              disableSwipe={false}
              alwaysShowChevrons={false}
              numberOfCards={2}
              slidesToScroll={1}
              outsideChevron={true}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={currentActiveIndex}
              requestToChangeActive={(value) => {
                //console.log(value)
                if (value < projectImages.length && value >= 0) {
                  setCurrentActiveIndex(value);
                }
              }}
              rightChevron={
                <div className="p-5 flex items-center justify-center shadow-lg h-full rounded-l-2xl bg-white">
                  <MdOutlineArrowForwardIos className="text-3xl text-gray-400" />
                </div>
              }
              leftChevron={
                <div className="p-5 flex items-center justify-center shadow-lg h-full rounded-r-2xl z-50 absolute border bg-white">
                  <MdOutlineArrowBackIos className="text-3xl text-gray-400" />
                </div>
              }>
              {projectImages.map((obj, index) => (
                <div
                  className="cursor-pointer h-24 md:h-36 w-5/6 mr-4 md:mr-3 rounded-2xl duration-500 z-10"
                  onClick={() => setCurrentActiveIndex(index)}
                  key={obj.id}
                  style={{
                    background: `url(${obj?.src}) center/cover no-repeat`,
                    opacity: index !== currentActiveIndex ? 0.5 : 1,
                  }}
                />
              ))}
            </ItemsCarousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default LargeViewProjectImages;
