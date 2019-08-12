
import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()

export class AppErrorHandler implements ErrorHandler {

    handleError(error: any) {
        alert("Unexpected error occured.")
        console.log(error)
    }

    
}