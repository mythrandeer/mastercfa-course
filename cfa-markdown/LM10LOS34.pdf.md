Exhibit 31: Fit of the Model with and without Data Errors
A. Before the Data Errors Are Corrected
![](https://cdn.mathpix.com/cropped/2025_06_02_391d8f51f8084e7c60cfg-1.jpg?height=450&width=809&top_left_y=393&top_left_x=501)
B. After the Data Errors Are Corrected
![](https://cdn.mathpix.com/cropped/2025_06_02_391d8f51f8084e7c60cfg-1.jpg?height=454&width=809&top_left_y=933&top_left_x=501)

## PREDICTION IN THE SIMPLE LINEAR REGRESSION MODEL

describe the use of analysis of variance (ANOVA) in regression analysis, interpret ANOVA results, and calculate and interpret the standard error of estimate in a simple linear regression
calculate and interpret the predicted value for the dependent variable, and a prediction interval for it, given an estimated linear regression model and a value for the independent variable

## ANOVA and Standard Error of Estimate in Simple Linear Regression

We often represent the sums of squares from a regression model in an analysis of variance (ANOVA) table, as shown in Exhibit 32, which presents the sums of squares, the degrees of freedom, the mean squares, and the $F$-statistic. Notice that the variance of the dependent variable is the ratio of the sum of squares total to $n-1$.

Exhibit 32: Analysis of Variance Table for Simple Linear Regression

| Source | Sum of Squares | Degrees of Freedom | Mean Square | $F$-Statistic |
| :--- | :--- | :--- | :--- | :--- |
| Regression | SSR $=\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2}$ | 1 | MSR $=\frac{\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2}}{1}$ | $F=\frac{\mathrm{MSR}}{\mathrm{MSE}}=\frac{\frac{\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2}}{1}}{\frac{\sum_{i=1}^{n}\left(Y_{i}-\widehat{Y}_{i}\right)^{2}}{n-2}}$ |
| Error | SSE $=\sum_{i=1}^{n}\left(Y_{i}-\widehat{Y}_{i}\right)^{2}$ | $n-2$ | MSE $=\frac{\sum_{i=1}^{n}\left(Y_{i}-\widehat{Y}_{i}\right)^{2}}{n-2}$ |  |
| Total | $\mathrm{SST}=\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)^{2}$ | $n-1$ |  |  |

From the ANOVA table, we can also calculate the standard error of the estimate $\left(s_{e}\right)$, which is also known as the standard error of the regression or the root mean square error. The $s_{e}$ is a measure of the distance between the observed values of the dependent variable and those predicted from the estimated regression-the smaller the $s_{e}$, the better the fit of the model. The $s_{e}$, along with the coefficient of determination and the $F$-statistic, is a measure of the goodness of the fit of the estimated regression line. Unlike the coefficient of determination and the $F$-statistic, which are relative measures of fit, the standard error of the estimate is an absolute measure of the distance of the observed dependent variable from the regression line. Thus, the $s_{e}$ is an important statistic used to evaluate a regression model and is used to calculate prediction intervals and to perform tests on the coefficients. The calculation of $s_{e}$ is straightforward once we have the ANOVA table because it is the square root of the MSE:

$$
\text { Standard error of the estimate }\left(s_{e}\right)=\sqrt{\mathrm{MSE}}=\sqrt{\frac{\sum_{i=1}^{n}\left(Y_{i}-\widehat{Y}_{i}\right)^{2}}{n-2}} \text {. }
$$

We show the ANOVA table for our ROA regression example in Exhibit 32, using the information from Exhibit 33. For a 5 percent level of significance, the critical $F$-value for the test of whether the model is a good fit (i.e., whether the slope coefficient is different from zero) is 7.71 . We can get this critical value in the following ways:

- Excel [F.INV(0.95,1,4)]
- $R[\mathrm{qf}(.95,1,4)]$
- Python [from scipy.stats import f and f.ppf(.95,1,4)]

With a calculated $F$-statistic of 16.0104 and a critical $F$-value of 7.71, we reject the null hypothesis and conclude that the slope of our simple linear regression model for ROA is different from zero.

