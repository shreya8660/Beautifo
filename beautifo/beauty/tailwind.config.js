export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  
  theme: {
   
    extend: {
      colors: {
        sectionBg: "#F6F3F2",
        sageCard: "#C9D8D3",
        blushCard: "#E8D6CF",
        buttonPink: "#E17882",
        discountRed: "#F06A6A",
        headingDark: "#2E2E2E",
        leftCard: "#E9E6E6",
        topRightCard: "#E8D8D6",
        bottomRightCard: "#DAD9E6",
        offerRed: "#F06A6A",
        newsletterBg: "#E6D6D4",
        newsletterButton: "#F27C7C",
        newsletterInput: "#F1ECEC",
        textMuted: "#6E6E6E",
        footerBg: "#F3F1F1",
    accentPink: "#F27C7C",
    textDark: "#2E2E2E",
      },
    },
  },
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-25px)" },
        },
        bounceUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-60px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        bounceUp: "bounceUp 1s ease-in-out",
      },

      
    },

  plugins: [],
};