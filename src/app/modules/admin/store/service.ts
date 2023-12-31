import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCacheManager } from '@ngneat/cashew';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { IUser } from './types';
import { USERID } from 'src/app/core/services/token.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(
    private apiService: ApiService,
    private store: Store,
    private manager: HttpCacheManager,
    private router: Router,
    private zone: NgZone
  ) {}

  getUsers(name?: string): Observable<IUser[]> {
    return this.apiService.get(name ? `/api/user/search=${name}` : `/api/user`);
  }

  updateUser(data: any): Observable<IUser[]> {
    return this.apiService.put(`/api/user`, data);
  }

  addUser(data: any): Observable<IUser[]> {
    return this.apiService.post(`/api/user`, data);
  }

  addTeacher(data: any): Observable<any> {
    return this.apiService.post(`/TeacherReg`, data);
  }

  removeUser(id: number): Observable<any> {
    return this.apiService.delete(`/api/user/${id}`);
  }

  getStudents(): Observable<IUser> {
    return this.apiService.get(`/Students/${localStorage.getItem(USERID)}`);
  }

  getClasses(): Observable<IUser> {
    return this.apiService.get(`/SclassList/${localStorage.getItem(USERID)}`);
  }

  getTeachers(): Observable<IUser> {
    return this.apiService.get(`/Teachers/${localStorage.getItem(USERID)}`);
  }

  getTeacher(id: string): Observable<any> {
    return this.apiService.get(`/Teacher/${id}`);
  }

  getAllSubjects(): Observable<any[]> {
    return this.apiService.get(`/AllSubjects/${localStorage.getItem(USERID)}`);
  }

  getSubject(id: string): Observable<any> {
    return this.apiService.get(`/Subject/${id}`);
  }

  addSubject(data: any): Observable<any> {
    return this.apiService.post(`/SubjectCreate`, data);
  }

  getNotices(): Observable<IUser> {
    return this.apiService.get(`/NoticeList/${localStorage.getItem(USERID)}`);
  }

  addNotice(data: any): Observable<any> {
    return this.apiService.post(`/NoticeCreate`, {
      ...data,
      adminID: localStorage.getItem(USERID),
    });
  }

  getStudent(id: string): Observable<any> {
    return this.apiService.get(`/student/${id}`);
  }

  updateAttendance(data: any, studentId: any): Observable<any> {
    return this.apiService.put(`/StudentAttendance/${studentId}`, data);
  }

  updateMark(data: any, studentId: any): Observable<any> {
    return this.apiService.put(`/UpdateExamResult/${studentId}`, data);
  }

  getFreeSubjectList(classId: string): Observable<IUser> {
    return this.apiService.get(`/FreeSubjectList/${classId}`);
  }
}
