import React from "react";
import { StyleSheet, ScrollView, View, Text, SectionList } from "react-native";
import HeaderBar from "../components/HeaderBar";

export default class didYouKnow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar pageName={"Did you know?"} />
        <SectionList
          sections={[
            {
              title: "5 Richest People In The World",
              data: [
                "Jeff Bezos",
                "Bill Gates",
                "Bernard Arnault",
                "Warren Buffet",
                "Larry Ellison",
              ],
            },
            {
              title: "Top Google Seaches in 2018",
              data: [
                "World Cup",
                "Avicii",
                "Mac Miller",
                "Stan Lee",
                "Black Panther",
              ],
            },
            {
              title: "Top Searched Movies of 2018",
              data: [
                "Black Panther",
                "Dead Pool 2",
                "Venom",
                "Avengers: Infinity War",
                "Bohemian Rhapsody",
              ],
            },
            {
              title: "Top Searched Athletes of 2018",
              data: [
                "Tristan Thompson",
                "Alexis Sánchez",
                "Lindsey Vonn",
                "Shaun White",
                "Khabib Nurmagomedov",
              ],
            },
            {
              title: "Common Investment Terms",
              data: [
                "Before making investment decisions, it is important to understand basic concepts.",

                "Risk:",
                "Risk is the potential of losing your money when investing, or the level of uncertainty regarding what you will earn or lose on your investment.",

                "Almost every type of investment involves some risk. Generally, the higher the potential return, the higher the risk.",

                "Return:",
                "Return on your investment, also known as ROI, is the profit or growth that you make on an investment. It can vary greatly. For some investments, it cannot be predicted with certainty.",

                "An investment?s return can come in two forms:",

                "Income, including interest or dividends. A dividend is a portion of a company?s profit that is paid to its shareholders",
                "Increased value, also called ?capital gain,? which lets you sell your investment for a profit",
                "You can also have a negative return if your investment loses value. This is also called a ?capital loss.?",

                "Risk tolerance:",
                "Risk tolerance is how comfortable you are with risk and not knowing what you will earn or lose on your investment.",

                'If you prefer little or no risk, you have a low risk tolerance, or are ?risk averse."',

                "You have a high risk tolerance if you are willing to risk losing some or all of your investment in exchange for the potential to earn more money.",

                "You can ask yourself the following questions to help determine your risk tolerance:",

                "When will you need the money:",
                "Do you have enough money set aside for an emergency and to cover debts?",
                "Is your job stable?",
                "Can you tolerate investments where returns may be unpredictable or subject to sudden changes in value?",
                "How would you react if your investments declined in value?",
              ],
            },
            {
              title: "Investing in Stocks",
              data: [
                "Stocks may be the most well-known and simple type of investment. When you buy stock, you?re buying an ownership share in a publicly traded company. Many of the biggest companies in the country ? think General Motors, Apple and Facebook ? are publicly traded, meaning you can buy stock in them.",

                "When you buy a stock, you?re hoping that the price will go up so you can then sell it for a profit. The risk, of course, is that the price of the stock could go down, in which case you?d lose money.",

                "Brokers sell stocks to investors. You can either opt for an online brokerage firm or work face-to-face with a broker.",

                "Liquidity",
                "Liquid assets or investments are those you are able to cash in or sell quickly. Examples of liquid assets include savings accounts and most stocks. A house is considered a non-liquid asset.",

                "Liquidity can be important if you are planning to use your savings or investments in the short term.",

                "Diversification",
                "Having a mix of investments in different asset classes is called diversification. This can help you to reduce risk.",

                "There are two ways to diversify your investments: portfolio diversification and asset allocation.",

                "Portfolio diversification means having a mix of investments to reduce risk. For example, having investments in many companies instead of just one. When you hold a variety of investments, you reduce the possibility that all of them will lose value at the same time. If you only own one stock and that company loses value, then you risk losing all of the money you invested.",

                "Asset allocation means having different types of asset classes in your investment portfolio, for example: stocks, bonds and cash. When you have different types of assets, you reduce the risk that all assets will lose value at the same time.",
              ],
            },

            {
              title: "Setting Savings and Investment Goals",
              data: [
                "Think about your financial goals",
                "Saving and investing can help you reach your financial goals. Writing goals down is a good idea.",

                "To figure out what savings and investments are right for you:",

                "Identify and prioritize your goals, such as saving for retirement or a down payment for a house",
                "- set a dollar amount for each goal",
                "- set a timeframe to reach your goals",

                "As you get older, your financial goals will change. Review your savings and investing plans from time to time.",

                "Keep in mind you are generally better off paying down debt first. This is because the interest you pay on debt is usually more than what you can earn by investing.",

                "Set a date to reach your goals",
                "Your goals may be:",

                "short-term (2 years or less)",
                "medium-term (3 to 5 years)",
                "long-term (6 years or more)",
                "The amount of time you have to achieve your goals can affect how you plan to save and invest.",

                "Save and invest for the short term",
                "If youa re saving for an emergency fund or a major purchase within a year or two, your focus will be on building your savings. You will want to keep your money protected and easily accessible.",

                "Short-term savings and investment options",
                "- savings accounts",
                "- short-term deposits",
                "- short-term guaranteed investment certificates (GICs)",
                "- cashable savings bonds",
                "Ask your financial institution or advisor about the different types of short-term investments they offer and how they work.",

                "Save and invest for the long term",
                "If you are putting money away for a long-term goal, such as your retirement or your childs education, you may want to consider a broader range of investment types.",

                "Longer-term investment options",
                "- bonds, such as Canada Savings Bonds",
                "- mutual funds",
                "- index-linked deposits",
                "- stocks",
                "- long-term deposits",
                "- long-term guaranteed investment certificates (GICs)",
                "Keep in mind that some investments are complex and can be risky. Talk to an investment professional or financial advisor to find the investment that is right for you.",

                "Longer-term savings options",
                "- Registered retirement savings plans (RRSPs)",
                "- Registered education savings plans (RESPs)",
                "- Registered disability savings plans (RDSPs)",
                "- Tax-free savings accounts (TFSAs)",
                "Figure out your comfort with risk",
                "Many investments offer the potential for a higher rate of return but also involve some level of risk. However, the risk may be more acceptable if your goal is longer-term because you have more time to recover any financial losses.",

                "Your comfort with risk depends on your emotional willingness to accept risk and your financial ability to absorb loss. This is known as your risk tolerance or risk appetite.",

                "There are many different types of risk including:",

                "- the risk that your investments will lose money if domestic or global markets decline",
                "- the risk that an investment cannot be traded quickly enough to prevent a loss",
                "- the risk that the value of your investments won?/t increase enough to keep up with the rate of inflation",
                "- the risk associated with investing in certain types of businesses, like a business that is part of an unregulated industry",
                "More risk may be acceptable if your goal is longer-term because you have more time to recover any financial losses.",

                "Decide if you want to invest on your own",
                "Investing on your own may be an option if you:",
                "- are confident about your investing knowledge",
                "- have the time to follow developments in the financial market",
                "Many people work with a financial advisor or planner to help them plan and achieve their financial goals.",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#1D2DDA",
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
