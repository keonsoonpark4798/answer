-- 코드를 입력하세요
SELECT ANIMAL_ID, t1.NAME
FROM ANIMAL_INS t1 join ANIMAL_OUTS t2 using(ANIMAL_ID)
WHERE t1.DATETIME > t2.DATETIME
ORDER BY t1.DATETIME;