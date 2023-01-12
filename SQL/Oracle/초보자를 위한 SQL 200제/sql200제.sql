-- 001 SELECT column
SELECT empno, ename, sal FROM emp;

-- 002 SELECT *
SELECT * FROM emp;

-- 003 change column name
SELECT empno as 사원번호, ename as 사원이름, sal as "Salary" FROM emp;
SELECT ename, sal, sal*(12 + 3000) as 월급 FROM emp;

-- 004 ||
SELECT ename || sal FROM emp;
SELECT ename || '의 월급은 ' || sal || '입니다 ' as 월급정보 FROM emp;
SELECT ename || '의 직업은 ' || job || '입니다 ' as 직업정보 FROM emp;

-- 005 DISTINCT(UNIQUE)
SELECT DISTINCT job FROM emp;
SELECT UNIQUE job FROM emp;

-- 006 ORDER BY
SELECT ename, sal FROM emp ORDER BY sal asc;
SELECT ename, deptno, sal FROM emp ORDER BY deptno asc, sal desc;
SELECT ename, deptno, sal FROM emp ORDER BY 2 asc, 3 desc;

-- 007 WHERE
SELECT ename, sal, job FROM emp WHERE sal = 3000;
/* BETWEEN ? AND ?, LIKE, IS NULL, IN */

-- 008 WHERE
SELECT ename, sal, job, hiredate, deptno FROM emp WHERE ename='SCOTT';
SELECT ename, hiredate FROM emp WHERE hiredate='81/11/17';
/* 날짜 형식: NSL_SESSION_PARAMETERS */
SELECT * FROM NLS_SESSION_PARAMETERS WHERE PARAMETER = 'NLS_DATE_FORMAT';

--009 산술 연산자(+-*/)
SELECT ename, sal*12 as 연봉 FROM emp WHERE sal*12 >= 36000;
SELECT ename, sal, comm, sal + comm FROM emp WHERE deptno = 10;
/* NVL(data, value) => data가 NULL인 경우 value로 변경 */
SELECT sal + comm FROM emp WHERE ename='KING';
SELECT sal + NVL(comm, 0) FROM emp WHERE ename='KING';

-- 010 비교 연산자
SELECT ename, sal, job, deptno FROM emp WHERE sal <= 1200;

-- 011 비교 연산자(BETWEEN AND)
SELECT ename, sal FROM emp WHERE sal BETWEEN 1000 AND 3000;
SELECT ename, sal FROM emp WHERE (sal >= 1000 AND sal <= 3000);
SELECT ename, sal FROM emp WHERE sal NOT BETWEEN 1000 AND 3000;
SELECT ename, hiredate FROM emp WHERE hiredate BETWEEN '1982/01/01' and '1982/12/31';

-- 012 비교 연산자(LIKE)
SELECT ename, sal FROM emp WHERE ename LIKE 'S%';
SELECT ename FROM emp WHERE ename LIKE '_M%';
SELECT ename FROM emp WHERE ename LIKE '%T';
SELECT ename FROM emp WHERE ename LIKE '%A%';

-- 013 비교 연산자(IS NULL)
SELECT ename, comm FROM emp WHERE comm is null; 

-- 014 비교 연산자(IN)
SELECT ename, sal, job FROM emp WHERE job in ('SALESMAN','ANALYST','MANAGER'); 
SELECT ename, sal, job FROM emp WHERE (job ='SALESMAN' or job='ANALYST' or job='MANAGER'); 
SELECT ename, sal, job FROM emp WHERE job NOT in ('SALESMAN','ANALYST','MANAGER'); 
SELECT ename, sal, job FROM emp WHERE (job !='SALESMAN' and job !='ANALYST' and job !='MANAGER'); 

-- 015 비교 연산자(AND, OR, NOT)
SELECT ename, sal, job FROM emp WHERE job='SALESMAN' AND sal >= 1200; 
SELECT ename, sal, job FROM emp WHERE job='ABCDEFG' AND sal >= 1200; 

-----------------------------------------------------------

-- 056

-- 057

-- 058

-- 059

-- 060

-- 061

-- 062

-- 063

-- 064

-- 065

-- 066

-- 067

-- 068

-- 069

-- 070

-- 071

-- 072

-- 073

-- 074

-- 075

-- 076

-- 077

-- 078

-- 079

-- 080

-- 081

-- 082

-- 083

-- 084

-- 085

-- 086

-- 087

-- 088

-- 089

-- 090

-- 091

-- 092

-- 093

-- 094

-- 095

-- 096

-- 097

-- 098

-- 099

-- 100

-- 101

-- 102

-- 103

-- 104

-- 105

-- 106

-- 107

-- 108

-- 109

-- 110
