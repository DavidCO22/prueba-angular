import { Component } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent {

  selectedFile: File | null = null;
  previewUrl: any | ArrayBuffer | null = null;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;

    // Actualizar la previsualización de la imagen
    this.previewImage();
  }

  onUpload() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        response => {
          console.log('Archivo subido con éxito', response);
        },
        error => {
          console.error('Error al subir el archivo', error);
        }
      );
    }
  }

  private previewImage() {
    if (!this.selectedFile) {
      this.previewUrl = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewUrl = e.target?.result;
    };

    reader.readAsDataURL(this.selectedFile);
  }



}
