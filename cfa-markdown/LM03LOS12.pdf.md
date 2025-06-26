4. Compared to the normal distribution, this sample's distribution is best described as having tails of the distribution with:
A. less probability than the normal distribution.
B. the same probability as the normal distribution.
C. more probability than the normal distribution.

Solution:
C is correct. The excess kurtosis is positive, indicating that the distribution is "fat-tailed"; therefore, there is more probability in the tails of the distribution relative to the normal distribution.

## CORRELATION BETWEEN TWO VARIABLES

interpret correlation between two variables to address an investment problem

## Scatter Plot

A scatter plot is a useful tool for displaying and understanding potential relationships between two variables. Suppose an analyst is interested in the relative performance of two sectors, information technology (IT) and utilities, compared to the market index over a specific five-year period. The analyst has obtained the sector and market index returns for each month over the five years under investigation. Exhibit 24 presents a scatterplot of returns for the IT sector index versus the S\&P 500, and Exhibit 25 presents a scatterplot of returns for the utilities sector index versus the S\&P 500.

Tight (loose) clustering signals a potentially stronger (weaker) relationship between the two variables.

Exhibit 24: Scatter Plot of Information Technology Sector Index Return versus S\&P 500 Index Return
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-02.jpg?height=687&width=594&top_left_y=369&top_left_x=920)

Exhibit 25: Scatter Plot of Utilities Sector Index Return versus S\&P 500 Index Return
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-02.jpg?height=676&width=576&top_left_y=1397&top_left_x=932)

Despite their relatively straightforward construction, scatter plots convey valuable information. First, it is important to inspect for any potential association between the two variables. The pattern of the scatter plot may indicate no apparent relationship, a linear association, or a non-linear relationship. Furthermore, the strength of the association can be determined by how closely the data points are clustered around a line drawn across the observations.

Examining Exhibit 24 we can see the returns of the IT sector are highly positively associated with S\&P 500 Index returns because the data points are tightly clustered along a positively sloped line. In contrast, Exhibit 25 tells a different story for relative
performance of the utilities sector and S\&P 500 index returns: The data points appear to be distributed in no discernable pattern, indicating no clear relationship among these variables.

Second, observing the data points located toward the ends of each axis, which represent the maximum or minimum values, provides a quick sense of the data range. Third, if a relationship among the variables is apparent, inspecting the scatter plot can help to spot extreme values (i.e., outliers). For example, an outlier data point is readily detected in Exhibit 24 as indicated by the arrow. Finding these extreme values and handling them with appropriate measures is an important part of the financial modeling process.

Scatter plots are a powerful tool for finding patterns between two variables, for assessing data range, and for spotting extreme values. In some situations, however, we need to inspect for pairwise associations among many variables-for example, when conducting feature selection from dozens of variables to build a predictive model.

Now that we have some understanding of sample variance and standard deviation, we can more formally consider the concept of correlation between two random variables that we previously explored visually in the scatter plots.

## Covariance and Correlation

Correlation is a measure of the linear relationship between two random variables. The first step in considering how two variables vary together, however, is constructing their covariance.

Definition of Sample Covariance. The sample covariance ( $s_{X Y}$ ) is a measure of how two variables in a sample move together:

$$
s_{X Y}=\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)\left(Y_{i}-\bar{Y}\right)}{n-1} .
$$

Equation 10 indicates that the sample covariance is the average value of the product of the deviations of observations on two random variables ( $X_{i}$ and $Y i$ ) from their sample means. If the random variables are returns, the units would be returns squared. Also, note the use of $n-1$ in the denominator, which ensures that the sample covariance is an unbiased estimate of population covariance.

Stated simply, covariance is a measure of the joint variability of two random variables. If the random variables vary in the same direction-for example, $X$ tends to be above its mean when $Y$ is above its mean, and $X$ tends to be below its mean when $Y$ is below its mean-then their covariance is positive. If the variables vary in the opposite direction relative to their respective means, then their covariance is negative.