Exhibit 33: ANOVA Table for ROA Regression Model

| Source | Sum of Squares | Degrees of Freedom | Mean Square | $F$-Statistic |
| :--- | :--- | :--- | :--- | :--- |
| Regression | 191.625 | 1 | 191.625 | 16.0104 |
| Error | 47.875 | 4 | 11.96875 |  |
| Total | 239.50 | 5 |  |  |

The calculations to derive the ANOVA table and ultimately to test the goodness of fit of the regression model can be time consuming, especially for samples with many observations. However, statistical packages, such as SAS, SPSS Statistics, and Stata, as well as software, such as Excel, R, and Python, produce the ANOVA table as part of the output for regression analysis.

## Prediction Using Simple Linear Regression and Prediction Intervals

Financial analysts often want to use regression results to make predictions about a dependent variable. For example, we might ask, "How fast will the sales of XYZ Corporation grow this year if real GDP grows by 4 percent?" But we are not merely interested in making these forecasts; we also want to know how certain we can be about the forecasts' results. A forecasted value of the dependent variable, $\widehat{Y}_{f}$ is determined using the estimated intercept and slope, as well as the expected or forecasted independent variable, $\mathrm{X}_{\mathrm{f}}$ :

$$
\widehat{Y}_{f}=\hat{b}_{0}+\hat{b}_{1} X_{f} .
$$

In our ROA regression model, if we forecast a company's CAPEX to be 6 percent, the forecasted ROA based on our estimated equation is 12.375 percent:

$$
\widehat{Y}_{f}=4.875+(1.25 \times 6)=12.375 .
$$

However, we need to consider that the estimated regression line does not describe the relation between the dependent and independent variables perfectly; it is an average of the relation between the two variables. This is evident because the residuals are not all zero.

Therefore, an interval estimate of the forecast is needed to reflect this uncertainty. The estimated variance of the prediction error, $s_{f}^{2}$, of $Y$, given $X$, is

$$
s_{f}^{2}=s_{e}^{2}\left[1+\frac{1}{n}+\frac{\left(X_{f}-\bar{X}\right)^{2}}{(n-1) s_{X}^{2}}\right]=s_{e}^{2}\left[1+\frac{1}{n}+\frac{\left(X_{f}-\bar{X}\right)^{2}}{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}\right],
$$

and the standard error of the forecast is

$$
s_{f}=s_{e} \sqrt{1+\frac{1}{n}+\frac{\left(X_{f}-\bar{X}\right)^{2}}{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}}
$$

The standard error of the forecast depends on the following:

- the standard error of the estimate, $\mathrm{s}_{\mathrm{e}}$;
- the number of observations, $n$;
- the forecasted value of the independent variable, $\mathrm{X}_{\mathrm{f}}$, used to predict the dependent variable and its deviation from the estimated mean, $\bar{X}$; and
- the variation of the independent variable.

We can see the following from the equation for the standard error of the forecast:

1. The better the fit of the regression model, the smaller the standard error of the estimate ( $\mathrm{s}_{\mathrm{e}}$ ) and, therefore, the smaller standard error of the forecast.
2. The larger the sample size ( $n$ ) in the regression estimation, the smaller the standard error of the forecast.
3. The closer the forecasted independent variable ( $\mathrm{X}_{\mathrm{f}}$ ) is to the mean of the independent variable ( $\bar{X}$ ) used in the regression estimation, the smaller the standard error of the forecast.

Once we have this estimate of the standard error of the forecast, determining a prediction interval around the predicted value of the dependent variable $\left(\widehat{Y}_{f}\right)$ is very similar to estimating a confidence interval around an estimated parameter. The prediction interval is

$$
\widehat{Y}_{f} \pm t_{\text {critical for } \alpha / 2} s_{f} .
$$

We outline the steps for developing the prediction interval in Exhibit 34.

