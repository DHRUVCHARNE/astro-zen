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
      "Next.js dApp for batch-sending ERC-20 tokens using Wagmi & RainbowKit, fully tested with Playwright/Synpress.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/TSender",
    image: "/tsender.png",
  },
  {
    name: "NFT Marketplace",
    summary:
      "Next.js marketplace for minting, listing & trading ERC-721 NFTs on the Anvil network.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/TS-NFT-Marketplace",
    image: "/ts-nft-marketplace.png",
  },
  {
    name: "Provably Random Lottery",
    summary:
      "Trustless lottery using Chainlink VRF & Automation for provably random winner selection.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/foundry-lottery-smart-contract",
    image: "/vrf-lottery.jpg",
  },
  {
    name: "Stablecoin Protocol (DFD)",
    summary:
      "MakerDAO-style USD-pegged stablecoin with WETH collateral, liquidation logic & Chainlink oracles.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/dsc-stablecoin-protocol",
    image: "/stablecoin.png",
  },
  {
    name: "Dynamic Mood NFT",
    summary:
      "ERC-721 NFT with fully on-chain SVG metadata that dynamically updates mood state.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/dynamic-nft-forge",
    image: "/dynamic-nft.jpg",
  },
  {
    name: "Live Attendance Backend (Express + WebSockets) using Bun runtime",
    summary:
      "A live attendance system built with Express.js, MongoDB, and WebSockets, supporting real-time attendance marking with role-based access control for teachers and students.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/live-attendance-backend",
    image: "/attendance.png",
  },
  {
    name: "Merkle Airdrop (Foundry)",
    summary:
      "Merkle Airdrop System built using foundry , ERC20 token distribution using merkle proofs and gas sponsorship with off-chain signature verification",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE/merkle-airdrop-foundry",
    image: "/basilisk.png",
  },
  {
    name: "On-Chain Voting + Backend API",
    summary:
      "Hardhat voting contract plus Express Web3 REST API with auth and centralized error handling.",
    linkPreview: "/",
    linkSource: "https://github.com/DHRUVCHARNE?tab=repositories&q=voting&type=&language=&sort=",
    image: "/voting.png",
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
