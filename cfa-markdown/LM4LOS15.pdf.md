value with probability 0.55 . Scenario 2 has probability 0.25 and will result in recovery of USD0.50 per USD1 principal value with probability 0.85 , or in recovery of USD0.40 per USD1 principal value with probability 0.15 .

Using the data for Scenario 1 and Scenario 2, calculate the following:
A. Compute the expected recovery, given the first scenario.
B. Compute the expected recovery, given the second scenario.
C. Compute the expected recovery.
D. Graph the information in a probability tree diagram.
E. Compute the probability of each of the four possible recovery amounts: USD0.90, USD0.80, USD0.50, and USD0.40.

## Solution:

A. Outcomes associated with Scenario 1: With a 0.45 probability of a USD0.90 recovery per USD1 principal value, given Scenario 1, and with the probability of Scenario 1 equal to 0.75 , the probability of recovering USD0.90 is $0.45(0.75)=0.3375$. By a similar calculation, the probability of recovering USD0.80 is $0.55(0.75)=0.4125$.
Outcomes associated with Scenario 2: With a 0.85 probability of a USD0.50 recovery per USD1 principal value, given Scenario 2, and with the probability of Scenario 2 equal to 0.25 , the probability of recovering USD0.50 is $0.85(0.25)=0.2125$. By a similar calculation, the probability of recovering USD0.40 is $0.15(0.25)=0.0375$.
B. $E($ recovery $\mid$ Scenario 1$)=0.45(\mathrm{USD} 0.90)+0.55(\mathrm{USD} 0.80)=\mathrm{USD} 0.845$
C. $E($ recovery $\mid$ Scenario 2$)=0.85($ USD 0.50$)+0.15($ USD 0.40$)=$ USD 0.485
D. $E($ recovery $)=0.75($ USD 0.845$)+0.25($ USD 0.485$)=$ USD 0.755
![](https://cdn.mathpix.com/cropped/2025_06_26_99636c7d8e1d442e159dg-01.jpg?height=492&width=1104&top_left_y=1478&top_left_x=353)

## BAYES' FORMULA AND UPDATING PROBABILITY ESTIMATES

calculate and interpret an updated probability in an investment setting using Bayes' formula

A topic that is often useful in solving investment problems is Bayes' formula: what probability theory has to say about learning from experience.

## Bayes' Formula

When we make decisions involving investments, we often start with viewpoints based on our experience and knowledge. These viewpoints may be changed or confirmed by new knowledge and observations. Bayes' formula is a rational method for adjusting our viewpoints as we confront new information. Bayes' formula and related concepts are used in many business and investment decision-making contexts.

Bayes' formula makes use of the total probability rule:

$$
P(A)=\sum_{n} P\left(A \cap B_{n}\right) .
$$

To review, that rule expresses the probability of an event as a weighted average of the probabilities of the event, given a set of scenarios. Bayes' formula works in reverse; more precisely, it reverses the "given that" information. Bayes' formula uses the occurrence of the event to infer the probability of the scenario generating it. For that reason, Bayes' formula is sometimes called an inverse probability. In many applications, including those illustrating its use in this section, an individual is updating his/her beliefs concerning the causes that may have produced a new observation.

Bayes' Formula. Given a set of prior probabilities for an event of interest, if you receive new information, the rule for updating your probability of the event is as follows:

Updated probability of event given the new information

$$
=\frac{\text { Probability of the new information given event }}{\text { Unconditional probability of the new information }} \times \text { Prior probability of event } .
$$

In probability notation, this formula can be written concisely as follows:

$$
P(\text { Event } \mid \text { Information })=\frac{P(\text { Information } \mid \text { Event })}{P(\text { Information })} P(\text { Event }) .
$$

Consider the following example using frequencies-which may be more straightforward initially than probabilities-for illustrating and understanding Bayes' formula. Assume a hypothetical large-cap stock index has 500 member firms, of which 100 are technology firms, and 60 of these had returns of $>10$ percent, and 40 had returns of $\leq 10$ percent. Of the 400 non-technology firms in the index, 100 had returns of $>10$ percent, and 300 had returns of $\leq 10$ percent. The tree map in Exhibit 4 is useful for visualizing this example, which is summarized in the table in Exhibit 5.

Exhibit 4: Tree Map for Visualizing Bayes' Formula Using Frequencies
![](https://cdn.mathpix.com/cropped/2025_06_26_99636c7d8e1d442e159dg-03.jpg?height=689&width=844&top_left_y=317&top_left_x=483)
$P($ Tech $|R\rangle 10 \%)=60 /(60+100)$

Exhibit 5: Summary of Returns for Tech and Non-Tech Firms in Hypothetical Large-Cap Equity Index

| Rate of Return (R) | Type of Firm in Stock Index |  | Total |
| :--- | :--- | :--- | :--- |
|  | Non-Tech | Tech |  |
| R >10\% | 100 | 60 | 160 |
| $\mathrm{R} \leq 10 \%$ | 300 | 40 | 340 |
| Total | 400 | 100 | 500 |

What is the probability a firm is a tech firm given that it has a return of $>10$ percent or $P($ tech $\mid R>10 \%)$ ? Looking at the frequencies in the tree map and in the table, we can see many empirical probabilities, such as the following:

- $P($ tech $)=100 / 500=0.20$,
- $P($ non-tech $)=400 / 500=0.80$,
- $P(R>10 \% \mid$ tech $)=60 / 100=0.60$,
- $P(R>10 \% \mid$ non-tech $)=100 / 400=0.25$,
- $P(R>10 \%)=160 / 500=0.32$, and, finally,
- $P($ tech $\mid R>10 \%)=60 / 160=0.375$.

This probability is the answer to our initial question.
Without looking at frequencies, let us use Bayes' formula to find the probability that a firm has a return of $>10$ percent and then the probability that a firm with a return of $>10$ percent is a tech firm, $P($ tech $\mid R>10 \%)$. First,

$$
\begin{aligned}
& P(R>10 \%) \\
& =P(R>10 \% \mid \text { tech }) \times P(\text { tech })+P(R>10 \% \mid \text { non-tech }) \times P(\text { non-tech })
\end{aligned}
$$

$$
=0.60 \times 0.20+0.25 \times 0.80=0.32 .
$$

Now we can implement the Bayes' formula answer to our question:

$$
P(\text { tech } \mid R>10 \%)=\frac{P(R>10 \% \mid \text { tech }) \times P(\text { tech })}{P(R>10 \%)}=\frac{0.60 \times 0.20}{0.32}=0.375 .
$$

The probability that a firm with a return of $>10$ percent is a tech firm is 0.375 , which is impressive because the probability that a firm is a tech firm (from the whole sample) is only 0.20 . In sum, it can be readily seen from the tree map and the underlying frequency data (Exhibit 4 and 5, respectively) or from the probabilities in Bayes' formula that 160 firms have $\mathrm{R}>10$ percent, and 60 of them are tech firms, so

$$
P(\text { tech } \mid R>10 \%)=60 / 160=0.375 .
$$

Users of Bayesian statistics do not consider probabilities (or likelihoods) to be known with certainty but believe that these should be subject to modification whenever new information becomes available. Our beliefs or probabilities are continually updated as new information arrives over time.

To further illustrate Bayes' formula, we work through an investment example that can be adapted to any actual problem. Suppose you are an investor in the stock of DriveMed, Inc. Positive earnings surprises relative to consensus EPS estimates often result in positive stock returns, and negative surprises often have the opposite effect. DriveMed is preparing to release last quarter's EPS result, and you are interested in which of these three events happened: last quarter's EPS exceeded the consensus EPS estimate, last quarter's EPS exactly met the consensus EPS estimate, or last quarter's EPS fell short of the consensus EPS estimate. This list of the alternatives is mutually exclusive and exhaustive.

On the basis of your own research, you write down the following prior probabilities (or priors, for short) concerning these three events:

- $P(E P S$ exceeded consensus $)=0.45$
- $P($ EPS met consensus $)=0.30$
- $P($ EPS fell short of consensus $)=0.25$

These probabilities are "prior" in the sense that they reflect only what you know now, before the arrival of any new information.

The next day, DriveMed announces that it is expanding factory capacity in Singapore and Ireland to meet increased sales demand. You assess this new information. The decision to expand capacity relates not only to current demand but probably also to the prior quarter's sales demand. You know that sales demand is positively related to EPS. So now it appears more likely that last quarter's EPS will exceed the consensus.

The question you have is, "In light of the new information, what is the updated probability that the prior quarter's EPS exceeded the consensus estimate?"

Bayes' formula provides a rational method for accomplishing this updating. We can abbreviate the new information as DriveMed expands. The first step in applying Bayes' formula is to calculate the probability of the new information (here: DriveMed expands), given a list of events or scenarios that may have generated it. The list of events should cover all possibilities, as it does here. Formulating these conditional probabilities is the key step in the updating process. Suppose your view, based on research of DriveMed and its industry, is

```
$P($ DriveMed expands $\mid$ EPS exceeded consensus $)=0.75$
$P($ DriveMed expands $\mid E P S$ met consensus $)=0.20$
$P($ DriveMed expands $\mid$ EPS fell short of consensus $)=0.05$
```

Conditional probabilities of an observation (here: DriveMed expands) are sometimes referred to as likelihoods. Again, likelihoods are required for updating the probability.

Next, you combine these conditional probabilities or likelihoods with your prior probabilities to get the unconditional probability for DriveMed expanding, $P$ (DriveMed expands), as follows:

```
$P$ (DriveMed expands)
$=P($ DriveMed expands $\mid$ EPS exceeded consensus $) \times P($ EPS exceeded consensus $)$
$+P($ DriveMed expands $\mid E P S$ met consensus $) \times P(E P S$ met consensus $)$
$+P($ DriveMed expands $\mid E P S$ fell short of consensus $) \times P(E P S$ fell short of
consensus)
$=0.75(0.45)+0.20(0.30)+0.05(0.25)=0.41$, or $41 \%$.
```

This is the total probability rule in action. Now you can answer your question by applying Bayes' formula, Equation 8:

```
P(EPS" " exceeded" " consensus | DriveMed" " expands)
$=\frac{P(\text { DriveMed expands } \mid \text { EPS exceeded consensus })}{P(\text { DriveMed expands })} P($ EPS exceeded consensus $)$
$=(0.75 / 0.41)(0.45)=1.829268(0.45)$
$=0.823171$
```

Before DriveMed's announcement, you thought the probability that DriveMed would beat consensus expectations was 45 percent. On the basis of your interpretation of the announcement, you update that probability to 82.3 percent. This updated probability is called your posterior probability because it reflects or comes after the new information.

The Bayes' calculation takes the prior probability, which was 45 percent, and multiplies it by a ratio-the first term on the right-hand side of the equal sign. The denominator of the ratio is the probability that DriveMed expands, as you view it without considering (conditioning on) anything else. Therefore, this probability is unconditional. The numerator is the probability that DriveMed expands, if last quarter's EPS actually exceeded the consensus estimate. This last probability is larger than unconditional probability in the denominator, so the ratio ( 1.83 roughly) is greater than 1. As a result, your updated or posterior probability is larger than your prior probability. Thus, the ratio reflects the impact of the new information on your prior beliefs.

## EXAMPLE 4

## Inferring Whether DriveMed's EPS Met Consensus EPS

You are still an investor in DriveMed stock. To review the givens, your prior probabilities are $P($ EPS exceeded consensus $)=0.45, P($ EPS met consensus $)=0.30$, and $P($ EPS fell short of consensus $)=0.25$. You also have the following conditional probabilities:
$\mathrm{P}($ DriveMed expands $\mid$ EPS exceeded consensus $)=0.75$
$\mathrm{P}($ DriveMed expands $\mid$ EPS met consensus $)=0.20$
$\mathrm{P}($ DriveMed expands $\mid$ EPS fell short of consensus $)=0.05$

1. What is your estimate of the probability P(EPS exceeded consensus | DriveMed expands)?

Recall that you updated your probability that last quarter's EPS exceeded the consensus estimate from 45 percent to 82.3 percent after DriveMed announced it would expand. Now you want to update your other priors.

Update your prior probability that DriveMed's EPS met consensus.
Solution:
The probability is $P($ EPS met consensus $\mid$ DriveMed expands $)=$

$$
\frac{P(\text { DriveMed expands } \mid E P S \text { met consensus })}{P(\text { DriveMed expands })} P(E P S \text { met consensus })
$$

The probability $P$ (DriveMed expands) is found by taking each of the three conditional probabilities in the statement of the problem, such as $P$ (DriveMed expands | EPS exceeded consensus); multiplying each one by the prior probability of the conditioning event, such as $P(E P S$ exceeded consensus); and then adding the three products. The calculation is unchanged from the problem in the text above: $P($ DriveMed expands $)=0.75(0.45)+$ $0.20(0.30)+0.05(0.25)=0.41$, or 41 percent. The other probabilities needed, $P($ DriveMed expands $\mid$ EPS met consensus $)=0.20$ and $P(E P S$ met consensus) $=0.30$, are givens. So

```
P(EPS met consensus | DriveMed expands)
$=[P($ DriveMed expands $\mid E P S$ met consensus $) / P($ DriveMed expands $)] P(E P S$
met consensus)
```

$=(0.20 / 0.41)(0.30)=0.487805(0.30)=0.146341$

After taking account of the announcement on expansion, your updated probability that last quarter's EPS for DriveMed just met consensus is 14.6 percent compared with your prior probability of 30 percent.
2. Update your prior probability that DriveMed's EPS fell short of consensus.

## Solution:

$P($ DriveMed expands $)$ was already calculated as 41 percent. Recall that $P($ DriveMed expands $\mid$ EPS fell short of consensus $)=0.05$ and P(EPS fell short of consensus) $=0.25$ are givens.

```
P(EPS fell short of consensus|DriveMed expands)
$=[P($ DriveMed expands $\mid E P S$ fell short of consensus $) /$
$P($ DriveMed expands $)] P($ EPS fell short of consensus $)$
$=(0.05 / 0.41)(0.25)=0.121951(0.25)=0.030488$
```

As a result of the announcement, you have revised your probability that DriveMed's EPS fell short of consensus from 25 percent (your prior probability) to 3 percent.
3. Show that the three updated probabilities sum to 1 . (Carry each probability to four decimal places.)

## Solution:

The sum of the three updated probabilities is

$$
\begin{aligned}
& P(E P S \text { exceeded consensus } \mid \text { DriveMed expands })+P(E P S \text { met consen- } \\
& \text { sus } \mid \text { DriveMed expands })+P(E P S \text { fell short of consensus } \mid \text { DriveMed expands }) \\
& =0.8232+0.1463+0.0305=1.000
\end{aligned}
$$

The three events (EPS exceeded consensus, EPS met consensus, and EPS fell short of consensus) are mutually exclusive and exhaustive: One of these events or statements must be true, so the conditional probabilities must sum to 1 . Whether we are talking about conditional or unconditional probabilities, whenever we have a complete set of distinct possible events or outcomes, the probabilities must sum to 1 . This calculation serves to check your work.
4. Suppose, because of lack of prior beliefs about whether DriveMed would meet consensus, you updated on the basis of prior probabilities that all three possibilities were equally likely: $P($ EPS exceeded consensus $)=P(E P S$ met consensus $)=P($ EPS fell short of consensus $)=1 / 3$.

## Solution:

Using the probabilities given in the question,

$$
\begin{aligned}
& P(\text { DriveMed expands }) \\
& =P(\text { DriveMed expands } \mid E P S \text { exceeded consensus }) P(E P S \text { exceeded consensus })+ \\
& P(\text { DriveMed expands } \mid E P S \text { met consensus }) P(E P S \text { met consensus })+P(\text { DriveMed } \\
& \text { expands } \mid E P S \text { fell short of consensus }) P(E P S \text { fell short of consensus }) \\
& =0.75(1 / 3)+0.20(1 / 3)+0.05(1 / 3)=1 / 3
\end{aligned}
$$

Not surprisingly, the probability of DriveMed expanding is one-third (1/3) because the decision maker has no prior beliefs or views regarding how well EPS performed relative to the consensus estimate.
Now we can use Bayes' formula to find $P($ EPS exceeded consensus $\mid$ DriveMed expands $)=[P($ DriveMed expands $\mid$ EPS exceeded consensus) $/ P($ DriveMed expands $)] P($ EPS exceeded consensus $)=[(0.75 /(1 / 3)]$ $(1 / 3)=0.75$, or 75 percent. This probability is identical to your estimate of $P$ (DriveMed expands | EPS exceeded consensus).
When the prior probabilities are equal, the probability of information given an event equals the probability of the event given the information. When a decision maker has equal prior probabilities (called diffuse priors), the probability of an event is determined by the information.

## QUESTION SET

The following example shows how Bayes' formula is used in credit granting in cases in which the probability of payment given credit information is higher than the probability of payment without the information.

1. Jake Bronson is predicting the probability that consumer finance applicants granted credit will repay in a timely manner (i.e., their accounts will not
become "past due"). Using Bayes' formula, he has structured the problem as follows:

$$
P(\text { Event } \mid \text { Information })=\frac{P(\text { Information } \mid \text { Event })}{P(\text { Information })} P(\text { Event }),
$$

where the event ( $A$ ) is "timely repayment" and the information ( $B$ ) is having a "good credit report."

Bronson estimates that the unconditional probability of receiving timely payment, $P(A)$, is 0.90 and that the unconditional probability of having a good credit report, $P(B)$, is 0.80 . The probability of having a good credit report given that borrowers paid on time, $P(B \mid A)$, is 0.85 .

What is the probability that applicants with good credit reports will repay in a timely manner?
A. 0.720
B. 0.944
C. 0.956

## Solution:

The correct answer is C . The probability of timely repayment given a good credit report, $P(A \mid B)$, is

$$
P(A \mid B)=\frac{P(B \mid A)}{P(B)} P(A)=\frac{0.85}{0.80} \times 0.90=0.956
$$

2. You have developed a set of criteria for evaluating distressed credits. Companies that do not receive a passing score are classed as likely to go bankrupt within 12 months. You gathered the following information when validating the criteria:

- Forty percent of the companies to which the test is administered will go bankrupt within 12 months: $P($ non-survivor $)=0.40$.
- Fifty-five percent of the companies to which the test is administered pass it: $P($ pass test $)=0.55$.
- The probability that a company will pass the test given that it will subsequently survive 12 months, is 0.85 : $P$ (pass test $\mid$ survivor) $=0.85$.

Using the information validating your criteria, calculate the following:
A. What is P (pass test $\mid$ non-survivor)?
B. Using Bayes' formula, calculate the probability that a company is a survivor, given that it passes the test; that is, calculate $P$ (survivor | pass test).
C. What is the probability that a company is a non-survivor, given that it fails the test?
D. Is the test effective?

## Solution:

A. We can set up the equation using the total probability rule:

```
P(pass test) = P(pass test|survivor)P(survivor)
```

$+P$ (pass test|non-survivor)P(non-survivor)
We know that $P($ survivor $)=1-P($ non-survivor $)=1-0.40=0.60$. Therefore, $P($ pass test $)=0.55=0.85(0.60)+P($ pass test $\mid$ non-survivor $)(0.40)$.
Thus, $P$ (pass test $\mid$ non-survivor $)=[0.55-0.85(0.60)] / 0.40=0.10$.
B. We can calculate the probability that a company is a survivor as follows:

```
$P($ survivor $\mid$ pass test $)=[P($ pass test $\mid$ survivor $) / P($ pass test $)] P($ survivor $)$
$=(0.85 / 0.55) 0.60=0.927273$
```

The information that a company passes the test causes you to update your probability that it is a survivor from 0.60 to approximately 0.927 .
C. According to Bayes' formula, $P($ non-survivor $\mid$ fail test $)=[P(-$ fail test $\mid$ non-survivor $) / P($ fail test $)] P($ non-survivor $)=[P($ fail test $\mid$ non-survivor)/0.45]0.40.
We can set up the following equation to obtain $P($ fail test $\mid$ non-survivor $)$ :

```
$P($ fail test $)=P($ fail test $\mid$ non - survivor $) P($ non - survivor $)$
$+P($ fail test $\mid$ survivor $) P($ survivor $)$
$0.45=P($ fail test $\mid$ non - survivor $) 0.40+0.15(0.60)$
```

where $P($ fail test $\mid$ survivor $)=1-P($ pass test $\mid$ survivor $)=1-0.85=0.15$. So, $P($ fail test $\mid$ non-survivor $)=[0.45-0.15(0.60)] / 0.40=0.90$.
Using this result with the previous formula, we find $P$ (non-survivor $\mid$ fail test $)=[0.90 / 0.45] 0.40=0.80$. Seeing that a company fails the test causes us to update the probability that it is a non-survivor from 0.40 to 0.80 .
D. A company passing the test greatly increases our confidence that it is a survivor. A company failing the test doubles the probability that it is a non-survivor. Therefore, the test appears to be useful.
3. An analyst estimates that 20 percent of high-risk bonds will fail (go bankrupt). If she applies a bankruptcy prediction model, she finds that 70 percent of the bonds will receive a "good" rating, implying that they are less likely to fail. Of the bonds that failed, only 50 percent had a "good" rating. Using Bayes' formula, what is the predicted probability of failure given a "good" rating? (Hint, let $P(A)$ be the probability of failure, $P(B)$ be the probability of a "good" rating, $P(B \mid A)$ be the likelihood of a "good" rating given failure, and $P(A \mid B)$ be the likelihood of failure given a "good" rating.)
A. 5.7 percent
B. 14.3 percent
C. 28.6 percent

Solution:
B is correct. With Bayes' formula, the probability of failure given a "good" rating is

$$
P(A \mid B)=\frac{P(B \mid A)}{P(B)} P(A)
$$

where
$P(A)=0.20=$ probability of failure
$P(B)=0.70=$ probability of a "good" rating
$P(B \mid A)=0.50=$ probability of a "good" rating given failure
With these estimates, the probability of failure given a "good" rating is

$$
P(A \mid B)=\frac{P(B \mid A)}{P(B)} P(A)=\frac{0.50}{0.70} \times 0.20=0.143
$$

If the analyst uses the bankruptcy prediction model as a guide, the probability of failure declines from 20 percent to 14.3 percent.
4. In a typical year, 5 percent of all CEOs are fired for "performance" reasons. Assume that CEO performance is judged according to stock performance and that 50 percent of stocks have above-average returns or "good" performance. Empirically, 30 percent of all CEOs who were fired had "good" performance. Using Bayes' formula, what is the probability that a CEO will be fired given "good" performance? (Hint, let $P(A)$ be the probability of a CEO being fired, $P(B)$ be the probability of a "good" performance rating, $P(B \mid A)$ be the likelihood of a "good" performance rating given that the CEO was fired, and $P(A \mid B)$ be the likelihood of the CEO being fired given a "good" performance rating.)
A. 1.5 percent
B. 2.5 percent
C. 3.0 percent

## Solution:

C is correct. With Bayes' formula, the probability of the CEO being fired given a "good" rating is

$$
P(A \mid B)=\frac{P(B \mid A)}{P(B)} P(A)
$$

where
$P(A)=0.05=$ probability of the CEO being fired
$P(B)=0.50=$ probability of a "good" rating
$P(B \mid A)=0.30=$ probability of a "good" rating given that the CEO is fired
With these estimates, the probability of the CEO being fired given a "good" rating is
$P(A \mid B)=\frac{P(B \mid A)}{P(B)} P(A)=\frac{0.30}{0.50} \times 0.05=0.03$
Although 5 percent of all CEOs are fired, the probability of being fired given a "good" performance rating is 3 percent.

