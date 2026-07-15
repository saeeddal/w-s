import { inject, Injectable } from '@angular/core';
import { type Observable } from 'rxjs';
import { ApiHttpService } from '@app/core/services/api-http.service';
type Post = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

@Injectable({
  providedIn: 'root',
})
export class GuidService {
  public logout() {}

  public getPost1(): Observable<Post[]> {
    const request = {
      endpoint: 'posts',
      params: { id: 1 },
    };

    return this.api.get$<Post[]>(request, { showSuccess: true });
  }

  private readonly api = inject(ApiHttpService);
}
