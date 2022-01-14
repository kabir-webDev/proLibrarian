import Layout from "../../../Layout";
import Head from "next/head";
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

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import axios from "axios";
import { useEffect, useState } from "react";
import GetStarted from "../../../Components/Card/GetStarted";

const SingleBlog = ({ blog }) => {
  let [w, setW] = useState({
    location: {
      href: null,
    },
  });
  useEffect(() => {
    setW(window);
  }, []);

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={blog.attributes.title} />
        <meta property="og:description" content="Algosolver LLC - blogs" />

        {blog.attributes?.images?.data?.length > 0 ? (
          <meta
            property="og:image"
            content={blog.attributes.images.data[0].attributes.url}
          />
        ) : (
          ""
        )}
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <div>
        <div className="container md:mt-20 px-5 md:px-6 lg:px-10 relative">
          <div
            className={
              "hidden lg:flex flex-col gap-2 absolute -left-6 top-24 my-2"
            }
          >
            <span className={"text-sm"} style={{ color: "#5a7184" }}>
              Share
            </span>
            <FacebookShareButton
              url={w.location.href}
              quote={blog.attributes.title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={w.location.href}
              title={blog.attributes.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={w.location.href}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <EmailShareButton
              url={w.location.href}
              subject={blog.attributes.title}
              body={blog.attributes.title}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>

          <h2
            className={"font-bold text-xl md:text-3xl lg:text-5xl py-3"}
            style={{ color: "#19181b" }}
          >
            {blog.attributes.title}
          </h2>
          <div className="flex justify-between items-center my-4">
            <span
              className="text-base md:text-lg font-bold"
              style={{ color: "#183b56" }}
            >
              {blog.attributes.author.data.attributes.name}
            </span>
            <span className="text-sm" style={{ color: "#5e626c" }}>
              PUBLISHED ON {new Date(blog.attributes.createdAt).toDateString()}
            </span>
          </div>

          <div className={"items-center flex lg:hidden gap-2 my-2"}>
            <span className={"text-sm"} style={{ color: "#5a7184" }}>
              Share
            </span>
            <FacebookShareButton
              url={w.location.href}
              quote={blog.attributes.title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={w.location.href}
              title={blog.attributes.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={w.location.href}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <EmailShareButton
              url={w.location.href}
              subject={blog.attributes.title}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>

          <div className={"overflow-hidden my-8 md:my-12 rounded-3xl"}>
            {blog.attributes?.images?.data?.length > 0 ? (
              <img
                src={blog.attributes.images.data[0].attributes.url}
                className={"w-full"}
                alt="plane"
              />
            ) : (
              ""
            )}
          </div>

          <div className={"mb-16 md"}>
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
              }}
            >
              {blog.attributes.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <GetStarted />
    </Layout>
  );
};

export default SingleBlog;

export const getServerSideProps = async ({ params }) => {
  const baseUrl = process.env.API_URL;
  const slug = params.singleblog;

  const returnData = {
    props: {},
    notFound: false,
  };

  try {
    const {
      data: { data: blog },
    } = await axios.get(baseUrl + "blogs", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "*",
      },
    });

    if (blog.length > 0) {
      returnData.props.blog = blog[0];
    } else {
      returnData.notFound = true;
    }
  } catch (e) {
    returnData.notFound = true;
  }

  return returnData;
};
