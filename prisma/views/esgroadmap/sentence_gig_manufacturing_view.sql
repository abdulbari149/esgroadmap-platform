SELECT
  `esgroadmap`.`sentenceallview-gig`.`Company` AS `Company`,
  `esgroadmap`.`sentenceallview-gig`.`emails` AS `emails`,
  `esgroadmap`.`sentenceallview-gig`.`full_text` AS `full_text`,
  `esgroadmap`.`sentenceallview-gig`.`Source link` AS `Source link`,
  `esgroadmap`.`sentenceallview-gig`.`pr_site` AS `pr_site`,
  `esgroadmap`.`sentenceallview-gig`.`release_date` AS `release_date`,
  `esgroadmap`.`sentenceallview-gig`.`source` AS `source`,
  `esgroadmap`.`sentenceallview-gig`.`ticker` AS `ticker`,
  `esgroadmap`.`sentenceallview-gig`.`title` AS `title`,
  `esgroadmap`.`sentenceallview-gig`.`ArticleTargetYear` AS `ArticleTargetYear`,
  `esgroadmap`.`sentenceallview-gig`.`PressReleaseFullCleanstep1` AS `PressReleaseFullCleanstep1`,
  `esgroadmap`.`sentenceallview-gig`.`PressReleaseFullClean` AS `PressReleaseFullClean`,
  `esgroadmap`.`sentenceallview-gig`.`Source Date` AS `Source Date`,
  `esgroadmap`.`sentenceallview-gig`.`Annual Report Date` AS `Annual Report Date`,
  `esgroadmap`.`sentenceallview-gig`.`PressReleaseYear` AS `PressReleaseYear`,
  `esgroadmap`.`sentenceallview-gig`.`PressReleaseMonth` AS `PressReleaseMonth`,
  `esgroadmap`.`sentenceallview-gig`.`Target sentence` AS `Target sentence`,
  `esgroadmap`.`sentenceallview-gig`.`SentenceTargetYear` AS `SentenceTargetYear`,
  `esgroadmap`.`sentenceallview-gig`.`Targetyear(s)` AS `Targetyear(s)`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-carbon` AS `sentence-carbon`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-gender` AS `sentence-gender`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-renewables` AS `sentence-renewables`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-suppliers` AS `sentence-suppliers`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-water` AS `sentence-water`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-waste` AS `sentence-waste`,
  `esgroadmap`.`sentenceallview-gig`.`sentence-other` AS `sentence-other`,
  `esgroadmap`.`sentenceallview-gig`.`Member of the S&P500` AS `Member of the S&P500`,
  `esgroadmap`.`sentenceallview-gig`.`Member of the Russell 1000 Index` AS `Member of the Russell 1000 Index`,
  `esgroadmap`.`sentenceallview-gig`.`Ticker(s)` AS `Ticker(s)`,
  `esgroadmap`.`sentenceallview-gig`.`PR Agency` AS `PR Agency`,
  `esgroadmap`.`sentenceallview-gig`.`Example 2020 company PR agency press release URL` AS `Example 2020 company PR agency press release URL`,
  `esgroadmap`.`sentenceallview-gig`.`Company Global / Main Website URL` AS `Company Global / Main Website URL`,
  `esgroadmap`.`sentenceallview-gig`.`Company global/main press - news release site URL` AS `Company global/main press - news release site URL`,
  `esgroadmap`.`sentenceallview-gig`.`Company annual reports page URL` AS `Company annual reports page URL`,
  `esgroadmap`.`sentenceallview-gig`.`Company annual / financial report 2020 URL of pdf document` AS `Company annual / financial report 2020 URL of pdf document`,
  `esgroadmap`.`sentenceallview-gig`.`Company sustainability / ESG reports page URL` AS `Company sustainability / ESG reports page URL`,
  `esgroadmap`.`sentenceallview-gig`.`Company Sustainability / ESG report 2020 URL of pdf document` AS `Company Sustainability / ESG report 2020 URL of pdf document`,
  `esgroadmap`.`sentenceallview-gig`.`Country` AS `Country`,
  `esgroadmap`.`sentenceallview-gig`.`sector code #1 (NAICS)` AS `sector code #1 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector name #1 (NAICS)` AS `sector name #1 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector code #2 (NAICS)` AS `sector code #2 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector name #2 (NAICS)` AS `sector name #2 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector code #3 (NAICS)` AS `sector code #3 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector name #3 (NAICS)` AS `sector name #3 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector code #4 (NAICS)` AS `sector code #4 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector name #4 (NAICS)` AS `sector name #4 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector code #5 (NAICS)` AS `sector code #5 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector name #5 (NAICS)` AS `sector name #5 (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector codes all (NAICS)` AS `sector codes all (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`sector name all (NAICS)` AS `sector name all (NAICS)`,
  `esgroadmap`.`sentenceallview-gig`.`NAICS #1 GIG name` AS `NAICS #1 GIG name`,
  `esgroadmap`.`sentenceallview-gig`.`NAICS #1 GIG` AS `NAICS #1 GIG`,
  `esgroadmap`.`sentenceallview-gig`.`upload-date` AS `upload-date`
FROM
  `esgroadmap`.`sentenceallview-gig`
WHERE
  (
    `esgroadmap`.`sentenceallview-gig`.`NAICS #1 GIG name` = 'Manufacturing'
  )