Exhibit 34: Creating a Prediction Interval around the Predicted Dependent Variable
![](https://cdn.mathpix.com/cropped/2025_06_02_391d8f51f8084e7c60cfg-4.jpg?height=681&width=1158&top_left_y=776&top_left_x=641)

For our ROA regression model, given that the forecasted value of CAPEX is 6.0, the predicted value of $Y$ is 12.375:

$$
\widehat{Y}_{f}=4.875+1.25 X_{f}=4.875+(1.25 \times 6.0)=12.375 .
$$

Assuming a 5 percent significance level ( $\alpha$ ), two sided, with $n-2$ degrees of freedom (so, $\mathrm{df}=4$ ), the critical values for the prediction interval are $\pm 2.776$.

The standard error of the forecast is

$$
s_{f}=3.459588 \sqrt{1+\frac{1}{6}+\frac{(6-6.1)^{2}}{122.640}}=3.459588 \sqrt{1.166748}=3.736912
$$

The 95 percent prediction interval then becomes

$$
\begin{aligned}
& 12.375 \pm 2.776(3.736912) \\
& 12.375 \pm 10.3737 \\
& \left\{2.0013<\hat{Y}_{f}<22.7487\right\}
\end{aligned}
$$

For our ROA regression example, we can see how the standard error of the forecast $\left(s_{f}\right)$ changes as our forecasted value of the independent variable gets farther from the mean of the independent variable ( $X_{f}-\bar{X}$ ) in Exhibit 35. The mean of CAPEX is 6.1 percent, and the band that represents one standard error of the forecast, above and below the forecast, is minimized at that point and increases as the independent variable gets farther from $\bar{X}$.

Exhibit 35: ROA Forecasts and Standard Error of the Forecast
![](https://cdn.mathpix.com/cropped/2025_06_02_391d8f51f8084e7c60cfg-5.jpg?height=1007&width=1026&top_left_y=326&top_left_x=395)

## QUESTION SET

Suppose you run a cross-sectional regression for 100 companies, where the dependent variable is the annual return on stock and the independent variable is the lagged percentage of institutional ownership (INST). The results of this simple linear regression estimation are shown in Exhibit 36. Evaluate the model by answering questions 1-4.

Exhibit 36: ANOVA Table for Annual Stock Return Regressed on Institutional Ownership

| Source | Sum of Squares | Degrees of Freedom | Mean Square |
| :--- | :--- | :--- | :--- |
| Regression | 576.1485 | 1 | 576.1485 |
| Error | 1,873.5615 | 98 | 19.1180 |
| Total | 2,449.7100 |  |  |

1. What is the coefficient of determination for this regression model?

## Solution:

The coefficient of determination is sum of squares regression/sum of squares total: $576.148 \div 2,449.71=0.2352$, or 23.52 percent.
2. What is the standard error of the estimate for this regression model?

## Solution:

The standard error of the estimate is the square root of the mean square error: $\sqrt{19.1180}=4.3724$.
3. At a 5 percent level of significance, do we reject the null hypothesis of the slope coefficient equal to zero if the critical $F$-value is 3.938 ?
Solution:
Using a six-step process for testing hypotheses, we get the following:

| Step 1 | State the hypotheses. | $H_{0}: b_{1}=0$ versus $H_{a}: b_{1} \neq 0$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $F=\frac{\text { MSR }}{\text { MSE }}$ <br> with 1 and 98 degrees of freedom. |
| Step 3 | Specify the level of significance. | $\alpha=5 \%$ (one tail, right side). |
| Step 4 | State the decision rule. | Critical $F$-value $=3.938$. <br> Reject the null hypothesis if the calculated $F$-statistic is greater than 3.938 . |
| Step 5 | Calculate the test statistic. | $F=\frac{576.1485}{19.1180}=30.1364$ |
| Step 6 | Make a decision. | Reject the null hypothesis because the calculated $F$-statistic is greater than the critical $F$-value. Evidence is sufficient to indicate that the slope coefficient is different from 0.0 . |

4. Based on your answers to the preceding questions, evaluate this simple linear regression model.

## Solution:

The coefficient of determination indicates that variation in the independent variable explains 23.52 percent of the variation in the dependent variable. Also, the $F$-statistic test confirms that the model's slope coefficient is different from 0 at the 5 percent level of significance. In sum, the model seems to fit the data reasonably well.

The following applies to questions 5-11.
Suppose we want to forecast a company's net profit margin (NPM) based on its research and development expenditures scaled by revenues (RDR), using the model estimated in Example 2 and the details provided in Exhibit 8. The regression model was estimated using data on eight companies as

$$
\widehat{Y}_{f}=16.5-1.3 X_{f},
$$

with a standard error of the estimate $\left(s_{e}\right)$ of 1.8618987 and variance of RDR, $\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}{(n-1)}$, of 4.285714, as given.
5. What is the predicted value of NPM if the forecasted value of RDR is 5 ?

## Solution:

The predicted value of NPM is 10: $16.5-(1.3 \times 5)=10$.

| 6. What is the standard error of the forecast $\left(s_{f}\right)$ if the forecasted value of RDR is 5 ? <br> Solution: <br> To derive the standard error of the forecast $\left(s_{f}\right)$, we first have to calculate the variation of RDR. Then, we have all the pieces to calculate $\mathrm{s}_{\mathrm{f}}$ : $\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}=4.285714 \times 7=30 .$ $s_{f}=1.8618987 \sqrt{1+\frac{1}{8}+\frac{(5-7.5)^{2}}{30}}=2.1499 .$ |
| :--- |
| 7. What is the 95 percent prediction interval for the predicted value of NPM using critical $t$-values $(\mathrm{df}=6)$ of $\pm 2.447$ ? <br> Solution: <br> The 95 percent prediction interval for the predicted value of NPM is $\{10 \pm 2.447(2.1499)\},$ $\left\{4.7392<\widehat{Y}_{f}<15.2608\right\} .$ |
| 8. What is the predicted value of NPM if the forecasted value of RDR is 15 ? <br> Solution: <br> The predicted value of NPM is $-3: 16.5-(1.3 \times 15)=-3$. |
| 9. Referring to exhibit 9, what is the standard error of the forecast if the forecasted value of RDR is 15 ? <br> Solution: <br> To derive the standard error of the forecast, we first must calculate the variation of RDR. Then, we can calculate $\mathrm{s}_{\mathrm{f}}$ : $\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}=4.285714 \times 7=30$ $s_{f}=1.8618987 \sqrt{1+\frac{1}{8}+\frac{(15-7.5)^{2}}{30}}=3.2249 .$ |
| The following applies to questions 12-17. <br> You are examining the results of a regression estimation that attempts to explain the unit sales growth of a business you are researching. The analysis of variance output for the regression is given in the Exhibit 37. The regression was based on five observations ( $n=5$ ). |


