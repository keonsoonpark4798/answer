-- 코드를 입력하세요
SELECT t1.APNT_NO, t2.PT_NAME, t1.PT_NO, t1.MCDP_CD, t3.DR_NAME, t1.APNT_YMD
FROM APPOINTMENT t1 LEFT JOIN PATIENT t2 ON t1.PT_NO = t2.PT_NO
                    LEFT JOIN DOCTOR t3 ON t1.MDDR_ID = t3.DR_ID
WHERE t1.APNT_CNCL_YN = "N"
        AND t1.MCDP_CD = 'CS'
        AND t1.APNT_YMD LIKE "%2022-04-13%"
ORDER BY t1.APNT_YMD ASC;