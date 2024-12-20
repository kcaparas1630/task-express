CREATE TABLE IF NOT EXISTS task (
  ID SERIAL PRIMARY KEY,
  TASK_NAME VARCHAR(30) NOT NULL,
  TASK_DESCRIPTION VARCHAR(30) NOT NULL,
  TASK_PROGRESS VARCHAR(30) NOT NULL,
  TASK_DUE_DATE DATE NOT NULL,
  TASK_COMPLETED DATE
);

CREATE TABLE IF NOT EXISTS taskUser (
  ID SERIAL PRIMARY KEY,
  FIRST_NAME VARCHAR(30) NOT NULL,
  LAST_NAME VARCHAR(30) NOT NULL,
  USERNAME VARCHAR(30) NOT NULL,
  USER_PASSWORD VARCHAR(128) NOT NULL,
  USER_EMAIL VARCHAR(100) NOT NULL 
);