| Exhibit 37: ANOVA Output |  |  |
| :--- | :--- | :--- |
| Source | Mean Square | $p$-Value |
| Regression | 88.0 | 0.00904 |
| Residual | 2.4 |  |
| Total |  |  |
| 11. Calculate the sample variance of the dependent variable using information in the table. <br> Solution: <br> The sample variance of the dependent variable is the sum of squares total divided by its degrees of freedom ( $n-1=5-1=4$, as given). Thus, the sample variance of the dependent variable is $95.2 \div 4=23.8$. |  |  |
| 12. Calculate the coefficient of determination for this estimated model. <br> Solution: <br> The coefficient of determination $=88.0 \div 95.2=0.92437$. |  |  |
| 13. What hypothesis does the $F$-statistic test? <br> Solution: <br> The $F$-statistic tests whether all the slope coefficients in a linear regression are equal to zero. |  |  |
| 14. Is the $F$-test significant at the 0.05 significance level? <br> Solution: <br> The calculated value of the $F$-statistic is 36.667 , as shown in Exhibit 32. The corresponding $p$-value is less than 0.05 , so you reject the null hypothesis of a slope equal to zero. |  |  |
| 15. Calculate the standard error of the estimate. <br> Solution: <br> The standard error of the estimate is the square root of the mean square error: $s_{e}=\sqrt{2.4}=1.54919$. |  |  |

## FUNCTIONAL FORMS FOR SIMPLE LINEAR REGRESSION

describe different functional forms of simple linear regressions

Not every set of independent and dependent variables has a linear relation. In fact, we often see non-linear relationships in economic and financial data. Consider the revenues of a company over time illustrated in Exhibit 38, with revenues as the dependent

