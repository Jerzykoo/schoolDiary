import { Injectable } from '@angular/core';

export const ROLE = 'role';
export const FULLNAME = 'fullName';
export const USERID = 'id';
export const SCHOOLID = 'schoolId';
export const TEACH_SUBJECT_ID = 'teachSubjectId';
export const TEACH_CLASS_ID = 'teachClassId';
export const TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
  public saveToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
  public saveRole(role: any): void {
    localStorage.setItem(ROLE, role);
  }
  public saveUserId(id: string): void {
    localStorage.setItem(USERID, id);
  }

  public saveSchoolId(id: string): void {
    localStorage.setItem(SCHOOLID, id);
  }

  public saveTeachSubjectId(id: string): void {
    localStorage.setItem(TEACH_SUBJECT_ID, id);
  }

  public saveTeachClassId(id: string): void {
    localStorage.setItem(TEACH_CLASS_ID, id);
  }

  public saveFullName(fullname: string): void {
    localStorage.setItem(FULLNAME, fullname);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public getRole(): string | null {
    return localStorage.getItem(ROLE);
  }

  public getFullName(): string | null {
    return localStorage.getItem(FULLNAME);
  }

  public getUserId(): string | null {
    return localStorage.getItem(USERID);
  }

  public getSchoolId(): string | null {
    return localStorage.getItem(SCHOOLID);
  }

  public getTeachSubjectId(): string | null {
    return localStorage.getItem(TEACH_SUBJECT_ID);
  }

  public getTeachClassId(): string | null {
    return localStorage.getItem(TEACH_CLASS_ID);
  }

  // public removeToken(): void {
  //   localStorage.removeItem(TOKEN);
  // }

  public removeUserId(): void {
    localStorage.removeItem(USERID);
  }
}