The size of the covariance measure alone is difficult to interpret as it involves squared units of measure and so depends on the magnitude of the variables. This brings us to the normalized version of covariance, which is the correlation coefficient.

## Definition of Sample Correlation Coefficient. The sample correlation coefficient is a standardized measure of how two variables in a sample move together. The sample correlation coefficient $\left(r_{X Y}\right)$ is the ratio of the sample covariance to the product of the two variables' standard deviations:

$$
r_{X Y}=\frac{s_{X Y}}{s_{X} s_{Y}}
$$

Importantly, the correlation coefficient expresses the strength of the linear relationship between the two random variables.

## Properties of Correlation

We now discuss the correlation coefficient, or simply correlation, and its properties in more detail:

1. Correlation ranges from -1 and +1 for two random variables, $X$ and $Y$ :
$-1 \leq r_{X Y} \leq+1$.
2. A correlation of 0 , termed uncorrelated, indicates an absence of any linear relationship between the variables.
3. A positive correlation close to +1 indicates a strong positive linear relationship. A correlation of 1 indicates a perfect linear relationship.
4. A negative correlation close to -1 indicates a strong negative (i.e., inverse) linear relationship. A correlation of -1 indicates a perfect inverse linear relationship.

We return to scatter plots to illustrate correlation visually. In contrast to the correlation coefficient, which expresses the relationship between two data series using a single number, a scatter plot depicts the relationship graphically. Therefore, scatter plots are a very useful tool for the sensible interpretation of a correlation coefficient.

Exhibit 26 shows examples of scatter plots. Panel A shows the scatter plot of two variables with a correlation of +1 . Note that all the points on the scatter plot in Panel A lie on a straight line with a positive slope. Whenever variable $X$ increases by one unit, variable $Y$ increases by two units. Because all of the points in the graph lie on a straight line, an increase of one unit in $X$ is associated with an exact two-unit increase in $Y$, regardless of the level of $X$. Even if the slope of the line were different (but positive), the correlation between the two variables would still be +1 as long as all the points lie on that straight line. Panel B shows a scatter plot for two variables with a correlation coefficient of -1 . Once again, the plotted observations all fall on a straight line. In this graph, however, the line has a negative slope. As $X$ increases by one unit, $Y$ decreases by two units, regardless of the initial value of $X$.

## Exhibit 26: Scatter Plots Showing Various Degrees of Correlation

A. Variables With a Correlation of +1
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-05.jpg?height=513&width=394&top_left_y=372&top_left_x=399)
C. Variables With a Correlation of 0
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-05.jpg?height=514&width=397&top_left_y=979&top_left_x=398)
B. Variables With a Correlation of -1
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-05.jpg?height=521&width=405&top_left_y=371&top_left_x=1001)
D. Variables With a Strong Nonlinear Association
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-05.jpg?height=516&width=403&top_left_y=1019&top_left_x=1002)

Panel C shows a scatter plot of two variables with a correlation of 0 ; they have no linear relation. This graph shows that the value of variable $X$ tells us nothing about the value of variable $Y$. Panel D shows a scatter plot of two variables that have a non-linear relationship. Because the correlation coefficient is a measure of the linear association between two variables, it would not be appropriate to use the correlation coefficient in this case.

## Limitations of Correlation Analysis

Exhibit 26 illustrates that correlation measures the linear association between two variables, but it may not always be reliable. Two variables can have a strong nonlinear relation and still have a very low correlation. A nonlinear relation between variables $X$ and $Y$ is shown in Panel D. Even though these two variables are perfectly associated, there is no linear association between them and hence no meaningful correlation.

Correlation may also be an unreliable measure when outliers are present in one or both variables. As we have seen, outliers are small numbers of observations at either extreme (small or large) of a sample. Correlation may be quite sensitive to outliers. In such a situation, we should consider whether it makes sense to exclude those outlier observations and whether they are noise or true information. We use judgment to determine whether those outliers contain information about the two variables' relationship, and should be included in the correlation analysis, or contain
no information, and should be excluded. If they are to be excluded from the correlation analysis, as we have seen previously, outlier observations can be handled by trimming or winsorizing the dataset.

