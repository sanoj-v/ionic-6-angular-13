import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class MenuService {
    private state$ = new BehaviorSubject<boolean>(false);
    changeState(myChange) {
        this.state$.next(myChange);
    }
    get getState(): Observable<boolean> {
        return this.state$.asObservable();
    }
}