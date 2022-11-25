/* ------------- HOME PAGE -------------*/
/* HEADER */
export const navlinks = [
  {
    title: "FAQ",
    link: "forum.savinghistory.xyz",
    dropDown: null
  },
  {
    title: "History",
    link: "",
    dropDown: {
      icon: "/images/Header/down-icon.png",
      links: [
        {
          text: "Open Proposal",
          link: "/history/open-proposal"
        },
        {
          text: "Browse Proposal",
          link: "/history/browse-proposal"
        },
        {
          text: "Browse History",
          link: "/history/browse-history"
        }
      ]
    }
  },
  {
    title: "Farming",
    link: "/farming",
    dropDown: null
  }
  // {
  //   title: "Staking",
  //   link: "/staking",
  //   dropDown: null,
  // },
];

/* HERO */
export const heroText = {
  heading: "Empowering Mankind for Posterity",
  paragraph:
    "savingHistory is an application layer protocol designed to protect the endangered heritage of different tribes worldwide while creating awareness of their way of life globally.",
  buttonText: "Donate to secure History",
  subText: "Get rewarded with $SAVEH when you donate."
};

/* FEATURES */
export const features = [
  {
    heading: "$SAVEH Token",
    content:
      "Holders of $SAVEH Tokens have the authority to control the protocol's operation and to elect or dismiss new committee members.",
    subText: "Buy $SAVEH on Uniswap",
    image: "/images/Features/iconOne.png",
    link: "https://app.uniswap.org/#/swap"
  },
  {
    heading: "DAO",
    content:
      "Owners of $SAVEH tokens have the ability to vote on changes to the protocol and make new suggestions.",
    subText: "Vote Proposal",
    image: "/images/Features/iconTwo.png",
    link: "https://demo.snapshot.org/#/savinghistory.eth"
  },
  {
    heading: "History Proposals",
    content:
      "Create a new proposal as a curator to get paid, or browse through those that have already been submitted to see what history is being preserved.",
    subText: "Open New Proposals",
    image: "/images/Features/iconFour.png",
    link: "https://community.savinghistory.xyz/c/histories/6"
  }
];

/* STATS */
export const stats = {
  heading: "Protect Heritages from extinction",
  subText: "Protect Heritages from extinction",
  statistics: [
    {
      number: "20",
      text: "Proposals"
    },
    {
      number: "4",
      text: "Countries"
    },
    {
      number: "15",
      text: "History saved"
    },
    {
      number: "20",
      text: "$SAVEH token claimed"
    },
    {
      number: "8",
      text: "Curators"
    },
    {
      number: "20",
      text: "Backers"
    }
  ]
};
/* FUTURE PLANS */
export const futurePlans = [
  {
    text: "Launch platform through IDO"
  },
  {
    text: "List $SAVEH token on s"
  },
  {
    text: "Onboard genesis council committee members across Africa, Latin America, and Asia"
  },
  {
    text: "Start documenting endangered cultures across Africa, Latin America, and Asia"
  },
  {
    text: "Add more categories for historic preservation that will include, but are not limited to, wildlife, arts, and festival recordings"
  }
];

/* NEWSLETTER */

/* FOOTER */

export const footerlinks = [
  {
    title: "About Us",
    link: "/"
  },
  {
    title: "History",
    link: "/"
  },
  {
    title: "Farming",
    link: "/"
  },
  {
    title: "Staking",
    link: "/"
  },
  {
    title: "Privacy",
    link: "/"
  }
];

/* ------------- FARMING PAGE -------------*/
/* HERO */

export const farmingHeroText = {
  heading: "Preserving culture by saving history",
  paragraph:
    "Donate to almost extinct cultures that are supported by unconditional basic income, and you'll be rewarded with $SAVEH.",
  buttonText: "Donate and earn $SAVEH Tokens"
};

/* SECTION */

export const savehCardText = {
  heading1: "Rewards",
  heading2: "Donation Reward",
  price: "~150.76 SAVEH",
  text1:
    "For donating to almost extinct cultures and presercing their History.",
  text2:
    "This is a rough estimate of the total amount of $SAVEH rewards that have been assigned to you and are waiting to be claimed."
};

export const summaryText = {
  title: "Your Summary",
  summary: [
    {
      title: "Available new $SAVEH tokens this epoch",
      text: "--", // new val
      saveh: false,
      yours: true,
      total: false,
      claimable: false
    },
    {
      title: "Your donation in the last 30 epochs",
      text: "--", // new val
      yours: true,
      saveh: false,
      total: false,
      claimable: false
    },
    {
      title: "Total raised in the last epochs",
      text: "--",
      saveh: false,
      yours: false,
      total: true,
      claimable: false
    },
    {
      title: "Your pending rewards estimation this epoch",
      text: "--",
      saveh: false,
      yours: true,
      total: false,
      claimable: false
    },
    {
      title: "SAVEH rewards already allocated to you",
      text: "--", // new val
      saveh: false,
      yours: false,
      total: false,
      claimable: true
    }
  ],
  bottomText:
    "Each day for the following 30 days, SAVEH rewards will be given to you based on how much you have contributed compared to the total amount raised in the previous epochs. However, you won't be able to begin withdrawing your SAVEH rewards until 15 epochs have passed since each allocation."
};
