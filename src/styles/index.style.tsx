
export const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  export const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }
  export  const headingAccentStyles = {
    color: "#663399",
  }
  export const paragraphStyles = {
    marginBottom: 48,
  }
  export  const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
  }
  export const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
  }
  export const doclistStyles = {
    paddingLeft: 0,
  }
  export const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
  }

  export const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  }

  export const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    display: `inline-block`,
    marginBottom: 24,
    marginRight: 12,
  }

  export const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  }

  export const docLinks = [
    {
      text: "TypeScript Documentation",
      url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
      color: "#8954A8",
    },
    {
      text: "GraphQL Typegen Documentation",
      url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
      color: "#8954A8",
    }
  ]

  export const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative" as "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
  }

  export const links = [
    {
      text: "Tutorial",
      url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
      description:
        "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
      color: "#E95800",
    },
    {
      text: "How to Guides",
      url: "https://www.gatsbyjs.com/docs/how-to/",
      description:
        "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
      color: "#1099A8",
    },
    {
      text: "Reference Guides",
      url: "https://www.gatsbyjs.com/docs/reference/",
      description:
        "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
      color: "#BC027F",
    },
    {
      text: "Conceptual Guides",
      url: "https://www.gatsbyjs.com/docs/conceptual/",
      description:
        "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
      color: "#0D96F2",
    },
    {
      text: "Plugin Library",
      url: "https://www.gatsbyjs.com/plugins",
      description:
        "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
      color: "#8EB814",
    },
    {
      text: "Build and Host",
      url: "https://www.gatsbyjs.com/cloud",
      badge: true,
      description:
        "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
      color: "#663399",
    },
  ]
