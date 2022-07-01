import HttpHandler from '../utils/HttpHandler';
// import env from '../config/env';

import { LOGIN } from '../constants/apiRoutes';
import { SLIDERS } from '../constants/apiRoutes';
import { VIDEOS } from '../constants/apiRoutes';
import { YOUTUBE_VIDEOS } from '../constants/apiRoutes';
import { SUBJECTS } from '../constants/apiRoutes';
import { COURSES } from '../constants/apiRoutes';
import { MCAQUES } from '../constants/apiRoutes';
import { NOTES } from '../constants/apiRoutes';
import { MCQTEST } from '../constants/apiRoutes';
import { MCQTESTSUBMIT } from '../constants/apiRoutes';
import { DOWNLOADNOTES } from '../constants/apiRoutes';
import { TESTRESULT } from '../constants/apiRoutes';
import { SAQTEST } from '../constants/apiRoutes';
import { SAQTESTINFO } from '../constants/apiRoutes';
import { SAQTESTSUBMIT } from '../constants/apiRoutes';
import { GETTESTRESULT } from '../constants/apiRoutes';
import { GET_TEACHERS } from '../constants/apiRoutes';
import { CHANGE_PASSWORD } from '../constants/apiRoutes';
import { GET_ROUTINE } from '../constants/apiRoutes';

const http = new HttpHandler(
  'https://inventorsarena.com/projects/haque_academy/api',
);
// ------------------API METHODS------------------------

export const login = creds => {
  return http.postData(LOGIN, creds);
};

export const getTeachers = () => {
  return http.getDataWithToken(GET_TEACHERS);
};

// -------------------SLIDERS----------------------

export const sliders = () => {
  return http.getDataWithToken(SLIDERS);
};

// ---------------------VIDEOS--------------------

export const videos = v_creds => {
  return http.getDataWithToken(VIDEOS, v_creds);
};

// ---------------------YOUTUBEVIDEOS-----------------

export const y_Videos = yv_creds => {
  return http.getDataWithToken(YOUTUBE_VIDEOS, yv_creds);
};

// ---------------------SUBJECTS-----------------

export const subjects = () => {
  return http.getDataWithToken(SUBJECTS);
};

export const courses = id => {
  return http.getDataWithToken(`${COURSES}${id}`);
};

export const mcqQues = id => {
  return http.getDataWithToken(`${MCAQUES}${id}`);
};

// ---------------------NOTES-----------------

export const notes = (teacher_id, subject_id) => {
  return http.getDataWithToken(NOTES + 't/' + teacher_id + '/s/' + subject_id);
  console.warn(NOTES + 't/' + teacher_id + '/s/' + subject_id);
};

// ---------------------MCQTEST-----------------

export const mcqtest = idObj => {
  return http.postDataWithToken(MCQTEST, idObj);
};

// ---------------------MCQTEST-----------------

export const mcqtestsubmit = idObj => {
  return http.postDataWithToken(MCQTESTSUBMIT, idObj);
};

// ---------------------GET SAQ TEST-----------------

export const saqtest = subjectId => {
  return http.getDataWithToken(SAQTEST + subjectId);
};

export const getSaqTestInfo = testId => {
  return http.getDataWithToken(SAQTESTINFO + testId);
};

export const submitSaqTest = (testId, data) => {
  return http.postFileWithToken(SAQTESTSUBMIT + testId, data);
};

// ---------------------DOWNLOAD NOTES-----------------

export const downloadnotes = () => {
  return http.getDataWithToken(DOWNLOADNOTES);
};

// ---------------------DOWNLOAD NOTES-----------------

export const testresult = courseId => {
  return http.getDataWithToken(`${TESTRESULT}${courseId}`);
};

// ---------------------GET TEST RESULT-----------------

export const getTestResult = testId => {
  console.log(`${GETTESTRESULT}${testId}`);
  return http.getDataWithToken(`${GETTESTRESULT}${testId}`);
};

// ---------------------CHANGE PASSWORD-----------------
// export const changePassword = (data) => {
//     console.log(data);
//     return http.postDataWithToken();
// }

// ---------------------CHANGE PASSWORD-----------------
export const changePassword = data => {
  return http.postDataWithToken(CHANGE_PASSWORD, data);
};

// --------------------- Routine --------------------- 
export const getRoutine = (classId, teacherId, studentId) => (http.getDataWithToken(GET_ROUTINE.concat('/c/', classId, '/t/', teacherId, '/s/', studentId)));