Importantly, keep in mind that correlation does not imply causation. Even if two variables are highly correlated, one does not necessarily cause the other in the sense that certain values of one variable bring about the occurrence of certain values of the other.

Moreover, with visualizations too, including scatter plots, we must be on guard against unconsciously making judgments about causal relationships that may or may not be supported by the data.

The term spurious correlation has been used to refer to:

- correlation between two variables that reflects chance relationships in a particular dataset;
- correlation induced by a calculation that mixes each of two variables with a third variable; and
- correlation between two variables arising not from a direct relation between them but from their relation to a third variable.

As an example of the chance relationship, consider the monthly US retail sales of beer, wine, and liquor and the atmospheric carbon dioxide levels from 2000 to 2018. The correlation is 0.824 , indicating that a positive relation exists between the two. However, there is no reason to suspect that the levels of atmospheric carbon dioxide are related to the retail sales of beer, wine, and liquor.

As an example of the second type of spurious correlation, two variables that are uncorrelated may be correlated if divided by a third variable. For example, consider a cross-sectional sample of companies' dividends and total assets. While there may be a low correlation between these two variables, dividing each by market capitalization may increase the correlation.

As an example of the third type of spurious correlation, height may be positively correlated with the extent of a person's vocabulary, but the underlying relationships are between age and height and between age and vocabulary.

Investment professionals must be cautious in basing investment strategies on high correlations. Spurious correlations may suggest investment strategies that appear profitable but would not be, if implemented.

A further issue is that correlation does not tell the whole story about the data. Consider Anscombe's Quartet, discussed in Example 7, for which dissimilar graphs can be developed with variables that have the same mean, same standard deviation, and same correlation.

## EXAMPLE 7

## Anscombe's Quartet

Francis Anscombe, a British statistician, developed datasets that illustrate why just looking at summary statistics (i.e., mean, standard deviation, and correlation) does not fully describe the data. He created four datasets (designated I, II, III, and IV), each with two variables, $X$ and $Y$, such that:

- The $X$ s in each dataset have the same mean and standard deviation, 9.00 and 3.32 , respectively.
- The Ys in each dataset have the same mean and standard deviation, 7.50 and 2.03, respectively.
- The Xs and Ys in each dataset have the same correlation of 0.82.

Exhibit 27: Summary Statistics

| Observation | I |  | II |  | III |  | IV |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  | $X$ | $Y$ | $\boldsymbol{x}$ | $Y$ | $X$ | $Y$ | $\boldsymbol{x}$ | $Y$ |
| 1 | 10 | 8.04 | 10 | 9.14 | 10 | 7.46 | 8 | 6.6 |
| 2 | 8 | 6.95 | 8 | 8.14 | 8 | 6.77 | 8 | 5.8 |
| 3 | 13 | 7.58 | 13 | 8.74 | 13 | 12.74 | 8 | 7.7 |
| 4 | 9 | 8.81 | 9 | 8.77 | 9 | 7.11 | 8 | 8.8 |
| 5 | 11 | 8.33 | 11 | 9.26 | 11 | 7.81 | 8 | 8.5 |
| 6 | 14 | 9.96 | 14 | 8.1 | 14 | 8.84 | 8 | 7 |
| 7 | 6 | 7.24 | 6 | 6.13 | 6 | 6.08 | 8 | 5.3 |
| 8 | 4 | 4.26 | 4 | 3.1 | 4 | 5.39 | 19 | 13 |
| 9 | 12 | 10.8 | 12 | 9.13 | 12 | 8.15 | 8 | 5.6 |
| 10 | 7 | 4.82 | 7 | 7.26 | 7 | 6.42 | 8 | 7.9 |
| 11 | 5 | 5.68 | 5 | 4.74 | 5 | 5.73 | 8 | 6.9 |
| $N$ | 11 | 11 | 11 | 11 | 11 | 11 | 11 | 11 |
| Mean | 9.00 | 7.50 | 9.00 | 7.50 | 9.00 | 7.50 | 9.00 | 7.50 |
| Standard deviation | 3.32 | 2.03 | 3.32 | 2.03 | 3.32 | 2.03 | 3.32 | 2.03 |
| Correlation | 0.82 |  | 0.82 |  | 0.82 |  | 0.82 |  |

