import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeniricHttpServiceService {

  constructor(private url: string, private http: HttpClient) { }
  Get() {
    return this.http.get(this.url);
  }
  Create(obj: any) {
    
    return this.http.post(this.url, obj);
  }
  Update(id: number, obj: any){
    return this.http.put(this.url+ '/' + id, obj);
  }
  Remove(id: number){
    return this.http.delete(this.url+ '/'+ id);
  }
}
