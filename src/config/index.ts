import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "🚀 Dhruv Charne — Full-Stack Web3 Developer | AI Explorer | Curious",
  author: "Dhruv Charne",
  description:
    " I work across Web2, Web3, and AI, blending creativity with clean architecture to build things people actually use.",
  lang: "en",
  siteLogo: "/dhruv4ne.jpg",
  navLinks: [
    { text: "Education", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/Dhruv4ne" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dhruv-charne-908848213/" },
    { text: "Github", href: "https://github.com/DHRUVCHARNE" },
    { text: "Youtube", href: "https://www.youtube.com/@DhruvCharne" },
    { text: "Cyfrin", href: "https://profiles.cyfrin.io/u/dhruv4ne" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dhruv Charne",
    specialty: "Full-Stack Web3 Developer",
    summary:
      "I work across Web2, Web3, and AI, blending creativity with clean architecture to build things people actually use.",
    email: "dhruv4ne@gmail.com",
  },
  experience: [
    {
      company: "Madhav Institute of Technology and Sciences, Gwalior",
      position: "BTech in Mathematics and Computing",
      startDate: "Oct 2021",
      endDate: "Aug 2025",
      summary:
        "Studied Mathematics,Statistics, Computer Science,Machine Learning and Artificial Intelligence with First Division",
    },
  ],
  projects:[
  {
    name: "TSender Fullstack App",
    summary:
      "A full-stack Next.js dApp for batch-sending ERC-20 tokens to multiple recipients, powered by Wagmi and RainbowKit with end-to-end testing in Playwright and Synpress.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/TSender",
    image: "/download.png",
  },
  {
    name: "NFT Marketplace",
    summary:
      "A marketplace for minting, listing, and trading ERC-721 NFTs on the Anvil network, built with Next.js and Foundry and deployed live.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/TS-NFT-Marketplace",
    image: "/download.png",
  },
  {
    name: "Provably Random Lottery",
    summary:
      "A decentralized lottery system built in Foundry using Chainlink VRF and Automation/Upkeep to create a provably random and trustless winner selection.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/foundry-lottery-smart-contract",
    image: "/download.png",
  },
  {
    name: "Stablecoin Protocol (DFD)",
    summary:
      "A MakerDAO-style over-collateralized stablecoin pegged to USD with WETH collateral, liquidation safeguards, mint/burn logic, and price feeds via Chainlink OracleLib; includes full fuzz and invariant testing.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/dsc-stablecoin-protocol",
    image: "/download.png",
  },
  {
    name: "Dynamic Mood NFT",
    summary:
      "An on-chain ERC-721 NFT with fully on-chain JSON + SVG metadata that dynamically updates mood state. Includes deploy/interaction scripts plus comprehensive unit and integration testing.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/dynamic-nft-forge",
    image: "/download.png",
  },
  {
    name: "OurToken ERC-20",
    summary:
      "A configurable ERC-20 token leveraging OpenZeppelin standards with full Foundry test suite, deployment automation, Etherscan verification and Makefile integration.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/foundry-openzeppelin-erc20-token",
    image: "/download.png",
  },
  {
    name: "Basilisk Vyper ERC-20",
    summary:
      "A fixed-supply Vyper ERC-20 built with Moccasin featuring Ownable access control and EIP-712 support. Includes extensive Python scripting plus stateless/stateful fuzz tests and automated Blockscout deployment + verification.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/basilisk-token",
    image: "/download.png",
  },
  {
    name: "On-Chain Voting + Backend API",
    summary:
      "A Hardhat-based on-chain voting contract with secure candidate creation and one-vote-per-address, paired with an Express Web3 backend exposing REST APIs with authentication and centralized error handling.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE?tab=repositories&q=voting&type=&language=&sort=",
    image: "/download.png",
  },
],
  about: {
    description: `
      Hey! I’m Dhruv — a developer who loves turning ideas into real, scalable, and beautifully engineered products. I work across Web2, Web3, and AI, blending creativity with clean architecture to build things people actually use.
      `,
    image: "/dhruv4ne.jpg",
  },
};

// #5755ff