While the $X$ variable has the same values for I, II, and III in the quartet of datasets, the $Y$ variables are quite different, creating different relationships. The four datasets are:

I An approximate linear relationship between $X$ and $Y$.
II A curvilinear relationship between $X$ and $Y$.
III A linear relationship except for one outlier.
IV A constant $X$ with the exception of one outlier.
Depicting the quartet visually,

Exhibit 28: Visual Depiction
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-08.jpg?height=562&width=396&top_left_y=342&top_left_x=718)
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-08.jpg?height=559&width=391&top_left_y=341&top_left_x=1325)

III
IV
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-08.jpg?height=513&width=389&top_left_y=990&top_left_x=719)
![](https://cdn.mathpix.com/cropped/2025_06_02_5bd2745d9a15e867e2efg-08.jpg?height=513&width=391&top_left_y=990&top_left_x=1325)

The bottom line? Knowing the means and standard deviations of the two variables, as well as the correlation between them, does not tell the entire story.

Source: Francis John Anscombe, "Graphs in Statistical Analysis," American Statistician 27 (February 1973): 17-21.

## QUESTION SET

1. A correlation of 0.34 between two variables, $X$ and $Y$, is best described as:
A. changes in $X$ causing changes in $Y$.
B. a positive association between $X$ and $Y$.
C. a curvilinear relationship between $X$ and $Y$.

## Solution:

B is correct. The correlation coefficient is positive, indicating that the two series move together.
2. Which of the following is a potential problem with interpreting a correlation coefficient?
A. Outliers
B. Spurious correlation

## C. Both outliers and spurious correlation <br> Solution:

C is correct. Both outliers and spurious correlation are potential problems with interpreting correlation coefficients.

Use the information in Exhibit 29 to answer questions 3 and 4.
An analyst is evaluating the tendency of returns on the portfolio of stocks she manages to move along with bond and real estate indexes. She gathered monthly data on returns and the indexes:

## Exhibit 29: Monthly Data on Returns and Indexes

|  | Returns (\%) |  |  |
| :--- | :--- | :--- | :--- |
|  | Portfolio Returns | Bond Index Returns | Real Estate Index Returns |
| Arithmetic average | 5.5 | 3.2 | 7.8 |
| Standard deviation | 8.2 | 3.4 | 10.3 |
|  | Portfolio Returns and Bond Index Returns |  | Portfolio Returns and Real Estate Index Returns |
| Covariance | 18.9 | -55.9 |  |

3. Without calculating the correlation coefficient, the correlation of the portfolio returns and the bond index returns is most likely to be:
A. negative.
B. zero.
C. positive.

Solution:
C is correct. The correlation coefficient is positive because the covariance is positive.
4. Without calculating the correlation coefficient, the correlation of the portfolio returns and the real estate index returns is:
A. negative.
B. zero.
C. positive.

Solution:
A is correct. The correlation coefficient is negative because the covariance is negative.
5. Consider two variables, $A$ and $B$. If variable $A$ has a mean of -0.56 , variable $B$ has a mean of 0.23 , and the covariance between the two variables is positive, the correlation between these two variables is:
A. negative.
B. zero.

## C. positive.

Solution:
C is correct. The correlation coefficient must be positive because the covariance is positive. The fact that one or both variables have a negative mean does not affect the sign of the correlation coefficient.

