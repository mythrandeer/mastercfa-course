and would generally not be pursued if they were estimated to have a negative NPV.

## CAPITAL ALLOCATION

describe the capital allocation process, calculate net present value (NPV), internal rate of return (IRR), and return on invested capital (ROIC), and contrast their use in capital allocation

Capital allocation is the process used by a firm's management and board to make capital investment and return decisions. Management seeks to deliver risk-adjusted returns greater than what investors could earn on similarly risky investments elsewhere. The process is substantially similar to those used by investors and analysts constructing investment management portfolios but occurs at a more granular level of detail. Rather than only investing in entire companies, issuers invest in projects and utilize significant proprietary, non-public information.

Investors and analysts must judge whether an issuer will manage capital wisely over the long term. To make that judgment, analysts should evaluate the issuer's capital allocation process and its adherence to first principles and, most importantly, assess the issuer's historical track record of capital allocation. The generic steps in the capital allocation process are shown in Exhibit 3.

Exhibit 3: Steps in the Capital Allocation Process
![](https://cdn.mathpix.com/cropped/2025_06_02_bc7ef5cf033e34d51879g-01.jpg?height=451&width=763&top_left_y=1517&top_left_x=838)

- Idea generation: While ideas may originate from anywhere, it is important that management has a strong understanding of the competitive environment that the prospective investment is situated in, as well as the firm's current operations, capabilities, and competitive position. Often, ideas come from managers engaged in the business and involve expanding scale and scope of existing activities or adjacent businesses. Executives may also engage external consultants for advice on idea generation. As will be discussed later, capital spending tends to be highly correlated from year to year, indicating that prior-period ideas and plans weigh heavily.
- Investment analysis: Following the generation of investment ideas, managers forecast the amount, timing, duration, and volatility of an investment's expected cash flows to estimate whether the investment is a wise use of capital.
- Planning and prioritization: Management selects and prioritizes profitable investment opportunities that, when considered together, are the most value enhancing on a risk-adjusted return basis. Only investment candidates estimated to generate returns greater than investors' opportunity cost (the returns they could earn elsewhere on similarly risky endeavors) should be pursued. Additionally, some projects that appear attractive in isolation may be less desirable when considered in the context of existing operations, other proposed projects, or constraints on financing.

When value-creative investment opportunities are exhausted, managers should return any remaining capital to shareholders. In this way, shareholders can redeploy that capital elsewhere to earn their required rate of return.

- Monitoring and post-investment review: This step involves monitoring the performance of the investment and related activities against projections and, often, making adjustments, such as increasing or decreasing investment levels (which will be discussed later as real options). This step is important for several reasons. First, it helps validate assumptions made in the capital allocation process, revealing systematic errors, such as overly optimistic forecasts. Second, it helps enforce discipline in business operations by focusing management attention on bringing performance into alignment with projections. Finally, it may produce ideas for future investments. Managers should seek to invest in profitable areas and scale down or dispose of assets in areas that generate suboptimal returns or may have greater value to other firms.

Two of the most widely used analytical tools in the investment analysis step are net present value (NPV) and internal rate of return (IRR). These are applications of time-value-of-money concepts. While an independent investment analyst does not have access to the project-by-project information used by management in these calculations, an analyst should understand the rationale behind them, their strengths, and their limitations in practice (also, these tools are used elsewhere in investment management, which will be covered later in the curriculum). Analysts have access to highly aggregated consolidated financial statements, which they can use to calculate and analyze return on invested capital (ROIC), a useful aggregate, rather than project, return measure.

## Net Present Value (NPV)

The NPV of an investment is the present value (in currency terms) of expected future cash inflows less the investment's costs (or cash outflows), as shown in Exhibit 4.

Exhibit 4: Net Present Value of a Capital Investment
![](https://cdn.mathpix.com/cropped/2025_06_02_bc7ef5cf033e34d51879g-03.jpg?height=384&width=1107&top_left_y=323&top_left_x=666)

Exhibit 4 shows the simple case where a single investment ( $C F_{0}<0$ ) occurs at inception followed by cash inflows. We may solve for the NPV using Equation 1:

$$
\begin{aligned}
\mathrm{NPV} & =C F_{0}+\frac{C F_{1}}{(1+r)^{1}}+\frac{C F_{2}}{(1+r)^{2}}+\ldots+\frac{C F_{T}}{(1+r)^{T}} . \\
\mathrm{NPV} & =\sum_{t=0}^{T} \frac{C F_{t}}{(1+r)^{t}},
\end{aligned}
$$

where

$$
\begin{aligned}
C F_{t}= & \text { After-tax cash flow at time } t \\
r= & \text { Required rate of return-the rate of return that a corporate issuer's inves- } \\
& \text { tors could earn on a similarly risky investment }
\end{aligned}
$$

The calculation is illustrated in the following example.

## EXAMPLE 4

## Gerhardt Corporation NPV

1. Assume that Gerhardt Corporation is considering a capital investment of $€ 50$ million today that is expected to return after-tax cash flows of $€ 16$ million per year for the next four years plus another $€ 20$ million in Year 5. If the required rate of return is $10 \%$, what is the NPV of this investment?

## Solution:

Using Equation 1, we may solve for the NPV as follows:

$$
\begin{aligned}
\mathrm{NPV} & =C F_{0}+\frac{C F_{1}}{(1+r)^{1}}+\frac{C F_{2}}{(1+r)^{2}}+\ldots+\frac{C F_{T}}{(1+r)^{T}} \\
\mathrm{NPV} & =-50+\frac{16}{(1+0.10)^{1}}+\frac{16}{(1+0.10)^{2}}+\frac{16}{(1+0.10)^{3}}+\frac{16}{(1+0.10)^{4}}+\frac{20}{(1+0.10)^{5}} \\
\mathrm{NPV} & =-50+63.136=13.136
\end{aligned}
$$

Since this investment may be acquired today at a cost of $€ 50$ million, the company exchanges $€ 50$ million today for an investment worth $€ 63.136$ million. The investment increases the present value of the firm's wealth by a net amount of $€ 13.136$ million.
This can also be solved in Microsoft Excel or Google Sheets using the NPV function:
$=$ NPV(rate,value1,value2,...)
where
rate $=$ Required rate of return
value $(s)=$ After-tax cash flows
Note that the NPV function uses $t=1$ for the first cash flow, not $t=0$, and assumes cash flows are evenly spaced. Therefore, cash flows at $t=0$ (in this case, -50 ) need to be subtracted or added outside the function. The proper argument here is
$=\operatorname{NPV}(0.10,16,16,16,16,20)-50$
$=13.136$.

Because the NPV is the amount by which investors' wealth increases from an investment, the NPV decision rule is as follows:

| Invest if | $\mathrm{NPV} \geq 0$. |
| :--- | :--- |
| Do not invest if | $\mathrm{NPV}<0$. |

Positive-NPV investments increase the wealth of the shareholders, while a negative NPV reduces wealth. In the rare event that NPV is zero, a project could be accepted because it meets the required rate of return. However, because NPV analysis relies on estimated future cash flows, a zero-NPV project leaves no room for error. While the decision rule is straightforward, NPV is usually just one factor in capital allocation. There may be competing projects, intangible considerations, and so on, that factor into the decision. Therefore, NPV $\geq 0$ can be viewed as a necessary but not sufficient condition for making an investment.

Many investments have unconventional cash flow patterns in which outflows may occur not only at inception but also on future dates, as in Exhibit 5. An example of this is an investment in additional capacity at a later stage.

## Exhibit 5: Unconventional Cash Flow Patterns

$$
t=0
$$

$$
t=T
$$

![](https://cdn.mathpix.com/cropped/2025_06_02_bc7ef5cf033e34d51879g-04.jpg?height=272&width=1053&top_left_y=1845&top_left_x=384)

Analysis of these types of investments is best handled using spreadsheet software, such as Microsoft Excel and Google Sheets, manually, or using the XNPV function, which, unlike the NPV function, does not assume evenly spaced periods and allows the user to specify the timing of cash flows. This concept is illustrated in the following example.

## EXAMPLE 5

## Gerhardt Corporation NPV II

Assume that Gerhardt Corporation is considering a capital investment of $€ 50$ million today with the following estimated cash flow schedule over the next five years (all amounts in millions of euros).

| $\boldsymbol{t}$ | $\mathbf{0}$ | $\mathbf{1}$ | $\mathbf{1 . 5}$ | $\mathbf{2}$ | $\mathbf{3}$ | $\mathbf{4}$ | $\mathbf{5}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Cash flow | -50 | 10 | -5 | 13 | 16 | 19 | 23 |

1. If the required rate of return is $10 \%$, what is the NPV of this investment and should Gerhardt make the investment?

## Solution:

Using Equation 1, we may solve for the NPV as follows:

$$
\begin{aligned}
& \mathrm{NPV}=C F_{0}+\frac{C F_{1}}{(1+r)^{1}}+\frac{C F_{2}}{(1+r)^{2}}+\ldots+\frac{C F_{T}}{(1+r)^{T}} \\
& \quad \mathrm{NPV}=-50+\frac{10}{(1+0.10)^{1}}+\frac{-5}{(1+0.10)^{1.5}}+\frac{13}{(1+0.10)^{2}}+\frac{16}{(1+0.10)^{3}}+\frac{19}{(1+0.10)^{4}} \\
& +\frac{23}{(1+0.10)^{5}} . \\
& \mathrm{NPV}=4.78 .
\end{aligned}
$$

Since the NPV $\geq 0$, Gerhardt should make the investment.
This problem can also be solved in Microsoft Excel or Google Sheets using the XNPV function. The XNPV function syntax is as follows:
=XNPV(rate,values,dates)
where
rate $=$ Required rate of return
values $=$ After-tax cash flows at each date
dates $=$ Date of each after-tax cash flow (for a problem like this without exact dates, the dates are arbitrary; what matters is that they are accurately spaced)

The function is most clearly specified by referencing cash flow and date arrays that are aligned on a spreadsheet, as shown here:
![](https://cdn.mathpix.com/cropped/2025_06_02_bc7ef5cf033e34d51879g-05.jpg?height=269&width=1074&top_left_y=1920&top_left_x=680)

## Internal Rate of Return

The internal rate of return (IRR) is the discount rate that makes the net present value of an investment equal to zero, as shown in Equation 2:

$$
\sum_{t=0}^{T} \frac{C F_{t}}{(1+I R R)^{t}}=0
$$

Note the similarity of the IRR calculation to Equation 1, which includes $r$ (the required rate of return) in the denominator instead of IRR.

## EXAMPLE 6

## Gerhardt Corporation IRR

1. Assume that Gerhardt Corporation is considering a capital investment of $€ 50$ million today that is expected to return after-tax cash flows of $€ 16$ million per year for the next four years plus another $€ 20$ million in Year 5. What is the IRR of this investment?

## Solution:

Recall from Equation 1 that the NPV is

$$
\mathrm{NPV}=C F_{0}+\frac{C F_{1}}{(1+r)^{1}}+\frac{C F_{2}}{(1+r)^{2}}+\frac{C F_{T}}{(1+r)^{T}}
$$

The IRR is the discount rate, $r$, that makes the NPV equal to zero. In other words,

$$
\begin{aligned}
& \mathrm{NPV}=C F_{0}+\frac{C F_{1}}{(1+r)^{1}}+\frac{C F_{2}}{(1+r)^{2}}+\frac{C F_{T}}{(1+r)^{T}} \\
& 0=-50+\frac{16}{(1+\mathrm{IRR})^{1}}+\frac{16}{(1+\mathrm{IRR})^{2}}+\frac{16}{(1+\mathrm{IRR})^{3}}+\frac{16}{(1+\mathrm{IRR})^{4}}+\frac{20}{(1+\mathrm{IRR})^{5}}
\end{aligned}
$$

Besides trial and error, the IRR function in Microsoft Excel and Google Sheets is a straightforward approach to solving this problem. The IRR function syntax is
$=$ IRR(values,[guess])
where
values $=$ After-tax cash flows
[guess] = An optional user-specified guess for the IRR (the default is 10\%)
Importantly, like the NPV function, the IRR function assumes that cash flows are received or paid at the end of period and that each period is evenly spaced. Unlike the NPV function, it does not assume that the first cash flow is at $t=1$, so the argument here is simply
$=\operatorname{IRR}(-50,16,16,16,16,20)$
$=0.1952$, or $19.52 \%$.

The IRR decision rule is to invest if the IRR exceeds the required rate of return ( $r$ ) for a capital investment:

| Invest if | $\mathrm{IRR} \geq r$. |
| :--- | :--- |
| Do not invest if | $\mathrm{IRR}<r$. |

For this reason, the required rate of return is often referred to as the hurdle rate. If the IRR is equal to $r$, the project is theoretically acceptable because it meets the required return with an NPV of zero. Since the IRR of $19.52 \%$ in our example exceeds the hurdle rate of $10 \%$, Gerhardt should invest.

An important attribute of IRR is that it will only equal an investor's (geometric) rate of return on an investment if interim cash flows are reinvested at the IRR; if reinvestment rates are in fact lower, the rate of return on the investment will be lower than the IRR and vice versa. The NPV calculation instead assumes interim cash flows are reinvested at $r$, the required rate of return, which is often more economically realistic. Reinvestment rates and the implications therein will be explored in depth later in the curriculum in fixed-income lessons.

For an investment for which the assumptions of end-of-period, evenly spaced cash flows are inappropriate, the XIRR function in Microsoft Excel and Google Sheets is the proper tool, as in the following example.

## EXAMPLE 7

## Gerhardt Corporation IRR III

1. Assume that Gerhardt Corporation is considering a capital investment of $€ 50$ million today with the following estimated cash flow schedule over the next five years (all amounts in millions of euros).

| $\boldsymbol{t}$ | $\mathbf{0}$ | $\mathbf{1}$ | $\mathbf{2}$ | $\mathbf{2 . 5}$ | $\mathbf{3}$ | $\mathbf{4}$ | $\mathbf{5}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Cash flow | -50 | 0 | 1 | 3 | 16 | 20 | 25 |

What is the IRR of this investment, and should Gerhardt make the investment if its required rate of return is $10 \%$ ?

## Solution:

This problem can be solved in Microsoft Excel or Google Sheets using the XIRR function. The XIRR function syntax is as follows:
=XIRR(values,dates,[guess])
where
values $=$ After-tax cash flows at each date
dates $=$ Date of each after-tax cash flow (for a problem like this without exact dates, the dates are arbitrary; what matters is that they are accurately spaced)
[guess] = An optional user-specified guess for the IRR (the default is 10\%)
The function is most clearly specified by referencing cash flow and date arrays that are aligned on a spreadsheet, as shown here:

| SUM |  |  | 5 |  |  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| A |  | 8 | c | 0 | F | 7 | 0 | H | 1 |
| 1 | Cash flow Date | . 50 | 0 | 1 | 3 | 16 | 20 | 25 |  |
| 2 |  | 1/1/2000 | 12/31/2000 | 12/21/2001 | 7/1/2002 | 12/31/2002 | 12/21/2003 | 12/21/2004 |  |
| 1 |  |  |  |  |  |  |  |  |  |
| 4 | IRR | -0.088(81:H1,82:H2) |  |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |  |  |  |

The IRR is $6.76 \%$, which is below Gerhardt's required rate of return of $10 \%$, so it should not invest in this project.

An important limitation with IRR is that multiple IRRs exist if cash flow signs (+/-) change more than once. We can illustrate this with the following simple example:

| Time | $\mathbf{0}$ | $\mathbf{1}$ | $\mathbf{2}$ |
| :--- | :---: | :---: | :---: |
| Cash flow | $-1,000$ | 5,000 | $-6,000$ |

The IRR for this investment satisfies this equation:

$$
-1,000+\frac{5,000}{(1+\mathrm{IRR})^{1}}+\frac{-6,000}{(1+\mathrm{IRR})^{2}}=0
$$

Two values of IRR satisfy the equation: $100 \%$ and $200 \%$, which are clearly quite different. In such cases, where cash flow signs change more than once, NPV should be used instead of IRR. Financial calculators and spreadsheet software will often misleadingly return a single IRR solution, defaulting to the lowest value.

## WHICH TO USE: NPV OR IRR?

While NPV and IRR criteria usually indicate the same investment decision, in the case of mutually exclusive investment projects, a company could face a decision between one project with a larger NPV and another with a higher IRR. If the company can invest in only one project, which should it choose?

The correct choice is the project with the higher NPV. While NPV shows the firm's wealth increase in currency terms from a capital investment, the IRR solely indicates a project's rate of return (subject to the IRR reinvestment assumption) rather than its size or the period over which the IRR is earned.

Many practitioners find IRR easier to use than NPV. If the required return is $10 \%$, for example, a project IRR of more than $10 \%$ is desirable, while an NPV amount in currency terms may be harder to interpret because the number needs to be in the context of firm size. As a practical matter, once a firm has the data to calculate the NPV, it is simple to also calculate the IRR. However, the most appropriate and theoretically sound criterion is the NPV.

## Return on Invested Capital

Independent investment analysts do not have the necessary information to calculate or audit management's calculations of project NPVs or IRRs. Analysts of listed companies have consolidated financial statements and, sometimes, segment-level information, all of which are highly aggregated and include cash flows associated with many projects. Return on invested capital, also known as return on capital employed (ROCE), is a profitability measure for the total capital that management has invested, shown as Equation 3. Typically, an annual after-tax profit measure is used, so ROIC is measured per year.

$$
\text { ROIC }=\frac{\text { After-tax operating profit }_{t}}{\text { Average invested capital }}=\frac{(1-\text { Tax rate }) \times \text { Operating profit }_{t}}{\text { Average total LT liabilities and equity }{ }_{t-1, t}} .
$$

The denominator is a measure of total capital investment, so working capital is not included. From the perspective of the balance sheet, invested capital includes the amounts in the red box:
![](https://cdn.mathpix.com/cropped/2025_06_02_bc7ef5cf033e34d51879g-09.jpg?height=446&width=670&top_left_y=243&top_left_x=882)

## EXAMPLE 8

## Return on Invested Capital

Assume that a corporate issuer reported 24,395 in Year 2 after-tax operating profits and the following balance sheet information.

| Assets: | End of Year 1 |  | End of Year 2 |
| :--- | :---: | :---: | :---: |
| Cash | 4,364 |  | 6,802 |
| Short-term assets | 40,529 |  | 52,352 |
| Long-term assets | 287,857 |  | 279,769 |
| Total assets | 332,750 |  | 338,923 |


| Liabilities and Equity: | End of Year 1 | End of Year 2 |
| :--- | :--- | :--- |
| Accounts payable | 35,221 | 50,766 |
| Short-term debt | 21,142 | 5,877 |
| Long-term debt | 112,257 | 106,597 |
| Share capital | 15,688 | 15,688 |
| Retained earnings | 148,442 | 159,995 |
| Total liabilities and equity | 332,750 | 338,923 |

1. Calculate ROIC for Year 2.

Solution:

$$
\begin{aligned}
& \text { ROIC }=\frac{\text { After-tax operating profit }{ }_{t}}{\text { Average LT liabilities and equity capital }{ }_{t-1, t}} \\
& \text { ROIC }=\frac{24,395}{\frac{(112,257+15,688+148,442)+(106,597+15,688+159,995)}{2}} \\
& \text { ROIC }=8.73 \%
\end{aligned}
$$

2. If an investor has a required rate of return of $10 \%$, is this company a promising investment candidate?

## Solution:

No. Although the company is profitable, the company's ROIC is below the investors' required rate of return, so the investor should look to invest else-
where. However, this is only a single historical year, and myriad other factors will have to be considered by the investor.

ROIC has several practical benefits:

- Unlike project NPV and IRR, it can be calculated using data available to independent investment analysts.
- Unlike such measures as operating profit or operating profit margin (operating profit as a percentage of sales), ROIC accounts for the capital needed to generate returns. The relationship between operating profit margin and ROIC can be illustrated by decomposing ROIC as follows:

$$
\begin{aligned}
& \text { ROIC }=\frac{\text { After-tax operating profit }}{\text { Average invested capital }} \\
& \text { ROIC }=\frac{\text { After-tax operating profit }}{\text { Sales }} \times \frac{\text { Sales }}{\text { Average invested capital }}
\end{aligned}
$$

The term on the left is after-tax operating profit margin, and the term on the right is a measure of capital or asset turnover-how much in annual sales the company's invested capital is generating. Therefore, there are two paths to a high or increasing ROIC: profit margin and turnover. A high-margin company can earn a low ROIC if turnover is low, and a low-margin company can earn an attractive ROIC if turnover is high.

- While NPV and IRR measures allow the comparison of individual projects within a firm, ROIC is an aggregate measure to gauge a firm's ability to create value across all its investments. This is important because investors generally cannot invest in individual projects, only the company as a whole (some exceptions exist, such as leases and asset-backed securities, which will be discussed later in fixed-income modules).
- ROIC can be compared to investors' required rate of return. If an issuer's ROIC is greater than the investors' required rate of return over time, the issuer is creating value for investors. Conversely, if the ROIC is below the required rate of return, it is an indicator that investors would have been better off investing elsewhere; the issuer should take actions to improve turnover or profit margins, dispose of investments in underperforming areas, return capital, or seek alternative areas of investment with greater returns.
- Since ROIC measures the returns that an issuer earns on investing both debt and equity, it should be compared to a required rate of return for both its debt and equity investors. As discussed in prior lessons, equity is riskier than debt and therefore has a higher required return, so using solely a required return for equity investors would be an overestimate. In the next module, we will calculate a blended required rate of return as part of a broader discussion of financing.

ROIC does have limitations and shortcomings:

- ROIC, unlike NPV and IRR, is an accounting, not cash-based, measure. Operating profit and cash flows can differ materially, owing to the recognition of certain items and the difference between depreciation and capital expenditures.
- ROIC is backward looking and can be volatile from year to year based on investment activity and business conditions, so examining trends and rates of change is essential. Profitable investments can sometimes take years to earn competitive returns.
- As a highly aggregated measure, ROIC may mask profitable or unprofitable areas of the issuer.

Analysts should also be aware that there is less consensus on the measurement of ROIC than such measures as operating profit margin, particularly the denominator. Many practitioners, for example, subtract some or all intangible assets and "excess" cash from the denominator and may exclude certain long-term liabilities, such as pension and deferred tax liabilities that are not considered "invested capital." Additional calculation issues, which will be addressed later in the curriculum, include treatments of "non-recurring" expenses, leased assets, and equity from non-controlling interests.

## QUESTION SET

![](https://cdn.mathpix.com/cropped/2025_06_02_bc7ef5cf033e34d51879g-11.jpg?height=101&width=101&top_left_y=692&top_left_x=1706)

1. True or false. During the planning and prioritization step in the capital allocation process, a firm's management should accept any investment project with an estimated positive NPV.

## Solution:

False. Some projects that appear attractive in isolation may be less desirable when considered in the context of existing operations, other proposed projects, ESG factors, or financing constraints.
2. Which step in the capital allocation process most likely involves the calculation of NPV and IRR?
A. Idea generation
B. Investment analysis
C. Planning and prioritization

## Solution:

B is correct. The investment analysis step involves forecasting the amount, timing, duration, and volatility of an investment's expected cash flows and subsequently using NPV and IRR to determine whether the investment will be a wise use of capital.
A is incorrect because during the idea generation step, management gathers ideas and chooses the most promising ones for further analysis. However, in this early phase, no forecasts or profitability analysis involving NPV or IRR is conducted.
C is incorrect because during the planning and prioritization step, management selects and prioritizes profitable investment opportunities that, when considered together, are the most value enhancing on a risk-adjusted return basis. This step occurs after NPV and IRR analysis.
3. Which of the following relationships is true?
A. If IRR > Required rate of return, then NPV < 0.
B. If $\mathrm{IRR}=$ Required rate of return, then $\mathrm{NPV}=0$.
C. Required rate of return = Risk-free rate.

Solution:
B is correct. IRR is the required rate of return that makes an investment's NPV equal to zero.
A is incorrect because IRR is the required rate of return for which NPV = 0. If IRR is greater than the required rate of return, then NPV of cash flows discounted at the required rate of return will be greater than zero, not less than zero.

C is incorrect because when calculating NPV, expected cash flows should be discounted at the required rate of return to reflect investors' opportunity cost for similarly risky projects, not a rate that ignores risk.
4. A company is considering undertaking a new capital investment project that is expected to cost $\$ 33$ million. The after-tax cash-flow projection for the next four years is shown below. Calculate NPV and IRR assuming a required rate of return of $7.5 \%$.

| Year | $\mathbf{1}$ | $\mathbf{2}$ | $\mathbf{3}$ | $\mathbf{4}$ |
| :--- | :---: | :---: | :---: | :---: |
| Cash flow | 0 | 16 | 24 | 7 |

Solution:
To calculate NPV, we use the following equation:

$$
\begin{aligned}
& \mathrm{NPV}=C F_{0}+\frac{C F_{1}}{(1+r)^{1}}+\frac{C F_{2}}{(1+r)^{2}}+\ldots+\frac{C F_{T}}{(1+r)^{T}} \\
& \mathrm{NPV}=-33+\frac{0}{(1+0.075)^{1}}+\frac{16}{(1+0.075)^{2}}+\frac{24}{(1+0.075)^{3}}+\frac{7}{(1+0.075)^{4} .} \\
& \mathrm{NPV}=\$ 5.41 \text { million. }
\end{aligned}
$$

Using the same equation, we can also solve for IRR by assuming that NPV = 0.

$$
\begin{aligned}
& 0=-33+\frac{0}{(1+\mathrm{IRR})^{1}}+\frac{16}{(1+\mathrm{IRR})^{2}}+\frac{24}{(1+\mathrm{IRR})^{3}}+\frac{7}{(1+\mathrm{IRR})^{4}} \\
& \mathrm{IRR}=13.57 \%
\end{aligned}
$$

5. Based on the information below, calculate ROIC for year 20X2. Values in each column are as of the end of the period. Assume operating profit of 3,890 and a tax rate of $17 \%$ in Year 20X2.

Balance Sheet

| Assets: | 20X1 | 20X2 |
| :--- | :--- | :--- |
| Cash | 490 | 700 |
| Short-term assets | 10,520 | 11,790 |
| Long-term assets | 22,400 | 23,740 |
| Total assets | 33,410 | 36,230 |
| Liabilities and equity: |  |  |
| Accounts payable | 5,970 | 6,620 |
| Short-term debt | 2,470 | 2,840 |
| Long-term debt | 9,880 | 10,550 |
| Share capital | 15,090 | 16,220 |
| Total liabilities and equity | 33,410 | 36,230 |

## Solution:

ROIC can be calculated using the following formula:

$$
\text { ROIC }=\frac{(1-\text { Tax rate }) \times \text { Operating profit }}{\text { Average LT liabilities and equity }_{t-1, t}} .
$$

$$
\begin{aligned}
& \mathrm{ROIC}=\frac{(1-0.17) \times 3,890}{(9,880+15,090+10,550+16,220) / 2} \\
& \mathrm{ROIC}=12.48 \%
\end{aligned}
$$

6. Complete the sentences by filling in the blanks using the following terms.

Note that each term can be used more than once.
equity
profit margin
asset turnover
long-term liabilities
average invested capital

ROIC can be increased by increasing $\qquad$ or $\qquad$ . A high- $\qquad$ company can earn a low ROIC if $\qquad$ is low, and a low- $\qquad$ company can earn a high ROIC if $\qquad$ is high.

## Solution:

ROIC can be increased by increasing profit margin or asset turnover. A high-profit margin company can earn a low ROIC if asset turnover is low, and a low-profit margin company can earn a high ROIC if asset turnover is high.
7. Explain why a government-owned company may have a low required rate of return compared to a small technology company.

## Solution:

The required rate of return is the discount rate that investors require given the riskiness of the project or company and the rate of return available on other similarly risky investments. Considering the business risk of both companies, a government-owned company can be perceived as a lower-risk issuer compared to a small technology company. Consequently, investors would require less compensation for risk.

## CAPITAL ALLOCATION PRINCIPLES AND PITFALLS

describe principles of capital allocation and common capital allocation pitfalls

