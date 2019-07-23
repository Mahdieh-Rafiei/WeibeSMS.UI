import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {CityInterface} from '../models/city.interface';
import {CacheObject} from '../models/cache-object';
import {CountryInterface} from '../models/country.interface';
import {UserInfoInterface} from '../../auth/login/models/user-info.interface';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private as: ApiService) {
    this.fillCacheData();
  }

  data;
  _cacheObject: CacheObject;


  private countries : CountryInterface = {
    message: 'OK',
    data:[
      {
        "id": 1,
        "name": "Afghanistan",
        "prefixNumber": "+93",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3REQwQzQwNjE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3REQwQzQwNzE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA0MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdERDBDNDA1MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+duaIkQAAAalJREFUeNpiZMAN2BkYVjMwyDIwfMCQ4mNgeM3K4DEFj24GJgaagaFpNAuR6v4yMPwDO4SRaOcQZfQfBgZOCQkOSclfb978/fbt59u3/6li9G+guTIy/EZGTOycbDJyrIIC3+7e/XX0CMgXZIc1I9hcPnstsbzA94ePfH/x+N//n683b+ILNBGw0v3zlwKjIYErGub94dhpJi5u3Q1rtFcuZeYTerNtj3CwJxMjBQECdBaXoRybhCzLFy6eQJuHPW1/P30W9Db9fuMlh6QSt706A8NNMl0NNJpNVIrHyIyDR/DV4UOMivxf3tx/vnM7p4gor5kFh7gs+QEC9NG38ze+3jz7m+Mrv6i2oKGtTGo6v7jOr3/vP1878fXcNfIDBCj39fWHdyt2K/Q3vpy05FFWCwMTE6+NrnhR3PvyCZ9vP6Mo8bEyMLxZsOkTD4tkaga/vvXvt285rdSeT5n1dckaFkrS9X+w9F+Gf8+nrPl9+Q2LkMD/f//+rd/4es8ePoZ/LKyUZZn/YIczMzC8PHgALsgGFvxPeW78D8477BiCw7RQpaHRAAEGAEWfj+c8VB1nAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1,
            "name": "Badakhshan"
          },
          {
            "id": 2,
            "name": "Badghis"
          },
          {
            "id": 3,
            "name": "Baghlan"
          },
          {
            "id": 4,
            "name": "Balkh"
          },
          {
            "id": 5,
            "name": "Bamian"
          },
          {
            "id": 6,
            "name": "Daykondi"
          },
          {
            "id": 7,
            "name": "Farah"
          },
          {
            "id": 8,
            "name": "Faryab"
          },
          {
            "id": 9,
            "name": "Ghazni"
          },
          {
            "id": 10,
            "name": "Ghowr"
          },
          {
            "id": 11,
            "name": "Helmand"
          },
          {
            "id": 12,
            "name": "Herat"
          },
          {
            "id": 13,
            "name": "Jowzjan"
          },
          {
            "id": 14,
            "name": "Kabul"
          },
          {
            "id": 15,
            "name": "Kandahar"
          },
          {
            "id": 16,
            "name": "Kapisa"
          },
          {
            "id": 17,
            "name": "Khost"
          },
          {
            "id": 18,
            "name": "Konar"
          },
          {
            "id": 19,
            "name": "Kondoz"
          },
          {
            "id": 20,
            "name": "Laghman"
          },
          {
            "id": 21,
            "name": "Lowgar"
          },
          {
            "id": 22,
            "name": "Nangarhar"
          },
          {
            "id": 23,
            "name": "Nimruz"
          },
          {
            "id": 24,
            "name": "Nurestan"
          },
          {
            "id": 25,
            "name": "Oruzgan"
          },
          {
            "id": 26,
            "name": "Paktia"
          },
          {
            "id": 27,
            "name": "Paktika"
          },
          {
            "id": 28,
            "name": "Panjshir"
          },
          {
            "id": 29,
            "name": "Parvan"
          },
          {
            "id": 30,
            "name": "Samangan"
          },
          {
            "id": 31,
            "name": "Sar-e Pol"
          },
          {
            "id": 32,
            "name": "Takhar"
          },
          {
            "id": 33,
            "name": "Vardak"
          },
          {
            "id": 34,
            "name": "Zabol"
          }
        ]
      },
      {
        "id": 2,
        "name": "Albania",
        "prefixNumber": "+355",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDFBRDI0NTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDFBRDI0NjE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA4MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJEMUFEMjQ0MTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GPq/agAAAiRJREFUeNrEVb9rFEEUfm9m9nb3bhNz50UMClopRAsFrUURW1tBrSzsLPwfbPwDbGz8F8QiIkLAKiCkUIKiGBEFwXAhd7fZH7Mz83zZtbC4TdyF4LDF8N7ON9/73jczuN4/A4czBBzaqIUmAA+Q0wjQRzkUCsv4USEHKKs4/0DtWOdAgxLxrUk+mqyHIkLx2eg1k1gA3kwDtYFeFOqVnj5NRwXQip7eGG9+svlPV1wff3mejwuiZ9n2i3zCRWANAta1kaFX9OS1jkdkHdGyCt6blMmel8E3p1OgY6iueL2b/pEtZ5qx5kRCLIhMyK4WMQFt2HzdpEzypZ5OnOVUSoT1gqi6BOvA7ZoDUan5JB3BXxPeOALBahigxloLQO4SFy5hBjMOpuA0zc4ebL4OYExuZl0dxNiRh63MZ4jYXjzJiG77/cuqW8UvqvBO0Ge+jjsplKHmgrCIIeICyke9pXPKZ+kvqPCS1+X6T4vO42iJN/YB22jNIo6cYWN9dfqdya560TxKruKaF32w2abVW2VWtNCa6fRQnpTeD1vcD4anZOdNEa8VCZN9EA6/2+KE9Ob3dUit+XbJHRfqXjBgTZjYhk3nUDAQN/CsDJbDYIfcbvlhU+hqQUpuSo6tcstfYMp8q9z1+7+cyfZMuUe4zZGp/GfLxRm4bbIPu4scYbIJOO6EO+hSVf9y8zLQmGxUKrNDRu7HtSH0n+NHrpr8/1fmtwADAEjB+xzEjgF0AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 35,
            "name": "Berat"
          },
          {
            "id": 36,
            "name": "Dibres"
          },
          {
            "id": 37,
            "name": "Durres"
          },
          {
            "id": 38,
            "name": "Elbasan"
          },
          {
            "id": 39,
            "name": "Fier"
          },
          {
            "id": 40,
            "name": "Gjirokastre"
          },
          {
            "id": 41,
            "name": "Korce"
          },
          {
            "id": 42,
            "name": "Kukes"
          },
          {
            "id": 43,
            "name": "Lezhe"
          },
          {
            "id": 44,
            "name": "Shkoder"
          },
          {
            "id": 45,
            "name": "Tirane"
          },
          {
            "id": 46,
            "name": "Vlore"
          }
        ]
      },
      {
        "id": 3,
        "name": "Algeria",
        "prefixNumber": "+213",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQUY5NTY0OTkxRjRDNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDFBRDI0QTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDFBRDI0OTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5FFcD/AAACLUlEQVR42sSWQWsTURDHf283dTdZQ9qCVWhQD2JrRCmEaqUoarEQi3c/QEDx2ByqtwgSUTx5EvINPHlQRLRYsViqHgQRVGopRpo2kKbppk26SbO+3UDBk5uY2mEXdh7s++1/5s3MClJDNi1a/daMLaDU5GtBeS/6+AcT7uVu1KwFFXbJmldstwfsXXFdEoWM7P4AGJt0qTqlpcUdBjtQTYUeP6c+LjOd+srKzSnq/RHMWIzNdBpqtR0Aq1Jpt07i8Ryzj74wmCtz72yY4qunBO/edyNRnZxsc46dnEqlo++yPHjx0106Ej9E5kqUGwNRuYMfbeAE9VwO2zQRwWCbFDtqq3Wuzyy77p0LvWTO9WLMm9ReT8Hnb2wkkwi/3zPUm2KZWy1fIbqw5rpv+jply7DoCPdRz+exRy+z4SgwDPREQj4o7cuxsBudYruabGdBQfh829Vll8uN9bYdLmuLSrfGp4ONMA7/kMqDGrVfGQgYKNPvCUxMoI+Py7SobQTXpApdJX26x3Vvv8ywbzZL6bBBx6UR+SWDBFIpqFSw19c9g1VGwsm/NWTKW3w/1gVmlfMLJtc+rGKvWpwcjhFas7CeP8MuFFAjEa9cS3iaTk4D8ctzGNrDxbdZHj6Z53jRohjqRJwZQhsbQ4vHZWR0r2BTeB6LDtynuDVNYYUDpb3MXU1jHO1vpWOa3oeEIhrwrFM8Oku+WqvQFqeT+N/Tadfn8Z9tvNVfH/O3AAMACcCyb9iaq58AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 47,
            "name": "Adrar"
          },
          {
            "id": 48,
            "name": "Ain Defla"
          },
          {
            "id": 49,
            "name": "Ain Temouchent"
          },
          {
            "id": 50,
            "name": "Alger"
          },
          {
            "id": 51,
            "name": "Annaba"
          },
          {
            "id": 52,
            "name": "Batna"
          },
          {
            "id": 53,
            "name": "Bechar"
          },
          {
            "id": 54,
            "name": "Bejaia"
          },
          {
            "id": 55,
            "name": "Biskra"
          },
          {
            "id": 56,
            "name": "Blida"
          },
          {
            "id": 57,
            "name": "Bordj Bou Arreridj"
          },
          {
            "id": 58,
            "name": "Bouira"
          },
          {
            "id": 59,
            "name": "Boumerdes"
          },
          {
            "id": 60,
            "name": "Chlef"
          },
          {
            "id": 61,
            "name": "Constantine"
          },
          {
            "id": 62,
            "name": "Djelfa"
          },
          {
            "id": 63,
            "name": "El Bayadh"
          },
          {
            "id": 64,
            "name": "El Oued"
          },
          {
            "id": 65,
            "name": "El Tarf"
          },
          {
            "id": 66,
            "name": "Ghardaia"
          },
          {
            "id": 67,
            "name": "Guelma"
          },
          {
            "id": 68,
            "name": "Illizi"
          },
          {
            "id": 69,
            "name": "Jijel"
          },
          {
            "id": 70,
            "name": "Khenchela"
          },
          {
            "id": 71,
            "name": "Laghouat"
          },
          {
            "id": 72,
            "name": "Muaskar"
          },
          {
            "id": 73,
            "name": "Medea"
          },
          {
            "id": 74,
            "name": "Mila"
          },
          {
            "id": 75,
            "name": "Mostaganem"
          },
          {
            "id": 76,
            "name": "M'Sila"
          },
          {
            "id": 77,
            "name": "Naama"
          },
          {
            "id": 78,
            "name": "Oran"
          },
          {
            "id": 79,
            "name": "Ouargla"
          },
          {
            "id": 80,
            "name": "Oum el Bouaghi"
          },
          {
            "id": 81,
            "name": "Relizane"
          },
          {
            "id": 82,
            "name": "Saida"
          },
          {
            "id": 83,
            "name": "Setif"
          },
          {
            "id": 84,
            "name": "Sidi Bel Abbes"
          },
          {
            "id": 85,
            "name": "Skikda"
          },
          {
            "id": 86,
            "name": "Souk Ahras"
          },
          {
            "id": 87,
            "name": "Tamanghasset"
          },
          {
            "id": 88,
            "name": "Tebessa"
          },
          {
            "id": 89,
            "name": "Tiaret"
          },
          {
            "id": 90,
            "name": "Tindouf"
          },
          {
            "id": 91,
            "name": "Tipaza"
          },
          {
            "id": 92,
            "name": "Tissemsilt"
          },
          {
            "id": 93,
            "name": "Tizi Ouzou"
          },
          {
            "id": 94,
            "name": "Tlemcen"
          }
        ]
      },
      {
        "id": 4,
        "name": "Andorra",
        "prefixNumber": "+376",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQUI4NkFBODE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUI4NkFBOTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRBQjg2QUE2MTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRBQjg2QUE3MTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lPUISQAAAfFJREFUeNrUlFtrE0EUx8/ZS7KXpJLNxiQ0biSt1hTFO4qCvgl+AF98EV/9Nr4UP4ePUuijFLzUait5iDZVm2a3NE22JNntzhx3i0WkWmWCoH+YeZlzfjNz/mcGr8McHBIDyYOJj/wRYI+1CocDZCeM5xX9spxjqBD8TBL8Nf0DaMTv8x9K+S1TTo+IVKBAUndpL4OYwtgLwPHRfLCTlTN9d+vCdrueKzaK9hIfGnp5F0gRRB+4Li0uPaRek5ixrdy2e2ZztYo4eWvqiSTHQSiCxm9X1qPGRu51JX+zf7z9WPmiD9VS/64/DLOm7h9dlV/aKEPSuZute4FvTd8AZ/Zces22vKbdXQ0j/V3jQXIuJRArSLIrDlysnfQ6nzpPYXRFxY4FWS2KdF1eS3zgMgqg+f5SsfwK9qZT7gK2AvVOhswoU+lq2C3lXyQxTJEhEuhrHg9/p45mBUxL0izkplEixgqcKpvupSRZ4mM0X0SD0Fmu3T92tmtonBmSu573PXvy9GJSNAIUQidZ2ann52dSAamfvWtbG/U0X6memNero9rM8oEfXPTUGJy6+CxOn3i/3m5fLVdeOrNvgCOkNKD0uA+d+QVEyTnzwam/JW7wXomAy7nwh4clhN4HEGcDE9EkgiMqIP6pEv13/7WAvgowAA7uuJg3MwVHAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 95,
            "name": "Andorra la Vella"
          },
          {
            "id": 96,
            "name": "Canillo"
          },
          {
            "id": 97,
            "name": "Encamp"
          },
          {
            "id": 98,
            "name": "Escaldes-Engordany"
          },
          {
            "id": 99,
            "name": "La Massana"
          },
          {
            "id": 100,
            "name": "Ordino"
          },
          {
            "id": 101,
            "name": "Sant Julia de Loria"
          }
        ]
      },
      {
        "id": 5,
        "name": "Argentina",
        "prefixNumber": "+54",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMzA3QTc5QTE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMzA3QTc5QjE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MDExNEM1MTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2MDExNEM2MTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VveEGAAAASFJREFUeNrklE1OAkEQhV/3DD8ODEQgxBBXwIa4YMUNPIJX4VK4NN6BxM0k7tQYI5FkMgzE4U8ZpttihAN0J9ALqlO9q3zdr+oV6w9evwC4OHHYlA0YCE45NwXGWYFtP9poFbL0oltKSB3wbaeioROHlXEIyOhIiHgFKYTaw6WUkZadxDfwswAuqJSV1BXTAW9mIwTePeLgGZlqB7XuHXK1prKPlSL5XSJ8GyL+fITLX7AYvSMsXKNerMPOF4841ek87borYKXVyb6/4rg/trIOqq0egugDoe8h17hBpd2j37qnGq4psKJSp0y6XaoLN3jy1cGMg5Od/t1MPt6uSe5ETeoHbwLdDcIOYI0NYl+Vs+e1q42CXRPgnY/HJuB/AgwAxP5dJ04ev60AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 102,
            "name": "Buenos Aires"
          },
          {
            "id": 103,
            "name": "Buenos Aires Capital"
          },
          {
            "id": 104,
            "name": "Catamarca"
          },
          {
            "id": 105,
            "name": "Chaco"
          },
          {
            "id": 106,
            "name": "Chubut"
          },
          {
            "id": 107,
            "name": "Cordoba"
          },
          {
            "id": 108,
            "name": "Corrientes"
          },
          {
            "id": 109,
            "name": "Entre Rios"
          },
          {
            "id": 110,
            "name": "Formosa"
          },
          {
            "id": 111,
            "name": "Jujuy"
          },
          {
            "id": 112,
            "name": "La Pampa"
          },
          {
            "id": 113,
            "name": "La Rioja"
          },
          {
            "id": 114,
            "name": "Mendoza"
          },
          {
            "id": 115,
            "name": "Misiones"
          },
          {
            "id": 116,
            "name": "Neuquen"
          },
          {
            "id": 117,
            "name": "Rio Negro"
          },
          {
            "id": 118,
            "name": "Salta"
          },
          {
            "id": 119,
            "name": "San Juan"
          },
          {
            "id": 120,
            "name": "San Luis"
          },
          {
            "id": 121,
            "name": "Santa Cruz"
          },
          {
            "id": 122,
            "name": "Santa Fe"
          },
          {
            "id": 123,
            "name": "Santiago del Estero"
          },
          {
            "id": 124,
            "name": "Tierra del Fuego"
          },
          {
            "id": 125,
            "name": "Tucuman"
          }
        ]
      },
      {
        "id": 6,
        "name": "Armenia",
        "prefixNumber": "+374",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMzA3QTc5RTE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMzA3QTc5RjE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMzMDdBNzlDMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMzMDdBNzlEMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WDHK5QAAAF9JREFUeNpi/M/A8IlhAAALEPMOhMVMDAMERi2mX+LawmD8ZyAsZmRg2P9vgLLTO8YBsvjvCEtcA2U30GKx/wOSqpcm2/weEIv/b2b4PzBB/Wy0rB7++Zjh80BYDBBgAAfmD594ReJrAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 126,
            "name": "Aragatsotn"
          },
          {
            "id": 127,
            "name": "Ararat"
          },
          {
            "id": 128,
            "name": "Armavir"
          },
          {
            "id": 129,
            "name": "Geghark'unik'"
          },
          {
            "id": 130,
            "name": "Kotayk'"
          },
          {
            "id": 131,
            "name": "Lorri"
          },
          {
            "id": 132,
            "name": "Shirak"
          },
          {
            "id": 133,
            "name": "Syunik'"
          },
          {
            "id": 134,
            "name": "Tavush"
          },
          {
            "id": 135,
            "name": "Vayots' Dzor"
          },
          {
            "id": 136,
            "name": "Yerevan"
          }
        ]
      },
      {
        "id": 7,
        "name": "Australia",
        "prefixNumber": "+61",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODIyQUY5NTY0OTkxRjRDNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUY3Nzg2NDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUY3Nzg2MzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Y+peLAAAD2UlEQVR42uyVW0wcVRjHfzu7s7uwOwgIFLA2VqjKLXKL1fjQ2DaBah9slbSp8qD2ZiSaStTG2AdTTBOrwagvJoZISWp8aDWUCjQ2bYgUGlCC0ECNAi1QspTLwnaX5TI7npkdKJZNQxMTE+OX7J5zvpn9/uf//y5r094tH6Y4V6kZyuZItYex1l4FYafKYnxF377Kzy9+QfFXquHTrTKr17dvfxxaYiHKnkHF758VXol7NcnycVzqm7vOKbtu/qj8/oZXOXq0AGd+HiNBWSGE4rHep9hT0vggs5/RIz72HipQyj3PK9LxBAE6FSFkCIfDSl5eEi6XbJwjArtcboZKyqgez8He08mh5+b4o+EJtmQ7YASeSpf5s0Ll8HvriD74CtWxO7nWNsALzj5kmy6EdkfIABkZ8bS2vkRh4RpxvhUR2KI9yDTzKOJb/MYSIZBp7hgRYzq8T9GvbCXuxod4tXhx8C97URVMneTmJtHdPcbU1IzwLaYjakkB28ym1/CMePHNyzy29XHk8T5xAUHVLxifPAU7tsOmTGjqZCFopzcxh2jvMG67hPqDkHJ+dompCGcE1/Pe3Nwr9tEG4Pr1yQQC83g8PnG2hoETv89RHjlcyvu748lJugIN7VQOZJK7wcEzdadoKS7j0pNFvLX/Fraen+g/PclHvi1cnkgWoA0moExaWiqTk0EmJvxmcD0NC9hsAS5ePEBT0xClpTXCF28AW6s/faf8y+xfHZnt3/HN243srpY4WRfFvoevsm6wjqnkAna8fIWac31EJ6SwJ2OUvbEdPNp9iTPjCuqc4CWI9fe/LiS209j4yxJTCBIKaXR2+jh/fkAwnjVVsWBTrvXx+Sf1fO0vpMu7WaTohngwTFWLhebRzfS1iAAOjYG2bg60XaVy+1YOPr2BVHst0rzO1s3cXIiSkjMMDuo1EGNKP0N+/kNYrVYuXGgXZ5f5CefY4nJ9pvn9etKnjcLQZdNvGt4/gFHahi0WxrTJJtkIHn5PL0q9texmcNUouG3bspFlidra30z/bbOFF7Najdws4BYVHAqppKdbuX49BlXE8flmTMBFRsvbRFvmV801hvr6HnOvrOjnCCNHxWIJUFVVxNmzOzlx4tllCqzGLCbIlKleVMQhIkWaPLGxkhgC97N2rWKsiYm2ewBWcTplCgrSjH7WFYw4uVa6ZLzeIMeOXTZaoKKihbGxgJm/1ZifrKwE2ttL2bgx5Y7h8jddjmsrpVoQ1SiL3AaRJIeR73D+tVUxdrudYlavoavrpiDhv11Kd2f8z1hHh+fu/078S/Y/8H8f+C8BBgBE6FYFFd8qlwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 137,
            "name": "canberra"
          },
          {
            "id": 138,
            "name": "sydney"
          },
          {
            "id": 139,
            "name": "darwin"
          },
          {
            "id": 140,
            "name": "brisbane"
          },
          {
            "id": 141,
            "name": "adelaide"
          },
          {
            "id": 142,
            "name": "hobart"
          },
          {
            "id": 143,
            "name": "melbourne"
          },
          {
            "id": 144,
            "name": "perth"
          }
        ]
      },
      {
        "id": 8,
        "name": "Austria",
        "prefixNumber": "+43",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUY3Nzg2NzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUY3Nzg2ODE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFRjc3ODY1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFRjc3ODY2MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WaOFnwAAAGpJREFUeNpivCHH+pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERp7FLL8e/R4Yi4WSAgfEYsb///9/onOKBoHPo6l61GLaZafnBYkDk50uMjAMSHZiYZdjHU1cwzxVQ5s8vHRu+nwGCDAAxfQUXKOTRMkAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 145,
            "name": "Burgenland"
          },
          {
            "id": 146,
            "name": "Kaernten"
          },
          {
            "id": 147,
            "name": "Niederoesterreich"
          },
          {
            "id": 148,
            "name": "Oberoesterreich"
          },
          {
            "id": 149,
            "name": "Salzburg"
          },
          {
            "id": 150,
            "name": "Steiermark"
          },
          {
            "id": 151,
            "name": "Tirol"
          },
          {
            "id": 152,
            "name": "Vorarlberg"
          },
          {
            "id": 153,
            "name": "Wien"
          }
        ]
      },
      {
        "id": 9,
        "name": "Azerbaijan",
        "prefixNumber": "+994",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUY3Nzg2QjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUY3Nzg2QzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFRjc3ODY5MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFRjc3ODZBMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D6YUmwAAAZJJREFUeNrsVb9Lw0AYfXe52qotVYp0clI6SEFUdNBJERRHXdydBAfxLxCdu/iXCCK6lKLFOjj7B0ixSrGJTa32R3rnF+KeS5YgeuQl4fju3vvefXfHcHZvI4ImCKkoiDkian+PWCCbDTZCKcAZkGTSbITXLdZLJf8o5j4C8sOGrNZhTE+CJRJQnU+aYchVE5iYKeSU3oo0CX3g5BRIJIHyHXBxS301wjghmABh8bR/lBzAgYnM1Tn46iKaC1uUeYv0JMFSecimTY4QMWf6xeXQWvmhh3cYM2vgmyuwlvfQfqyga9cQ29/B2NsN4scH6KIOh3h15nOhWR0KTAjv76tDb8PrHo6TZxxsJO7aEshq1uBLvtGKrJZ4RaZ8CZ6fgjm/AVVtg/FRsIk01HOdZnIr0NAmp+Ka0ywu0/sWCpQcEVwXgWKF+p4IGTf9n6w1M94+2tWSyBCDtC3IlwbEbI6sH4K0TG87sRDbCQ+HKkg4JGXV63uHRywWag97J1e1E/LscW11/i+J33A7Aa0oiL8FGAD8Y4eRaTQ3EAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 154,
            "name": "Abseron Rayonu"
          },
          {
            "id": 155,
            "name": "Agcabadi Rayonu"
          },
          {
            "id": 156,
            "name": "Agdam Rayonu"
          },
          {
            "id": 157,
            "name": "Agdas Rayonu"
          },
          {
            "id": 158,
            "name": "Agstafa Rayonu"
          },
          {
            "id": 159,
            "name": "Agsu Rayonu"
          },
          {
            "id": 160,
            "name": "Astara Rayonu"
          },
          {
            "id": 161,
            "name": "Balakan Rayonu"
          },
          {
            "id": 162,
            "name": "Barda Rayonu"
          },
          {
            "id": 163,
            "name": "Beylaqan Rayonu"
          },
          {
            "id": 164,
            "name": "Bilasuvar Rayonu"
          },
          {
            "id": 165,
            "name": "Cabrayil Rayonu"
          },
          {
            "id": 166,
            "name": "Calilabad Rayonu"
          },
          {
            "id": 167,
            "name": "Daskasan Rayonu"
          },
          {
            "id": 168,
            "name": "Davaci Rayonu"
          },
          {
            "id": 169,
            "name": "Fuzuli Rayonu"
          },
          {
            "id": 170,
            "name": "Gadabay Rayonu"
          },
          {
            "id": 171,
            "name": "Goranboy Rayonu"
          },
          {
            "id": 172,
            "name": "Goycay Rayonu"
          },
          {
            "id": 173,
            "name": "Haciqabul Rayonu"
          },
          {
            "id": 174,
            "name": "Imisli Rayonu"
          },
          {
            "id": 175,
            "name": "Ismayilli Rayonu"
          },
          {
            "id": 176,
            "name": "Kalbacar Rayonu"
          },
          {
            "id": 177,
            "name": "Kurdamir Rayonu"
          },
          {
            "id": 178,
            "name": "Lacin Rayonu"
          },
          {
            "id": 179,
            "name": "Lankaran Rayonu"
          },
          {
            "id": 180,
            "name": "Lerik Rayonu"
          },
          {
            "id": 181,
            "name": "Masalli Rayonu"
          },
          {
            "id": 182,
            "name": "Neftcala Rayonu"
          },
          {
            "id": 183,
            "name": "Oguz Rayonu"
          },
          {
            "id": 184,
            "name": "Qabala Rayonu"
          },
          {
            "id": 185,
            "name": "Qax Rayonu"
          },
          {
            "id": 186,
            "name": "Qazax Rayonu"
          },
          {
            "id": 187,
            "name": "Qobustan Rayonu"
          },
          {
            "id": 188,
            "name": "Quba Rayonu"
          },
          {
            "id": 189,
            "name": "Qubadli Rayonu"
          },
          {
            "id": 190,
            "name": "Qusar Rayonu"
          },
          {
            "id": 191,
            "name": "Saatli Rayonu"
          },
          {
            "id": 192,
            "name": "Sabirabad Rayonu"
          },
          {
            "id": 193,
            "name": "Saki Rayonu"
          },
          {
            "id": 194,
            "name": "Salyan Rayonu"
          },
          {
            "id": 195,
            "name": "Samaxi Rayonu"
          },
          {
            "id": 196,
            "name": "Samkir Rayonu"
          },
          {
            "id": 197,
            "name": "Samux Rayonu"
          },
          {
            "id": 198,
            "name": "Siyazan Rayonu"
          },
          {
            "id": 199,
            "name": "Susa Rayonu"
          },
          {
            "id": 200,
            "name": "Tartar Rayonu"
          },
          {
            "id": 201,
            "name": "Tovuz Rayonu"
          },
          {
            "id": 202,
            "name": "Ucar Rayonu"
          },
          {
            "id": 203,
            "name": "Xacmaz Rayonu"
          },
          {
            "id": 204,
            "name": "Xanlar Rayonu"
          },
          {
            "id": 205,
            "name": "Xizi Rayonu"
          },
          {
            "id": 206,
            "name": "Xocali Rayonu"
          },
          {
            "id": 207,
            "name": "Xocavand Rayonu"
          },
          {
            "id": 208,
            "name": "Yardimli Rayonu"
          },
          {
            "id": 209,
            "name": "Yevlax Rayonu"
          },
          {
            "id": 210,
            "name": "Zangilan Rayonu"
          },
          {
            "id": 211,
            "name": "Zaqatala Rayonu"
          },
          {
            "id": 212,
            "name": "Zardab Rayonu"
          },
          {
            "id": 213,
            "name": "Ali Bayramli Sahari"
          },
          {
            "id": 214,
            "name": "Baki Sahari"
          },
          {
            "id": 215,
            "name": "Ganca Sahari"
          },
          {
            "id": 216,
            "name": "Lankaran Sahari"
          },
          {
            "id": 217,
            "name": "Mingacevir Sahari"
          },
          {
            "id": 218,
            "name": "Naftalan Sahari"
          },
          {
            "id": 219,
            "name": "Saki Sahari"
          },
          {
            "id": 220,
            "name": "Sumqayit Sahari"
          },
          {
            "id": 221,
            "name": "Susa Sahari"
          },
          {
            "id": 222,
            "name": "Xankandi Sahari"
          },
          {
            "id": 223,
            "name": "Yevlax Sahari"
          },
          {
            "id": 224,
            "name": "Naxcivan Muxtar"
          }
        ]
      },
      {
        "id": 10,
        "name": "Bahrain",
        "prefixNumber": "+973",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjk1NzM4QTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2Rjk1NzM4QjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOTU3Mzg4MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGOTU3Mzg5MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B1d5vgAAAOJJREFUeNrslbsKwkAQRe/GPCyTTxC/1spaBIuIqKCVlR9gJWovKAhCwCT4SAI+4q6j1tGQRNNk2pmduzOHyzAhxAkRcd1asFsm3M4Q/nIKCSo0owIwBgiONMFIWMQpDGYL2M023O6AHslgspJKWIpbKBs6JJXE4v3ze79Pyct6A6tWx2E0xtlaPRcETadVl2jVnP9wYmp+9wOE+yM4bu9y0kQGQxeMC8YF4zwZsxwYN+hg9IgxlP8yZpqKrCIZYyn9WUzmYxQ+TsbYi0qGO+c1oWP24c0n5CKBsl7NxMcPAQYAXoK9LDclUq4AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 225,
            "name": "Al Hadd"
          },
          {
            "id": 226,
            "name": "Al Manamah"
          },
          {
            "id": 227,
            "name": "Al Mintaqah al Gharbiyah"
          },
          {
            "id": 228,
            "name": "Al Mintaqah al Wusta"
          },
          {
            "id": 229,
            "name": "Al Mintaqah ash Shamaliyah"
          },
          {
            "id": 230,
            "name": "Al Muharraq"
          },
          {
            "id": 231,
            "name": "Ar Rifa' wa al Mintaqah al Janubiyah"
          },
          {
            "id": 232,
            "name": "Jidd Hafs"
          },
          {
            "id": 233,
            "name": "Madinat Hamad"
          },
          {
            "id": 234,
            "name": "Madinat 'Isa"
          },
          {
            "id": 235,
            "name": "Juzur Hawar"
          },
          {
            "id": 236,
            "name": "Sitrah"
          }
        ]
      },
      {
        "id": 11,
        "name": "Bangladesh",
        "prefixNumber": "+880",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjk1NzM4RTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzMDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOTU3MzhDMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGOTU3MzhEMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oE4gsAAAAkNJREFUeNrEVk1r1FAUPS8vmY9M2tJSpG4q6kIYu7LUTXWjG1EQCuJOf4Abf4BuXIi49Q/4A3TRXRfdCK6KCC5Uit1UFxXGQqXTZDL5ep6XpOCAM8lMBnzwXiaZd++59+S+cyPw6O4x/sMwOWfGthKcqjpw8dAgBmeDi+Q1ycEFl5A3fZXtEdME1iBNepQCq50QNw5jnO8liPjoiyOxdcbEjwVG4xM5VKXBzUJQx4BDp68/uLh3EOTOc+9KIWoaeHmhjqeXmxkr/XLg5kh6mWmTjnbed9HuRFBzEl5jcFuLgTz55GG5p/BwzQZiGsbFwMbIf0jvm48u2r8iuKTT+8fuE0sgmDfx4JuPx7s+YMtShTccmBRe+RnizkGIeFZqVocWeGBk7DzbD1A7YbqWqJbx/cMopa0nR782waCCuoE5N8ZNsoP6pMDajvaX3CQ9PqIEdaG2YZAr2kZUoXq8Y1nOYeE+ldX7nm2kWagSEVh6ITtftU2l4iJjbxfN1FkjKRa2Wj+By4re1jaBqgDsJ9g5a+HdkgXzOB7Ke0qOXjyF58s1+LNGJjITA8eZ141VG9/nJVpHcZr5AO387UQKjaMImxfreNGmuvRUxVrQANTk33xnV6/PYOtcDZJ0Osy+xcpNp2aCwbxasbGx1sokNlRT0GoN3k3QsQVurzu4RkG5xXN62iQ+s0lsLpnYW2Rp9fMuVbKsBT8EikM8bYtUs/Qa5UFRUkGqdT1Mvy3+3fi9ZPCAq8kPvQbujq0SFb8+9PgjwAAqQMkwoAhtcwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 237,
            "name": "Barisal"
          },
          {
            "id": 238,
            "name": "Chittagong"
          },
          {
            "id": 239,
            "name": "Dhaka"
          },
          {
            "id": 240,
            "name": "Khulna"
          },
          {
            "id": 241,
            "name": "Rajshahi"
          },
          {
            "id": 242,
            "name": "Sylhet"
          }
        ]
      },
      {
        "id": 12,
        "name": "Barbados",
        "prefixNumber": "+1246",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RkMxQjIzMzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzNDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGQzFCMjMxMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGQzFCMjMyMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gU/BiQAAAf5JREFUeNq8lj1o1GAcxn/5bLy0l+v1esJpUcshBVcRREEo1MVBBUFcHJS6KAhS6yDYdqkIuhVcHQQXF3Fx8wsEB6WTWpGiRfzolaPtfeSaXhP/uSo4SE1qzj+E/PPy5Hny5H3eN1HYPRYQoRZv3190tlZ1Kh1/xtue4i1Zax1nTzpR+HSiV1oO9S+YICqZGkM4SAgTWzjR2pzwqhhLa+Bo631bhU0FthtgyLlHZ/pdg1dvGtArMdFkrM8EKzpd5HB9mPWoTpc5NJiHLpWR69+p1H1ePuwX9yqP75bodtLJO97TbzI8WebCxDfYovJ+zmPmk9dyee3mPKeuLjCw00xe2NphcmM0y4Mn1db8Dh2wOXywEwoG9x4tMznSjTVgJS+8Ku6OH3XIyZyWnlXJ2hqOpdB4UcPJ6pw5kYHwDSQt7K5IercZFMXh89kV0vIAmbzOU+kLWUl3n0HT9ZMPVyDBRXgH96U4ffEzmS4NX66n7pSZOJ8TJgW/beu41GRob4qx4RyZTo20rTJ+rocj+22Yb4JC8o5btdCkWLS5fKyX13Mz1Go+V6Z2wVsJXKkuAKNNwuEmUlmDr3UKKRU33Di+uLAkY7b0brsc/6qPHrcu5df7MMlKfIrNCQe/pSPs/5twKOoF//R9i3ObkhAmtuPln/hgA1FJGZF+fX4IMABjOotaoebfVQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 243,
            "name": "Christ Church"
          },
          {
            "id": 244,
            "name": "Saint Andrew"
          },
          {
            "id": 245,
            "name": "Saint George"
          },
          {
            "id": 246,
            "name": "Saint James"
          },
          {
            "id": 247,
            "name": "Saint John"
          },
          {
            "id": 248,
            "name": "Saint Joseph"
          },
          {
            "id": 249,
            "name": "Saint Lucy"
          },
          {
            "id": 250,
            "name": "Saint Michael"
          },
          {
            "id": 251,
            "name": "Saint Peter"
          },
          {
            "id": 252,
            "name": "Saint Philip"
          },
          {
            "id": 253,
            "name": "Saint Thomas"
          }
        ]
      },
      {
        "id": 13,
        "name": "Belarus",
        "prefixNumber": "+375",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RkMxQjIzNzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzODE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGQzFCMjM1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGQzFCMjM2MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bnsnjAAAAapJREFUeNq8lc9KQkEUxr9773i7ev1LKCiVEJggGAW+QLto52P4Ar5K65YteoGibRC0aOGuhPAvpphpps7915mhV5gZOHdzF2e+7/zON8bu42O4fnlJRb4Pp1rF8uEB7+024lB7GB8MSl+3tzAcB2x/H/50CgPqjwnDWJnU1EomwbJZhL+/0HGY6bpg+TyE1d5kAvvgAJEOxZHnIfj5AaJIzpj3enqsFjYLi8lybN/eYJfLWhSzTaeDz+trOeNwvUa8XteimMkPzXjv+BiJRgP+bKYFLtOpVJC+uIBdLCJeqyFYLPRQHZC9/nwOw7bBx2MIyrUoFjSDVglBIMuwLD2NZXhQYpmJBFghj/B7CUveSG0x3u9j/fws12g7GiBnpSNOW52AWrhZxDl23a6kuegUcdc+C2/6CGOu4sZibwutFsLNFsnaJZ5OutbjFbmdU0y1UBxSiRnj/BTu6z0wpT8bxXAZsRisTIZoppG/U2QeHhHdGqgOVit4tL/CatAF+HD4n2fqIzMlX6cgJHu3FCQx6HglmF0qjXLNZiriHil2KTpLFCjqG/8JMADgr5w+bkv5NwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 254,
            "name": "Brest"
          },
          {
            "id": 255,
            "name": "Homyel"
          },
          {
            "id": 256,
            "name": "Horad Minsk"
          },
          {
            "id": 257,
            "name": "Hrodna"
          },
          {
            "id": 258,
            "name": "Mahilyow"
          },
          {
            "id": 259,
            "name": "Minsk"
          },
          {
            "id": 260,
            "name": "Vitsyebsk"
          }
        ]
      },
      {
        "id": 14,
        "name": "Belgium",
        "prefixNumber": "+32",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZGMzM3RTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZGMzM3RjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGQzFCMjM5MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGQzFCMjNBMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dCOj3gAAADpJREFUeNrszTERACAMwMBQS/i3ggVQUJBAJ1iSOXffgE2hPSi1OpmTaJcv+JSwsLCwsLCw8PuOAAMAnCIHFZwXd4kAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 261,
            "name": "Antwerpen"
          },
          {
            "id": 262,
            "name": "Brabant Wallon"
          },
          {
            "id": 263,
            "name": "Brussels"
          },
          {
            "id": 264,
            "name": "Flanders"
          },
          {
            "id": 265,
            "name": "Hainaut"
          },
          {
            "id": 266,
            "name": "Liege"
          },
          {
            "id": 267,
            "name": "Limburg"
          },
          {
            "id": 268,
            "name": "Luxembourg"
          },
          {
            "id": 269,
            "name": "Namur"
          },
          {
            "id": 270,
            "name": "Oost-Vlaanderen"
          },
          {
            "id": 271,
            "name": "Vlaams-Brabant"
          },
          {
            "id": 272,
            "name": "Wallonia"
          },
          {
            "id": 273,
            "name": "West-Vlaanderen"
          }
        ]
      },
      {
        "id": 15,
        "name": "Belize",
        "prefixNumber": "+501",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZGMzM4MjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZGMzM4MzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RkYzMzgwMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RkYzMzgxMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0XP2EgAABMBJREFUeNqclmlsVFUYhp9ZO2uX6XSmLXSvlUUKlEiAxMIPSNEYFpuAEUohBjEklVg0BkyI8YeKKIkhyhIkoig1RqIQtBgggIoIItSUsg0dpttA29nuTNvprJ62/PDHzNB6ki+599xzz3vOe77vfY9M0uZ0A/ki/IyjyUREYnFC4ejou1olR6mQE48z3mYU0aNsKFli/E9HYjCBppDLcfb7cbqG0GuVlBRZiMWjdPS58A+Eyc3WkW82ir7YeBZhlFGzX0oFigBkOAT3+9HOncO8pcWsnFOESukToSYSyeDEtQ5+/rGF2JU2KDKBNg2isVTAfhkL308OLCjENwC9wzS+tZotdWYU4bv4w2l4BwbRaNJJV8UYRGKqpYatey/yyc4TkK2CTEMqcL+C4sXbxENawsMcGgY3fLa7ntfWhjhx+SgOXwQpEOCGdJ3Wvht4g0oysfBL29dsq11CbmkJJ4+1gEYsWqVMBhySp6S4a4D1G6rYuDLG3uOHmV1YL/6Qs/tWIx3dNnr+ukTTT69wwXeJ+eVr+fiHj9iwLIsdb66ADs/Y4pNNn/SLO0DejGJ2vVrNodNHWLNiJwU2O9Lh71ho2oC5R4dVZUajkHGqYTuhP+xsEmMONh9g3Qs5TFlQCf3+/wMcpG7ZTJzh38jSVuLe/yWdzctofLmEGRVV2Nqvc+r23xQs38pzUhnHNz7LreNfoddZ8UZaWF5TKvIjPEFgUafodEwrN9Dp6yLDVIhVF0aXbeRq81Hyez1srv2UHYuqWe3T45QkrroHCTp8zCqfg8PdyfzpQhqM2qQJlvj0I2KwUcMkk0YkUpSpBelY6jYTtC1huO8B2jY7GUVtzKoqxNHWTe23e8gvnE/B5Dz6B/p42HsDmSaAwpxFNCiNVce4gBE7HhECkRxGlRaVTDHaay0uwzC5jEBcgV3kZSzagyl+EkPxG2Tn542OkUJCZAL9lKSnjYrJxKhWCqBAkF53GK1axX2XfaysxTxKUUqKaTMZMsymzbmGSOU7IgfUyKKPyBocYrq1hF5/nLhbJJdKMQGq5WKrAwPcc4SZ/aSZm10ebN47nLv2BWqjk32/SmQ+zEOWWcGHbR7qp27BJFvAqoVbuGK7KEqrhDMOoXY+nxCTnMTalFxAZNzudrH9pVpuOc7T4bOTqddgu+cnquhCX3EBq/UmaQGJVls7ZqMJ31BYsOJlSlk1De+dx+UXqqdTJxSQpNKCyYDzmp23D55jT+Mqmk5/T07ZM6x9+nW8D11kZLrRG/R48tSEdQbUFg9/tnzDorlVNB0LcPv3VpiSN1YhCV0umVaPWNKQoKt3kKYDDSxf7KL54ln6I8OUpi1GKc5eJo/Q2n2HwtxhXB4HK6qf5+ylSaxctwssYkqdIDKxVY3DJLyD4PTywa4GNr2oJx5yc6//LvY+G1qlgSdyShmOD1GZv5Sthy6z+11hElkawZg+pUkIW9yX2hZHwEd23v4A3bxK6tbXUJzvo8KcLopOTjiq5/Q/fXx+5AxcbofJGWDQPN4WVz1Vnxp4lHXZaKJ39vlFeCm35grjNwjguHj30OOSyM3SU2BJfyR8j70J+GUenWXCV5+QULZgaKxwNWqFcD85E2ijV59/BRgAi/3kZlc/4VIAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 274,
            "name": "Belize"
          },
          {
            "id": 275,
            "name": "Cayo"
          },
          {
            "id": 276,
            "name": "Corozal"
          },
          {
            "id": 277,
            "name": "Orange Walk"
          },
          {
            "id": 278,
            "name": "Stann Creek"
          },
          {
            "id": 279,
            "name": "Toledo"
          }
        ]
      },
      {
        "id": 16,
        "name": "Benin",
        "prefixNumber": "+229",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZGMzM4NjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZGMzM4NzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RkYzMzg0MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RkYzMzg1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PY+RygAAALJJREFUeNrslkEKwjAQRf90IqgYFNx5nN7AA/Q8Hs5bCHUluoiLasmkU+hCEKQ1GDf55DMJBF5mQsIQDvsawE7t8EnPGeyywak8YqPR6/pLWfXZDBO8xBSyBf6kDM7gn8mM3hnUpMMKsBLQQxKB+9ooSy4suDOk5Zgqy3iwZhoc4VZtg3UtrnOOSThMztjXhn0T4CkKzJPvuFiLnkG9oPycMjiD334uN3QfLlX30bM6AQYA2ssuTyUvY0AAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 280,
            "name": "Alibori"
          },
          {
            "id": 281,
            "name": "Atakora"
          },
          {
            "id": 282,
            "name": "Atlantique"
          },
          {
            "id": 283,
            "name": "Borgou"
          },
          {
            "id": 284,
            "name": "Collines"
          },
          {
            "id": 285,
            "name": "Donga"
          },
          {
            "id": 286,
            "name": "Kouffo"
          },
          {
            "id": 287,
            "name": "Littoral"
          },
          {
            "id": 288,
            "name": "Mono"
          },
          {
            "id": 289,
            "name": "Oueme"
          },
          {
            "id": 290,
            "name": "Plateau"
          },
          {
            "id": 291,
            "name": "Zou"
          }
        ]
      },
      {
        "id": 17,
        "name": "Bermuda",
        "prefixNumber": "+1441",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJFQzM0OUExNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJFQzM0OTkxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNEI3RTM0NTcwNkE3OUY4MDY0M0U1Rjc0NzJDRTNGRkEiIHN0UmVmOmRvY3VtZW50SUQ9IjRCN0UzNDU3MDZBNzlGODA2NDNFNUY3NDcyQ0UzRkZBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iROkEwAAAwZJREFUeNpifJaZJBnovvS5ZOPyS7d37GJgEF9RoRM+L393bIfbpK8M/z6JCf7OkXpZGyj3T1nzZEUD67NnjAyMDEQAJtnpXwrCJnnfXH82jre/L17exuD9D0aGvwwfmDnFlHmLVR+djmKszLZq4XHUXfv32/MXfAzEApaQZK83kiJb+D75375QEB2YVhj0YMnaCxMZtJX5j02WU773hyEkbtdb3quTtur+fCnIwvbr9w8ijWb8ryvK8Ov/88//n3z/x/D+vSgP249vv17/YxRg+M/FwfRdWunns+fCv74qqIoyMDOdu/7697//LDDN/xn+/2cAhQ6ERAsolvMSpi+ev/4pwGQQ5cDx7B7328cfmbhfbN8n5OIgbaZ5d8cRRlGdaxLqd54/FWb/x8B0hOXfH6ijgCYyMf3nF2SVEP795uP/9++Z/vz+jxzWRteMm/y7WVZvUciP5LcwnulQdDWxSp3j/4PA1NVJ0yS27dQujv8po1goFubEEPz97z9eBqj2Hwz/hTPSzN69EZEVNX14Xaqr7ytICmE4S121S5LkF/atcyqWn5/6TPrLR97e4p/uIgx7H7+PVWnjcRErC9NPs3mySPb55q1XfnFx/Pr6FRoYDAwcsgoXX93bc/uL4VsGNX42RqhnoID5gOz3L51NO0+/PvWcUfb9Zds/111YH3LcvcX4/z/L25siN9Y82byFlZXXWoLR8urOr09e/fr3DxKm/xgYxGRVbn260PqbSZ5ZyPL0/tdnzjEjmc54HExxMzBIMDCwgdmPGBg+MjDyMPxXAKv6zcDwjIHhMwMDOzD4QK6F6PzPxcBw28zgWoArDzfXizdPtLefMjpz+QuSq1lYwZxfYBPhPuVkAKZshrtITuAAi/9H0gm0huf6lSvSzx/Li4vdemp54y08qUCNxkyOGAzs3I8MDNLf/1fc+3Xlx1P1l//5GdjeMPxmRlZxhrhcixUA0zUwDLmYmL/9+/sT5A/UdM1AAQDGJzAmPv4DxigjE2YZwkAzMGr0qNH4AUCAAQBpbzCLqENWxgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 292,
            "name": "Devonshire"
          },
          {
            "id": 293,
            "name": "Hamilton"
          },
          {
            "id": 294,
            "name": "Hamilton"
          },
          {
            "id": 295,
            "name": "Paget"
          },
          {
            "id": 296,
            "name": "Pembroke"
          },
          {
            "id": 297,
            "name": "Saint George"
          },
          {
            "id": 298,
            "name": "Saint George's"
          },
          {
            "id": 299,
            "name": "Sandys"
          },
          {
            "id": 300,
            "name": "Smith's"
          },
          {
            "id": 301,
            "name": "Southampton"
          },
          {
            "id": 302,
            "name": "Warwick"
          }
        ]
      },
      {
        "id": 18,
        "name": "Bhutan",
        "prefixNumber": "+975",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkVDMzQ5RDE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkVDMzQ5RTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyRUMzNDlCMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyRUMzNDlDMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QtQgBwAABGxJREFUeNq0lm2IlFUUx3/3eZnZmZ2ZnXV3dZ1cV1NTNGWTfEkj+lD5QoJZRBlI0PahD9kHicwPBX7ID0EEkQgZC4UaimVipSAqkpZFZUQIEpqaq+bLuPPyzDPPPM+9nRmF3HxJN7ozl3nmzpzzv+d//ufcq/Lbp54GcjKL/F/DyLTlPUKhL5q0tyXqd2QpffXn9NC8KnmFKBOiVfyadUvWqsgitMawmg3Btxpva0j0h0k7Qw9DNUKxjUcUBQKdxI3OYixx6bQ0gENtY3UmsAc8ypugujcC2Zt9l+I/AEfCXg1ftXE5ORNaekhXD9Ps/wiVU4TFk5h7nqH6y0XCD88Qnk9jD5fNxsRUM1Rgg9JV/NT9BJm5JEfMI5bOEYs/j+cV8YqHaQ8PCMULKH61E109Q3x4GePEG6BXEjEUkiWfEU0EugmVe5xE6zhc28VNSl7joqT+FNbdqyit24a9ZxOxYQqjBsc4pIjrTiy/H6dV8tc+hlqpjHduP8l8QaIei9V/hONr95E4cwwnnYRL57EctyHuv6V3J+pVElHwJ5Z3TD4vCW2iZL+Am27Gbe2m8PlWLi+YRXjiFJlpPWSXr8KkpFjCUEDNECJWok5dQZeOEYx4FpUcjamcwD7+AeFADR7toyU7EffNDQQLe4m8Ctn7ZhDLZKiMn4T+Zh+MnSBUmTsDVgIaRprauDWYCS+jpC6V+IiOLCb4+Sjqwlmc0Z3oHduwusfD7wcprHwJd/RY+O5r1MiuQaC3Dyy0mpZZmCkrMK4Ph3diZafhTF6CO1l8FopIq6C6YzNm1xdSZpJBVcMLApyuMdDc3KD7joClyYlNFd25GF23//gN9Jq3Jb3tNM1fiJ46HefFV6jt3IFavxklDcOM60b5Hk5CDHR0HegtgEVIutTQnhXmG7KoZqdiylL/TQK0dj/eutXU3vsI/cBBatPnYIZ3Yr22nPSDD+NLvVZf7SUmYjSx2A0RnBt3dMlfbBSWKLimE5TufQuGzUQf/xV39lzaurqkPF5n4KfvccIaZtl89IyHME8tI7PgCTJif27Jc0Tr38UaM/52gBWWqMaUT+Bncqg5feiO2Wg5t6xVvQRPLsXb0ie5/AR7Sg92W4d4kJq2Jau7t6MP7CbvbiQzbxGOL4J0YzdN4WBgyYexC4Q9T5PsWsHlQx6qKo1h+zr8jZuwOzpILu3FLuQJ9nyJlUpd4agOMGEyqlSgvOIFKqtbsWpV7LqwtL4F8NXz0mkPKA/kiH57BHfDp6gt7xD5Jfx4gihlk8mNomPiJE4/tojo4F7soIpJXN17JAJKpoQA6VCVUuP5nyU0GFhEp7JCZVrhH3Dxd8n/j64kCKU2R+awrTY56qQ8qj5GWl9FjMK+97HPyxFYr9NrIzLy7LoomVe+3xxYFQ5NK+i8SVc+i/D3aWy7hqo3dcu9ztDUW18sjlUReSeSN6XxNkbRCX7QRW9zmI5OmmL9akLMbWz8ut1a9RuFrOUvQCZ7y2j+ZdRvOsW/BBgAmn3MQYJZCMcAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 303,
            "name": "Bumthang"
          },
          {
            "id": 304,
            "name": "Chukha"
          },
          {
            "id": 305,
            "name": "Dagana"
          },
          {
            "id": 306,
            "name": "Gasa"
          },
          {
            "id": 307,
            "name": "Haa"
          },
          {
            "id": 308,
            "name": "Lhuntse"
          },
          {
            "id": 309,
            "name": "Mongar"
          },
          {
            "id": 310,
            "name": "Paro"
          },
          {
            "id": 311,
            "name": "Pemagatshel"
          },
          {
            "id": 312,
            "name": "Punakha"
          },
          {
            "id": 313,
            "name": "Samdrup Jongkhar"
          },
          {
            "id": 314,
            "name": "Samtse"
          },
          {
            "id": 315,
            "name": "Sarpang"
          },
          {
            "id": 316,
            "name": "Thimphu"
          },
          {
            "id": 317,
            "name": "Trashigang"
          },
          {
            "id": 318,
            "name": "Trashiyangste"
          },
          {
            "id": 319,
            "name": "Trongsa"
          },
          {
            "id": 320,
            "name": "Tsirang"
          },
          {
            "id": 321,
            "name": "Wangdue Phodrang"
          },
          {
            "id": 322,
            "name": "Zhemgang"
          }
        ]
      },
      {
        "id": 19,
        "name": "Bosnia and Herzegovina",
        "prefixNumber": "+387",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDZBM0U3RTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MDZBM0U3RjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwNkEzRTdDMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkwNkEzRTdEMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PElEFQAAA31JREFUeNqsll1MW2UYx3+cnpZ2fMjYhyJj42PlS4tRRyLbpIVSyaJXM9NsQ72AJe4GF+PXmqi78MpEE73AmEwCiXFT44XxwmWBjYgj2WBRKKWTfTAwhE562roxOGy0x/ccLcY5J7R9knPy5rxv+/T/PL//cyoXFHRc7+7exZo1Flyu40jSfdy6peA/8SnV7iuovgIwxUk2rFtmOdbpZt+rrWzYEBHfrxnP5bVrbTl79nyH2WziyJHt7NhxP591zdPQspHvu9/hsaZfUf2pJb9bSMHgTVR1iVBIobAwW6gu4aUWK7+FVB5/+i38/VuwPjwDMQktjYlls1kiP99GOByno+Nn/H6FvtOTNDXlcEPdSuNzXnq+fB/HzsuogfQpl/VbPK6xfn0OgUCYwcFx7PYiBocOGAe2Vl6nxtPOL30fUl43mbayS4nF0lJMAGYW1zoWFzXOnQsa6kMzfrG7kQrXG4z2Fy+XPS2KE5GRISi0ymRlWUSpv0KWJdoOPEpz8yY+/kTF+ayNvq/fxuGaRh0tQBPKM1JVnIjMTBPB4By3b8eJRMJUV+fj8ZTR9qJE+PcFap7y8lNvKdbqGTJSUC7f+UDvt8ViEj9AFoljdHaOcvFihN7eSZzOXAGcneb9Xvq/eY+KuquoY8n1XP6vDU37E7jh4VnOnAlQUbFZ9L3N2CuvilLZ8AqB0x9RmWTye9YqAZzNto75+TgjI7MGcNNTOnAPUNXwGoGBzVgdq/e5/H8HdOBsNpnsbAv19ccN4A4dqsXtLhTALfDk7ixOfP4u2zxTq7LaiuhIAKeqMRRFoagol8bGUg62WlCiC9Q+c5gx3WoPrdxq8koOJYDTrRYOx+jq8jMxEaWn56qwXS5zi3ah/HV+/PYDqp64sqIJJ68GiL8nnMLZsxcoLn6Q8+dfNvZK7MJ6DX9NuO1Tyz5PqdR3Aqcr1yecppkYGrqGzxdCuXZhecINnyoxJty9fC4nY/4EcHrv6+uPGZ5vb99Gk2eTAZx7by6nvjhMTeM0zEvpUZwIveeh0IKxjkYjlJXl4XIW09oioUTmeGSXF98PJZAXZ+kuyuVkE+v91l+pFotVrGMcPepjfDzCyZMT4s9ElgCuHOfuN5ka8VJTLpRj+lfiG6m8ZRITzuebZWBgDIejVIzXfWRa4tTW3aR250FeeP4SeXnRf3zuDwEGABm+YrFv6121AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 323,
            "name": "Una-Sana [Federation]"
          },
          {
            "id": 324,
            "name": "Posavina [Federation]"
          },
          {
            "id": 325,
            "name": "Tuzla [Federation]"
          },
          {
            "id": 326,
            "name": "Zenica-Doboj [Federation]"
          },
          {
            "id": 327,
            "name": "Bosnian Podrinje [Federation]"
          },
          {
            "id": 328,
            "name": "Central Bosnia [Federation]"
          },
          {
            "id": 329,
            "name": "Herzegovina-Neretva [Federation]"
          },
          {
            "id": 330,
            "name": "West Herzegovina [Federation]"
          },
          {
            "id": 331,
            "name": "Sarajevo [Federation]"
          },
          {
            "id": 332,
            "name": " West Bosnia [Federation]"
          },
          {
            "id": 333,
            "name": "Banja Luka [RS]"
          },
          {
            "id": 334,
            "name": "Bijeljina [RS]"
          },
          {
            "id": 335,
            "name": "Doboj [RS]"
          },
          {
            "id": 336,
            "name": "Fo?a [RS]"
          },
          {
            "id": 337,
            "name": "Sarajevo-Romanija [RS]"
          },
          {
            "id": 338,
            "name": "Trebinje [RS]"
          },
          {
            "id": 339,
            "name": "Vlasenica [RS]"
          }
        ]
      },
      {
        "id": 20,
        "name": "Botswana",
        "prefixNumber": "+267",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDZBM0U4MjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MDZBM0U4MzE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwNkEzRTgwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkwNkEzRTgxMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HqOdhgAAAHJJREFUeNpiKV11+ykDA4MUEH9moA/gBeJnLFAGAxJNF8uZGAYIjFpMN8Dy8vOfAbGY8fb3/5/onKJB4DPLvMqMgfExEA+IjwfMYpbsxIiBCeq7A5W4mpffHJh8LMrDPFpkjlpMm8QFbfLw0rnp8xkgwACv5h08wmledAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 340,
            "name": "Central"
          },
          {
            "id": 341,
            "name": "Ghanzi"
          },
          {
            "id": 342,
            "name": "Kgalagadi"
          },
          {
            "id": 343,
            "name": "Kgatleng"
          },
          {
            "id": 344,
            "name": "Kweneng"
          },
          {
            "id": 345,
            "name": "North East"
          },
          {
            "id": 346,
            "name": "North West"
          },
          {
            "id": 347,
            "name": "South East"
          },
          {
            "id": 348,
            "name": "Southern"
          }
        ]
      },
      {
        "id": 21,
        "name": "Brazil",
        "prefixNumber": "+55",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDhGOEMxMTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDhGOEMxMjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEOEY4QzBGMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEOEY4QzEwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TFbakQAABKdJREFUeNq8ll1sU2UYx3+n7en6uZVa1oGDwtYxnCw0EhiCxjgjH14oiV6Ampj4GRONRpQ4ZZEYvTAhwSxGjRFilO2GDy8gZuEGTAS2xUHmBvuAuVG70U0o++ranq6tz2mHc8YB48KTnL7pec/7/p////k/z3kV6h4ZAJz8v9e4SX4Wz3uZkoGEFWQgL343wE6Djj4vwJTEOpHPA64/qXIPw6Qj90yfmwdjw529N72pDjJlYufybloD52gKnOfDkk55ZpQ55+x3b8dBcjx2yxzrTJJmiFtYt2CIH9adY0VJCq5PY3ggeEXhueY1/HK9SKRPgFnujHJLxnMD64D6YmFpMCX4pOQSNRuvQKeRfYeqaOv2kpa4K/3DvPd0CwQ09p1ZQs3lMhJJG1gnwJCeK4A5gLPmsWSZbiocoK60i/LKGCe/9/HMru1Eki5MJNG3TGLGbR6j/tMjbHmpm76OPN7qXcmxcDGoU6JA7L/Ax41sXVaje3OGpeQr6qTAEqOu7AKf+3vw+KY4edBF9c7XUdIKRWoILX0VG2N4raPEkk72n6ii2tdD4OEIO8xDlNjHOT1ewGS0AEzJHHv+DkCbYayDxkWitIEdi4LsW96F1y4Ri2K4TRxsq+NseDXL3EFsihOTptLRc4X2kyEutPZzjWKqK4Y40XAAY1L2kvgjk0Z29pfz3eDSHKg1epP9DGNFSmKVbYKvy9rZXdKPQ0mTEJWMLujtdPPlkScYutjDxeYQkXCUPNWE11/A5h2VrKpeQrhjkKZujSfX9LO4YpK4mM9pzrCtSMrOHuGikBrWLGRydaSZssOUSrGq0bT6LPYFZB0bE2UMEpySD6FwHocOt4mBY7icZnpbhvkx+SsWye8Kv5fHX72f3Q1bqf8mTGjwOGt0frI2Jua2agi3CJtdzfhbH6JPwHXpc8DGKa6mjGzqWEvtkl62FEawSlrisghpTIWuKL4FThxWG+lUFNVqodCejyqsB4IR9u5qJFDp5/nabWzwecgMhciI2lapQomNU0EXe4KlhISgjqVfhpummjKmODPiYetvVbzSeR/jkmuL9AvxD+WrR6RsBgjd8OB2W9CSKWFkkFvBas9j+T0uLrRbOFa7n4X2ThTJr742LuBvdpXzaNt6fr5RSFI32HSHm+lcmenkSwP49o9Syls30jDozXrCKMO7LzQyGosRDOfjcJjErfHsnZ9vImNeKkG4eefln6BA9BUdj4YXslL2+KJ/hbDWcnv/45pdTjqKHpGAT4gZjg4V0x6zUpUeIfDYCGvdA9QfLyU46mE8qnJtTCUkKtnUNF99cICnXuxhsE/lte4Kai9XMJoSne0T0yxn1bJ2684lchNziIMn2VvWwxsPSu7OW/i4YT0dl4qkYyqU+8LUbG/CsSHG/pZFvN21komEHWzC0JCaZ+f6dwCaCJLIo9ozSP36cxRJUyI83asXwY2r8OzZAI3D94qsydyn8q579Rx9WzoHe3yX+cjfl5367Hcf7/eXSe+UMrHpsqZvBzoP4FlfKjV7CNjoDaHK/1Pig+zXSPrAHQDOOoHc+bFH39gkdaiOcfq6N2cYneXNuXmcQP4SYAD5sNLFPECeSAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 349,
            "name": "Acre"
          },
          {
            "id": 350,
            "name": "Alagoas"
          },
          {
            "id": 351,
            "name": "Amapa"
          },
          {
            "id": 352,
            "name": "Amazonas"
          },
          {
            "id": 353,
            "name": "Bahia"
          },
          {
            "id": 354,
            "name": "Ceara"
          },
          {
            "id": 355,
            "name": "Distrito Federal"
          },
          {
            "id": 356,
            "name": "Espirito Santo"
          },
          {
            "id": 357,
            "name": "Goias"
          },
          {
            "id": 358,
            "name": "Maranhao"
          },
          {
            "id": 359,
            "name": "Mato Grosso"
          },
          {
            "id": 360,
            "name": "Mato Grosso do Sul"
          },
          {
            "id": 361,
            "name": "Minas Gerais"
          },
          {
            "id": 362,
            "name": "Para"
          },
          {
            "id": 363,
            "name": "Paraiba"
          },
          {
            "id": 364,
            "name": "Parana"
          },
          {
            "id": 365,
            "name": "Pernambuco"
          },
          {
            "id": 366,
            "name": "Piaui"
          },
          {
            "id": 367,
            "name": "Rio de Janeiro"
          },
          {
            "id": 368,
            "name": "Rio Grande do Norte"
          },
          {
            "id": 369,
            "name": "Rio Grande do Sul"
          },
          {
            "id": 370,
            "name": "Rondonia"
          },
          {
            "id": 371,
            "name": "Roraima"
          },
          {
            "id": 372,
            "name": "Santa Catarina"
          },
          {
            "id": 373,
            "name": "Sao Paulo"
          },
          {
            "id": 374,
            "name": "Sergipe"
          },
          {
            "id": 375,
            "name": "Tocantins"
          }
        ]
      },
      {
        "id": 22,
        "name": "Bulgaria",
        "prefixNumber": "+359",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MzhCMzg3ODE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MzhCMzg3OTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOEIzODc2MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYzOEIzODc3MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+McDtIQAAAD1JREFUeNpi/P///yeGAQCMQIv/D4TFTAwDBEYtpl/iYpiWN5q4Ri0etZg62emamtBodhq1eNRiqgCAAAMAqc4MILa4lBgAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 376,
            "name": "Blagoevgrad"
          },
          {
            "id": 377,
            "name": "Burgas"
          },
          {
            "id": 378,
            "name": "Dobrich"
          },
          {
            "id": 379,
            "name": "Gabrovo"
          },
          {
            "id": 380,
            "name": "Khaskovo"
          },
          {
            "id": 381,
            "name": "Kurdzhali"
          },
          {
            "id": 382,
            "name": "Kyustendil"
          },
          {
            "id": 383,
            "name": "Lovech"
          },
          {
            "id": 384,
            "name": "Montana"
          },
          {
            "id": 385,
            "name": "Pazardzhik"
          },
          {
            "id": 386,
            "name": "Pernik"
          },
          {
            "id": 387,
            "name": "Pleven"
          },
          {
            "id": 388,
            "name": "Plovdiv"
          },
          {
            "id": 389,
            "name": "Razgrad"
          },
          {
            "id": 390,
            "name": "Ruse"
          },
          {
            "id": 391,
            "name": "Shumen"
          },
          {
            "id": 392,
            "name": "Silistra"
          },
          {
            "id": 393,
            "name": "Sliven"
          },
          {
            "id": 394,
            "name": "Smolyan"
          },
          {
            "id": 395,
            "name": "Sofiya"
          },
          {
            "id": 396,
            "name": "Sofiya-Grad"
          },
          {
            "id": 397,
            "name": "Stara Zagora"
          },
          {
            "id": 398,
            "name": "Turgovishte"
          },
          {
            "id": 399,
            "name": "Varna"
          },
          {
            "id": 400,
            "name": "Veliko Turnovo"
          },
          {
            "id": 401,
            "name": "Vidin"
          },
          {
            "id": 402,
            "name": "Vratsa"
          },
          {
            "id": 403,
            "name": "Yambol"
          }
        ]
      },
      {
        "id": 23,
        "name": "Burundi",
        "prefixNumber": "+257",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNkJDNTBFRDE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNkJDNTBFRTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOEIzODdFMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2QkM1MEVDMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+f3jizgAABTpJREFUeNqsVmlsVFUU/t7SmTcztNPOlFraTltIIZqWkoGACHUpFQiQGsQUECWYaGI0hAQRarVCadnREtTE5QcaI5KIQEGWFBAsGLQFbKEsFpRANwp02uns25vreY8wTKdFI3onNy9z77nnO+fc851zOcaYQ3Y4cXPNFnRs3gQZbugSRoKLE8DCYfzXwXE8mByGt+8KeEhIW7IU6RUrwBEwuyfkbvgNraXvo/engxAQD63ZAsZk4L7IvwPlRQRsHQiiD0mTpsKysRLxBRPVPYGVJFQUpjyh/tGkD8PQV16ClDUS7vqzcN9pgSjrwEs6Ao/xnoxhYUYeqW7FAAoIe7zwOP8g49MwvPpDZH9aDW1mRkRGqJtcX7G3qw4Z+mEYFT9CXTRY85Hy6iIwuwfOhlMIem9ClJLBCSKY34+AoxUhnw1hv4u+3TTtEHgDeI2WDAJ8PVcQDvmQuug1jKrZgfinJ0cAj9w6iQX1S8BlHyxg191tgOxDSdYcbBhdhhEGS0TQ9esZtC0vR8/PteDoJ0APU/FsJE4vgiEtHZ6um7AfPQ7b7t2UH04FF4kTCpG5qaofYIe3C6XN67H9+k4KiQhkHpjEFPC0/Y8zfGtmSTWj2eaWz1ns6Ny4hTWOmcB6avZH1sJR+/baH1mTdSJrX7VuwNmPrn7Jhu6zkn4TS/1hPBt+8EnGKcD3rBLJkjv+bjg9nbDSva/NW4EZqc8Mmjgtp4+jYfGbGLthE3ILiweVOXb7FMqaN6Lh9gkYpFQ8IqUgxELqHh8tqCyaNEnITspDY28zZp5YgNfPvoNWMiR2eO09cJ37HV7bnQF7SliXNK1CUd1cNNjOIsuYi2TJHAFVEzDa4+ghcAK8dO9d9kvINltRP6UGKVpzZJ9IBht8SCJuxkWdc8luTDw2BxdvnUAKARpEPWSFkjFDfBAHFWENHwcdJZokaJEYF9/fMJopBBo79IIeOkGCqE9Xv4OB/i1whK70E8l7Da+BwuTztd8BVNEem1ECLcH7abXlyB6EAn7kz3qRFHKqvFJzGB5ceB4ILFCpC4SD8Hk60Kc1wS67yHMdmkoWgnMFkCE/Dy0BEJPRWPIygn0+jAy/AA0ZYw84IHs7EaR7lchgmYX/GVjhKk+gCrdZyI35OYtQmbsMCcIQ1eNxB3aptdfI3b3ZBFIxbv8uyMEAJE6rKjxQsA1Vl7biq2vfkAc6ZBuU0sv6RWAAnXoDdvS6b2CUyUqAb2GepfihG0RN52GUX9iMi91nYDRkwKwx9aeT4qESjmt9lymTvVg5ZiWapx3uB3r7s21oLiiE89jJQUHcv5zGhaeeRVf1J5G12WnTcH5qLdZaq0h/iPRfImBZvUZOqSKtdI9y0IVZlplYl1eKfOOjkcOecxfQVrYa3Ye+VwOlQSKSF8yDcfoUiEOJm7ZeOI7WofvrHQgwm3rGXPQcLOtXwTB+7P2C47yGd6mY7G7bRzVfogvdbmQ5SWOoSr2NuVEeMn8QbeWr0fXBx5Q+DurROdSjKVHcbgR87Uom0NSQMUGaIWi06RCGJFBeBNXeK8CA1MVvwLKhErxBF9G7l8KvVDNuaVMlW5O3nPh3n5M9O/eQl1Vw/tkISUyDaDRSC4zhI1FKbYs8tUSeH9AWZacT3kA7hmTmIWPNe0heOD+qQsr9HwLey1fRuqwMtkO71C6kNWWRN+GHewhQj+aIbn7bDfVVYyoqRmb1eujzc+9uK0+fsMuNW1u/QHvFWgRDNkjxOdRbxf/n6UPRYEEZXsdVopoR6eWlSF2+GH8JMABj3HBuy+V6lgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 404,
            "name": "Bubanza"
          },
          {
            "id": 405,
            "name": "Bujumbura Mairie"
          },
          {
            "id": 406,
            "name": "Bujumbura Rural"
          },
          {
            "id": 407,
            "name": "Bururi"
          },
          {
            "id": 408,
            "name": "Cankuzo"
          },
          {
            "id": 409,
            "name": "Cibitoke"
          },
          {
            "id": 410,
            "name": "Gitega"
          },
          {
            "id": 411,
            "name": "Karuzi"
          },
          {
            "id": 412,
            "name": "Kayanza"
          },
          {
            "id": 413,
            "name": "Kirundo"
          },
          {
            "id": 414,
            "name": "Makamba"
          },
          {
            "id": 415,
            "name": "Muramvya"
          },
          {
            "id": 416,
            "name": "Muyinga"
          },
          {
            "id": 417,
            "name": "Mwaro"
          },
          {
            "id": 418,
            "name": "Ngozi"
          },
          {
            "id": 419,
            "name": "Rutana"
          },
          {
            "id": 420,
            "name": "Ruyigi"
          }
        ]
      },
      {
        "id": 24,
        "name": "Cambodia",
        "prefixNumber": "+855",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNkJDNTBGMTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNkJDNTBGMjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE2QkM1MEVGMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2QkM1MEYwMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4kgdbAAAAkRJREFUeNrslUtPE2EUhp+5tbTl0gsyA2podCPRjSuNMV42mBAIJSxYse2OFWEhv4S1MTGGJcGNP0D37pDGGu6lNE0HsC3TGc8MNSwobYwRNj2Tk2/mzJnznvf9zpdR4L3HDZjKDVkX+NpM+UxfRda+KxPkcjnDn0ANQ1ZPnk8J3R6Vlwr17R/SfaxlXhuz9fvYnbuL9QQg7nFFykNd/NabJxAyOFzJEWrWUKLhIM87qXSsqZfaAYrXxJPPX6KEQhTX1pDSVAPgDFosRmnlnfBDuELqxWsUTaO4vi7N/MMee02PT00xODtLQ+7L4tb8PEmJDYyPM5zNUmmqkJBYfHpaJO9sWhbeyhpu9dIvNjQxwcjyMsboKLHhYaLRKObCAmoigVutEk6nMcplrLk54jMzRMbGcDY2sMW1q3Hreruu/M5100QfHKS2uYm5uIi5tER9awunUJAEF8OyuLe6GuTXcjm0VCpophNrvd3++tKe7u9ztruL5zhUhYUPqPb2ng9RrYYjbOvb22jJpHzQwJHc450dnGYN72/2+M9Q9YTDDGUyQXHn6IiGbQegrgD6bBVd+vY81EhEJvmERqlEo1LBnJwkKrFqs1ZLjO9w6Rz73casAe5++QrpB3jFg4CNYo5cDN6JfR7rj1/ECnt4bgPVugN7eXaePcXOH7SS1dYPWgz+mYxV6vErjG8/+fXhE66wCeSR4+Mz9GVGpPd81obR1E6Vc24HSqi9/UQePaQsNQ7zH+W4GZe4K93fYhf4f9lvAQYAwe7UEk4oy7oAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 421,
            "name": "Banteay Mean Chey"
          },
          {
            "id": 422,
            "name": "Batdambang"
          },
          {
            "id": 423,
            "name": "Kampong Cham"
          },
          {
            "id": 424,
            "name": "Kampong Chhnang"
          },
          {
            "id": 425,
            "name": "Kampong Spoe"
          },
          {
            "id": 426,
            "name": "Kampong Thum"
          },
          {
            "id": 427,
            "name": "Kampot"
          },
          {
            "id": 428,
            "name": "Kandal"
          },
          {
            "id": 429,
            "name": "Koh Kong"
          },
          {
            "id": 430,
            "name": "Kracheh"
          },
          {
            "id": 431,
            "name": "Mondol Kiri"
          },
          {
            "id": 432,
            "name": "Otdar Mean Chey"
          },
          {
            "id": 433,
            "name": "Pouthisat"
          },
          {
            "id": 434,
            "name": "Preah Vihear"
          },
          {
            "id": 435,
            "name": "Prey Veng"
          },
          {
            "id": 436,
            "name": "Rotanakir"
          },
          {
            "id": 437,
            "name": "Siem Reab"
          },
          {
            "id": 438,
            "name": "Stoeng Treng"
          },
          {
            "id": 439,
            "name": "Svay Rieng"
          },
          {
            "id": 440,
            "name": "Takao"
          },
          {
            "id": 441,
            "name": "Keb"
          },
          {
            "id": 442,
            "name": "Pailin"
          },
          {
            "id": 443,
            "name": "Phnom Penh"
          },
          {
            "id": 444,
            "name": "Preah Seihanu"
          }
        ]
      },
      {
        "id": 25,
        "name": "Cameroon",
        "prefixNumber": "+237",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNkJDNTBGNTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNkJDNTBGNjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE2QkM1MEYzMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2QkM1MEY0MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KAzx3QAAAHJJREFUeNpiZKiKY8ANTneexCNreO49HlkmBpqBUaNHjaaO0X/+Mkpmf5cq/vbnL7FaWIhUp9T4VTT2BwMzA6sQw8NqLmq6+sMxFkb5v4xyfz6dZqayq5nZGJ5k8zL8IyFyiDX6/Ta20cQ3avSQMRogwADcmBpIZYNhTQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 445,
            "name": "Adamaoua"
          },
          {
            "id": 446,
            "name": "Centre"
          },
          {
            "id": 447,
            "name": "Est"
          },
          {
            "id": 448,
            "name": "Extreme-Nord"
          },
          {
            "id": 449,
            "name": "Littoral"
          },
          {
            "id": 450,
            "name": "Nord"
          },
          {
            "id": 451,
            "name": "Nord-Ouest"
          },
          {
            "id": 452,
            "name": "Ouest"
          },
          {
            "id": 453,
            "name": "Sud"
          },
          {
            "id": 454,
            "name": "Sud-Ouest"
          }
        ]
      },
      {
        "id": 26,
        "name": "Canada",
        "prefixNumber": "+1",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFREI0MDA4MjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFREI0MDA4MzE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEQjQwMDgwMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEQjQwMDgxMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IgrEzAAAAaZJREFUeNrEVktqwlAUPVr/TRXqB0QMHXbSqXsQdCRuQbsBR3bmJBtw7A4cuwyLBQNCKdgOVBCpIv7aUx8PiVZtNCo9cHm5yb3v3E/eTWwEPrEOlwtot4FIBGfBbAbE40C3u3HbsZQb/APslj3LZUDTrDMvS80NcbnIToc7MZkY18JO2K8wHu/2mU7JSIS/eRxHRTmfA6USMBjI3gnkckAoBBQKgNd7oYwFEomt6Hl3t99+T8Z20zdyhWZTrvn8tt3jo1wbjd2+R2fc65HpNFksksEgqWlkv0/a7Zs+7TZZqZCKQj49kckk+fr6Z8bmpY5GN5+nUqTTaeg2mwxuPRi327TUfxMLp3x+u6dmks1KX8vErRbp8x1PLKReP4H4+5us1cjb28MJPR6yWiW/vk7sscD7O3l/b06qqqSuH3ScDj/Hi4XceB+pqMpodIHJdXUFPDwAfj+gqsYWTifw9gaEw8D19QUm12xGDgaG/vJCPj8b+nAobc4yudYhMgsEDF3XpaygKNLmQDgsf9Y+PszH4kWIYzFgsTiJeGjJM5M56Q/kR4ABAHxxYPgLzAdZAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 455,
            "name": "Alberta"
          },
          {
            "id": 456,
            "name": "British Columbia"
          },
          {
            "id": 457,
            "name": "Manitoba"
          },
          {
            "id": 458,
            "name": "New Brunswick"
          },
          {
            "id": 459,
            "name": "Newfoundland and Labrador"
          },
          {
            "id": 460,
            "name": "Northwest Territories"
          },
          {
            "id": 461,
            "name": "Nova Scotia"
          },
          {
            "id": 462,
            "name": "Nunavut"
          },
          {
            "id": 463,
            "name": "Ontario"
          },
          {
            "id": 464,
            "name": "Prince Edward Island"
          },
          {
            "id": 465,
            "name": "Quebec"
          },
          {
            "id": 466,
            "name": "Saskatchewan"
          },
          {
            "id": 467,
            "name": "Yukon Territory"
          }
        ]
      },
      {
        "id": 27,
        "name": "Central African Republic",
        "prefixNumber": "+236",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMTREMUVGNzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMTREMUVGODE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNEQxRUY1MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNEQxRUY2MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bmc50gAAAqRJREFUeNrEVktrE1EU/u4jM5OMedJYadBNi2t1Jeqif0FX/QdCURAFQRHE7lz52LiRbtzowr0gqFhXFbQbF4KFQGjEaNsxaZtk5s69nk7SpCjaW1BzhmHOPffx3XPOd07CcGxuBcxMwLAWWj6KfhuMGaxt+EB2AzQHmkMiTh7nG29xv7GIj04uMR0Nm7hWPoE74ycB0i0kS29dJkrMwYXO8lwLF8++huQac0+nAQ6oiJbQ+C9LViYf8khvZDBzZhG3Zl8AKaBay2P+5WnAjfAvRKLZ7oVzjePNUgXvFnw4UmHh/RHgC3k61hqGWtA9u3QRwYYnbOtdBaxvAnHbHtgbyyZx7PiOzh3mOHf3CrTmKE0EZEzB83KDxR03D1l3mQ40g+jZjNKQGcfgUN64XQa2NyYlEJo11jYJAXkpjA62JEIlk81SxCj5EaJ4eJQsZhDMPWDBzetMFqYSmwqWkb96wxRvXzYqII+NsQH+LsvFDN8xFHO757ddcn7ZFaVT+AYD2R8raGQ8yYqUMBTStpHmHCOSkQHLtmrvFOmexerKNCKtGFFokHhGd1damZiyG8Yd2xxrOf1oemflnjtq1N9ml4y4gCnU+rZJeh5+eIx7z56Yymdrh42sBlWxi01/lIYbYr1TJsqVaRT2uih1m2Z3la2sfhVhkLIpp15HKKVL1tds+sTglEdMVgNbTI8nPWT8MkppbgsMGShhDdyJGNrUXMRPRdch21YkEKh9AFfcyJpccTpGTkgW7SIX6dTxYzPuRabicuvOJV8d/2RNLmdSm8bzilhGgXLb68vLpM0crOPSqZoJq9zilD65DrjamlzwCFwaCs3Qr+0wOcIwx4NwXG0LTD83ah9VH/0mIbo/p2ALPMLORW+r/3ek9Z8wE6wfAgwA1dTxt+cD8jYAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 468,
            "name": "Bamingui-Bangoran"
          },
          {
            "id": 469,
            "name": "Bangui"
          },
          {
            "id": 470,
            "name": "Basse-Kotto"
          },
          {
            "id": 471,
            "name": "Haute-Kotto"
          },
          {
            "id": 472,
            "name": "Haut-Mbomou"
          },
          {
            "id": 473,
            "name": "Kemo"
          },
          {
            "id": 474,
            "name": "Lobaye"
          },
          {
            "id": 475,
            "name": "Mambere-Kadei"
          },
          {
            "id": 476,
            "name": "Mbomou"
          },
          {
            "id": 477,
            "name": "Nana-Grebizi"
          },
          {
            "id": 478,
            "name": "Nana-Mambere"
          },
          {
            "id": 479,
            "name": "Ombella-Mpoko"
          },
          {
            "id": 480,
            "name": "Ouaka"
          },
          {
            "id": 481,
            "name": "Ouham"
          },
          {
            "id": 482,
            "name": "Ouham-Pende"
          },
          {
            "id": 483,
            "name": "Sangha-Mbaere"
          },
          {
            "id": 484,
            "name": "Vakaga"
          }
        ]
      },
      {
        "id": 28,
        "name": "Chad",
        "prefixNumber": "+235",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMTREMUVGQjE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMTREMUVGQzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNEQxRUY5MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNEQxRUZBMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OGKo1gAAADBJREFUeNpiZJAoZMAN/m/rxyN72ckEjywTA83AqNGjRo8aPWr0qNGjRtPOaIAAAwAKxQQ+Km3kBAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 485,
            "name": "Batha"
          },
          {
            "id": 486,
            "name": "Biltine"
          },
          {
            "id": 487,
            "name": "Borkou-Ennedi-Tibesti"
          },
          {
            "id": 488,
            "name": "Chari-Baguirmi"
          },
          {
            "id": 489,
            "name": "Gu�ra"
          },
          {
            "id": 490,
            "name": "Kanem"
          },
          {
            "id": 491,
            "name": "Lac"
          },
          {
            "id": 492,
            "name": "Logone Occidental"
          },
          {
            "id": 493,
            "name": "Logone Oriental"
          },
          {
            "id": 494,
            "name": "Mayo-Kebbi"
          },
          {
            "id": 495,
            "name": "Moyen-Chari"
          },
          {
            "id": 496,
            "name": "Ouadda�"
          },
          {
            "id": 497,
            "name": "Salamat"
          },
          {
            "id": 498,
            "name": "Tandjile"
          }
        ]
      },
      {
        "id": 29,
        "name": "Chile",
        "prefixNumber": "+56",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDUwRENDODE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDUwRENDOTE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNEQxRUZEMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNEQxRUZFMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KpHXrgAAAXlJREFUeNrsVrtKA0EUPbOv7CZZNSIqQkCxsrHLR9hY2QuC+A12Pr7DT7ATrAQLbUJKC1tZI2rQVZNsspvMjHd3QxLwgcUONjkwu3fuFGfOfQyXoXJaB7BEq4nv8B4hv+DAO9vA7JSFDODSejAGRurQGdDup7sCHXEJRXCNoRlzdDimHR1Ej7eAA5aGZKMAWvIVEhYR4r6Fnc1l7G2tAvVW6hNqVKeKI4GIcewfVXCwuwbT0OCULByf3AJdrlCxTcqeAlxUn2GZGhiF97LWAPfagGMoVByDCPOU0+3DGoSg9MaFpjDHI+I5G9UbH1fnHhFL5MpFYN4B/FARMSukFikLQpK6aCOOdadHRWWSk5m07GFWMiO2pT9qJ33sJLbpHl1EyAkHMgzIUYQIs4kAu14vf4w9Il8g6UIaiZ1xreQvs+muprEiH38ve4o2p456ueuhL9J9JqF+Ze6fmk4rUZFn3sf/gAnxhFgZjMHI4/44+iiYPmKuTwEGAHthZNcUQvnKAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 499,
            "name": "Aysen"
          },
          {
            "id": 500,
            "name": "Antofagasta"
          },
          {
            "id": 501,
            "name": "Araucania"
          },
          {
            "id": 502,
            "name": "Atacama"
          },
          {
            "id": 503,
            "name": "Bio-Bio"
          },
          {
            "id": 504,
            "name": "Coquimbo"
          },
          {
            "id": 505,
            "name": "O'Higgins"
          },
          {
            "id": 506,
            "name": "Los Lagos"
          },
          {
            "id": 507,
            "name": "Magallanes y la Antartica Chilena"
          },
          {
            "id": 508,
            "name": "Maule"
          },
          {
            "id": 509,
            "name": "Santiago Region Metropolitana"
          },
          {
            "id": 510,
            "name": "Tarapaca"
          },
          {
            "id": 511,
            "name": "Valparaiso"
          }
        ]
      },
      {
        "id": 30,
        "name": "China",
        "prefixNumber": "+86",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDUwRENDQzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDUwRENDRDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NTBEQ0NBMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0NTBEQ0NCMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+63sBgQAAAXhJREFUeNrslL1OwzAQx322k+ZDpaFSVSQqOsCChGBl5wkY4AGYeQF2NkYQAxI7ElM3nqE7TAgJtkKaUtQPkto+zgUxwZCgMvUmW5Z+/t0/OcPDesRmU/x7BZKZIZgB0IIh0wmv7KbR3rtOgJnCaGCYQfYkvA3lbarsUdCW6OAhhKhioRIODuZFkyFDxZxlbfqwsJ9yn43b0mlo1eXxWWB6UD8aIsfkIhCRIYl8aApBRLhy1Xe3NLXRvNbxqZ/eC8siqkAQrEAmFi0qOLhxxZKp7wxp+9oqvbVK7pq9xqmb55OQZL1VhcqmlA9ty0OiDC5c1ExWDQRoezdsEvPa4Qgcllz6RQIhF6dhRm3ZPfdxAsF25jZt/5MO1zHnAfWFDAsF8umS3kpBvsDSO8nLqHu8ejAWIXaOQ16xPdHXzo+eihPu638sW0dKhpfsOXFllJtrhX+bRhoc9QJoQNaMTaNgID8VaYrFKdL8edBn+IbM0XP0P6M/BBgAWIia6c9dDfMAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 512,
            "name": "Anhui"
          },
          {
            "id": 513,
            "name": "Fujian"
          },
          {
            "id": 514,
            "name": "Gansu"
          },
          {
            "id": 515,
            "name": "Guangdong"
          },
          {
            "id": 516,
            "name": "Guizhou"
          },
          {
            "id": 517,
            "name": "Hainan"
          },
          {
            "id": 518,
            "name": "Hebei"
          },
          {
            "id": 519,
            "name": "Heilongjiang"
          },
          {
            "id": 520,
            "name": "Henan"
          },
          {
            "id": 521,
            "name": "Hubei"
          },
          {
            "id": 522,
            "name": "Hunan"
          },
          {
            "id": 523,
            "name": "Jiangsu"
          },
          {
            "id": 524,
            "name": "Jiangxi"
          },
          {
            "id": 525,
            "name": "Jilin"
          },
          {
            "id": 526,
            "name": "Liaoning"
          },
          {
            "id": 527,
            "name": "Qinghai"
          },
          {
            "id": 528,
            "name": "Shaanxi"
          },
          {
            "id": 529,
            "name": "Shandong"
          },
          {
            "id": 530,
            "name": "Shanxi"
          },
          {
            "id": 531,
            "name": "Sichuan"
          },
          {
            "id": 532,
            "name": "Yunnan"
          },
          {
            "id": 533,
            "name": "Zhejiang"
          },
          {
            "id": 534,
            "name": "Guangxi"
          },
          {
            "id": 535,
            "name": "Nei Mongol"
          },
          {
            "id": 536,
            "name": "Ningxia"
          },
          {
            "id": 537,
            "name": "Xinjiang"
          },
          {
            "id": 538,
            "name": "Xizang (Tibet)"
          },
          {
            "id": 539,
            "name": "Beijing"
          },
          {
            "id": 540,
            "name": "Chongqing"
          },
          {
            "id": 541,
            "name": "Shanghai"
          },
          {
            "id": 542,
            "name": "Tianjin"
          }
        ]
      },
      {
        "id": 31,
        "name": "Colombia",
        "prefixNumber": "+57",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNEMzNjBDRjE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNEMzNjBEMDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM0QzM2MENEMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM0QzM2MENFMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jvkEygAAAC9JREFUeNpi/HNRjIE2gImBZmDU6FGjh6PRjAzac0cDZOhH4zlBtdEAGfJGAwQYAIs9A9bKIFNYAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 543,
            "name": "Amazonas"
          },
          {
            "id": 544,
            "name": "Antioquia"
          },
          {
            "id": 545,
            "name": "Arauca"
          },
          {
            "id": 546,
            "name": "Atlantico"
          },
          {
            "id": 547,
            "name": "Bogota District Capital"
          },
          {
            "id": 548,
            "name": "Bolivar"
          },
          {
            "id": 549,
            "name": "Boyaca"
          },
          {
            "id": 550,
            "name": "Caldas"
          },
          {
            "id": 551,
            "name": "Caqueta"
          },
          {
            "id": 552,
            "name": "Casanare"
          },
          {
            "id": 553,
            "name": "Cauca"
          },
          {
            "id": 554,
            "name": "Cesar"
          },
          {
            "id": 555,
            "name": "Choco"
          },
          {
            "id": 556,
            "name": "Cordoba"
          },
          {
            "id": 557,
            "name": "Cundinamarca"
          },
          {
            "id": 558,
            "name": "Guainia"
          },
          {
            "id": 559,
            "name": "Guaviare"
          },
          {
            "id": 560,
            "name": "Huila"
          },
          {
            "id": 561,
            "name": "La Guajira"
          },
          {
            "id": 562,
            "name": "Magdalena"
          },
          {
            "id": 563,
            "name": "Meta"
          },
          {
            "id": 564,
            "name": "Narino"
          },
          {
            "id": 565,
            "name": "Norte de Santander"
          },
          {
            "id": 566,
            "name": "Putumayo"
          },
          {
            "id": 567,
            "name": "Quindio"
          },
          {
            "id": 568,
            "name": "Risaralda"
          },
          {
            "id": 569,
            "name": "San Andres & Providencia"
          },
          {
            "id": 570,
            "name": "Santander"
          },
          {
            "id": 571,
            "name": "Sucre"
          },
          {
            "id": 572,
            "name": "Tolima"
          },
          {
            "id": 573,
            "name": "Valle del Cauca"
          },
          {
            "id": 574,
            "name": "Vaupes"
          },
          {
            "id": 575,
            "name": "Vichada"
          }
        ]
      },
      {
        "id": 32,
        "name": "Comoros",
        "prefixNumber": "+269",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNEMzNjBEMzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNEMzNjBENDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM0QzM2MEQxMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM0QzM2MEQyMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8TQxCAAAA4RJREFUeNq0lV9sFFUYxX8zs9PdbnfaZbstpVIsLkotFBGqxCiaDSSmEm3kpREQsCGYSJRGI7E+akx4UKImvmn6oImJJlBoomIwRMU2NaCgtWpjpEjb3aXun85udzu7szPeneqbL+1u7507M/dOJuee853vu9Lz72+Z7t+oa2v8BuRcUJBAXCvdXJ9GqpuHE26OhdI8c3sGfEXIig1YrOgG5Lt9hbRhw4kxP90jDXwXqYYaEzxiA/YKMjZtiYBqOeOqrrL/cpADLfP0CQWCdQI8k4f8QsXZu0q3EjFFVmhUUkzpcd4Y0/g8Ws8LoSSH2pqgqhZSESG/WTlgSVCRZZnJ+J/c5m/hld1H8Kgqb34zwLPfG1yYC9AXfpHt9z26+IeZpBIxUO7oaun/Y3bCvXNDmI97z7C5eSsfjg7Qe/9+PHKBc78PM/Trt8zm0nS2PoTHJTwglz8U74NK//r6kHvw6HncLje73n2AkeuXqPXUEdGn0VQX1YrNhfEznP/lNJpbY9OajvJdncwmOR5+2Zm89dVJrk5dE6y3CNnX4q3yki8aDsuO5nuIz//NsU+OsG/gSa5N/VBejAM19Q5QqV35a5RGLUjRKpLNZykUC04y26KbwlirtSYafI1cmrjIyMwoe7v7eGn9QZoLPoouaRnmkmRnYgkAWRJAtu0Al57/fXPcb1lOVtV0tKMbOpOvvs6NKwOkrWoMdYmM4/NxxiNjrFvVyr1rtzH001lEzFkXaGUqddNh6hZdEZUspUnEV8lsHTc4eBbCPzYxS0r0OPISpZbaXmvRBZD22XMXnYVtJzcKU0Xoat9DLB1lLpPEdruYXq0QTFrsG1pg75cGPtNmuk7GVIRRlpFdUvjtHfrErd+0PZu7ea/nAxJCgRODx3ls0xN88fMgX+vDeH217B42OXw6R3vCJCryPuMVIbKWby7p4VOduiRJ2nVRQDY03MlTnYdEbOGjy+8QUyKE9LvoOWeya3SBgtAzGpQXGZZZQ6Sdp7brwmBaqXol5pMkczFqanQC7hDmwtM03nhESJwnFrQoqOWx/N9aXRSOrdMM/LUerMzjWLHDqLk2on7h3iYTyZYqfUiU3JEWb7fAaKOYOoCd7hJa5IWpJqkSDKuylT+YXZJ6U7NFHtqJo1hzPYJ6QKzOOMAsOUmWAGxld8zYqV7NznYuslYn/wVcOdBS+0eAAQAC6FhYtEMFCwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 576,
            "name": "Grande Comore (Njazidja)"
          },
          {
            "id": 577,
            "name": "Anjouan (Nzwani)"
          },
          {
            "id": 578,
            "name": "Moheli (Mwali)"
          }
        ]
      },
      {
        "id": 33,
        "name": "Costa Rica",
        "prefixNumber": "+506",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQjc2MENDQjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQjc2MENDQzE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNzYwQ0M5MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCNzYwQ0NBMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Gc94EgAAADRJREFUeNpiZJAuZaANYGKgGRiaRjP++fxlNECQAMslOaPRABk1ejTLEB8go+U13YwGCDAAKSoIL49OOfsAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 579,
            "name": "Alajuela"
          },
          {
            "id": 580,
            "name": "Cartago"
          },
          {
            "id": 581,
            "name": "Guanacaste"
          },
          {
            "id": 582,
            "name": "Heredia"
          },
          {
            "id": 583,
            "name": "Limon"
          },
          {
            "id": 584,
            "name": "Puntarenas"
          },
          {
            "id": 585,
            "name": "San Jose"
          }
        ]
      },
      {
        "id": 34,
        "name": "Croatia",
        "prefixNumber": "+385",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkE2MUNDNjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkE2MUNDNzE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNzYwQ0QxMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCNzYwQ0QyMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JdsChwAAAshJREFUeNrEVc1rE0EU/83sbr5smtgmbalpTQ+2IehFrSCipE1BRD0qtAUVBG+tIK0H/wK9iQieBPEmiqkIiieLbRWjtaVSP2mRSDCxdTdpmmSz2Q93Nz14ywQPfTDL23lv3szvN2/eI5+C7RvYBuHN4WV1NggBryrQKQe+UrHnVKcTVNeg8g4Qw2DemLI4KTyPFklEz+8MFE8TiCCAd7fCKfjRRVW0NjvQbdp86znzAJQZcV0J5EXMHRkC5/eivLgGyRCwfDUG2UUgTywjJ1FcOC/Cly2gb3oBRa/7/xETVYW3xGHq0gmMP5zEIh9CIS1iPpjCVFRBauwHSodFXJ+YxIPJcyBVB7iqUh+xspat6ySb48DdBF6NjOH1yRj6b71Fz7cOeLKtiHwV0XmqD3ShgsjNeyho61BzZj7UA5QaHqnjQ+Asb6Lsa8NTeNAmZhEOtiMwMwNPtYiN3jiWzXvlQiqOShLKWhWqy10/0YwGRDLdC5E9tr4aDhtftpYXjw8ZK42FMoj1YXpKmoaNxwlUf2WwuTAP/2AcxOGA9PwZmvbug9DVBd/ZMyZBhPFtMopWKNTQJd8Zs+YyNZe3/+dMPZ9I2LpeLjMjboifj5Q3Vgfjtv79YL/xuaPT1lPDo8aShUHXmWPx7EVOh3cgBq57N4rJJFzRKLRQyNa5QADNx2Ko5TI71TLjsHhUjMWk8fKfG5q2aH/yyLBtNR+meGT44v0sG15e85TT7hv7qT94qBelF7PQZBne00OoLK/g8lwpn3P1lCipcizxTF5GGSu7RaGEyK4w7ry/je54FEinIa7mMT5wDW+WPpj2IOqXjq1otOUKe0vhBOh/SiZ8GR1tTgiU4GfG6lICaNBsclqF+Y75hpqoWZXoTgf0CkFGdtfe7A4C6hJMm8KeWA1vXMtGUIe1rLrFAm/PNSoU2yTW0QvbsfFfAQYAfYmMzgM7drcAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 586,
            "name": "Bjelovarsko-Bilogorska"
          },
          {
            "id": 587,
            "name": "Brodsko-Posavska"
          },
          {
            "id": 588,
            "name": "Dubrovacko-Neretvanska"
          },
          {
            "id": 589,
            "name": "Istarska"
          },
          {
            "id": 590,
            "name": "Karlovacka"
          },
          {
            "id": 591,
            "name": "Koprivnicko-Krizevacka"
          },
          {
            "id": 592,
            "name": "Krapinsko-Zagorska"
          },
          {
            "id": 593,
            "name": "Licko-Senjska"
          },
          {
            "id": 594,
            "name": "Medimurska"
          },
          {
            "id": 595,
            "name": "Osjecko-Baranjska"
          },
          {
            "id": 596,
            "name": "Pozesko-Slavonska"
          },
          {
            "id": 597,
            "name": "Primorsko-Goranska"
          },
          {
            "id": 598,
            "name": "Sibensko-Kninska"
          },
          {
            "id": 599,
            "name": "Sisacko-Moslavacka"
          },
          {
            "id": 600,
            "name": "Splitsko-Dalmatinska"
          },
          {
            "id": 601,
            "name": "Varazdinska"
          },
          {
            "id": 602,
            "name": "Viroviticko-Podravska"
          },
          {
            "id": 603,
            "name": "Vukovarsko-Srijemska"
          },
          {
            "id": 604,
            "name": "Zadarska"
          },
          {
            "id": 605,
            "name": "Zagreb"
          },
          {
            "id": 606,
            "name": "Zagrebacka"
          }
        ]
      },
      {
        "id": 35,
        "name": "Cuba",
        "prefixNumber": "+53",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkE2MUNDQTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkE2MUNDQjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQTYxQ0M4MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCQTYxQ0M5MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9/ZNdQAAAztJREFUeNq8ll9oHFUUxn+zM7OT3c3spMlus8kS3RL/RU1JokglJrRaFH3pg2+C+CAICq0PRqigVYrStFhEfBEVXwQRn0RQEESsT2KqjUhrpaR/NFmbpNlsdjO7m/l3PZsWRXxK2PXCMHDnzj33nO/7zne19/v3LxxL77MvWrsgrEK0DsRo99Dcrj61FOvgw877OG4/gGf0QLACymvrAbSZzHClO6rbhXCVH8w8b6cn+CQ1JjHjsPon+EF7Ap/J3FVRYEeS3UBYwYlqfGHdxpv2OBdGHyTyqgSLy6hItTSwsRldHp2Ied2mqHfyUGOOkbVzVO+tkp9+EWdoF76sCV2vtRnL2/5nRiOS7DpUgFG6gjVQIDf1HNahgy3N+D/s0bQYqlymUfdp9N3J8kKF088f4peh+yl9+lmLM9Y0G6WI6g18d5HuRw/gC67rP/2I6WSIWQkaSxdR1Ol55AD51w5zaeQeUrJBd7ghUGnbDBxFNrqOmeuldu5ndp+fYfXzr/jj6Ksk+4fwrhaJmZYQLSAoz+HoXXw9OMEJZx9XzF46RH6m8rckv+usDiM7qJXJPvkEuReepeOOQZGxx9o3p5h/6Q0av81hpJwb4Ogo1yXrXmNZS/BRapS3RIIQv6H9LWCsGTpGMk3xg5O4M2eunygeZ/HYu6zPzkjQrn/9pGLCAymvoxqkow2Z2KacmvhqcgYzuRMVBBSPniQ5Oow1eBPad80lsrOQTiDBX7qAQ5Jvb53geHovZ60BKfWqlLqZbWLrclK+j5HZiZF1KH//JVaiQHJsmNrZ8+jxBN7SvGi5xI49+7n59Zf5fXxy89RZIVds2+Rq6jimoaQ9hmtVjJ4dRG5NMmyCoVGvzZHK303+yBTZZ55qUwOREUlZLRViXruMmcnSe/BpkkcOyxeztS3zb9JIyZo8KXgl1hsuK489Tv8rUxh7douCxbRq/iYfWmoSoSCVEy/uFU8+FS8w3TnO7MjDssLDL15FJNdadzotttipNuxbghK/GhneEVd6T7wZXfpSWWzR89tji2td/aqu6dIIxpi2J1mJ90lNy1LSensvAh/nJhdOpPfas4nbhVXC5LDyv1x9/hJgAIwQQwS2sEaJAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 607,
            "name": "Camaguey"
          },
          {
            "id": 608,
            "name": "Ciego de Avila"
          },
          {
            "id": 609,
            "name": "Cienfuegos"
          },
          {
            "id": 610,
            "name": "Ciudad de La Habana"
          },
          {
            "id": 611,
            "name": "Granma"
          },
          {
            "id": 612,
            "name": "Guantanamo"
          },
          {
            "id": 613,
            "name": "Holguin"
          },
          {
            "id": 614,
            "name": "Isla de la Juventud"
          },
          {
            "id": 615,
            "name": "La Habana"
          },
          {
            "id": 616,
            "name": "Las Tunas"
          },
          {
            "id": 617,
            "name": "Matanzas"
          },
          {
            "id": 618,
            "name": "Pinar del Rio"
          },
          {
            "id": 619,
            "name": "Sancti Spiritus"
          },
          {
            "id": 620,
            "name": "Santiago de Cuba"
          },
          {
            "id": 621,
            "name": "Villa Clara"
          }
        ]
      },
      {
        "id": 36,
        "name": "Cyprus",
        "prefixNumber": "+537",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkE2MUNDRTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkE2MUNDRjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQTYxQ0NDMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCQTYxQ0NEMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+efiilAAAAf5JREFUeNrslU1rE1EUhp+ZZNJJMGm0Wj9IpVWsSsGvpQa6qRR/gBsRN+IPcONG0JXgtgsFFQS17lwU/AALoqApQQwUxVJbBTW2jK10Mp0kk5kkc71pcCFS00JiNp7N5R7uPe9733PuOYoQYpk2mCKBRTuAVdpkLQP27XmEa/87YOEsUXx6nvLsI7nxmwi8WjBRwUldxx49gRII0XHoLIreuWqY4PrLUaX08grVnEMw0Sepa1TnMpQyD1AjcTacvEFwZ7K5VV3JvkHdmMAa6cN7V0LtrkWQj83LRYct1zzp0Jr0naoe1cX3uJk7FJ6MENgekgy8epL8erJEQboMiAwNET31GKTUjayx1GoQ5/ll8mMP0fprIB5Kx6+8QnlGAg5LwNPn8IvGXwtq3VJXshOYV48hypJHpK6mKMrLkra2Z5DomXuosZ7WdC7xZRxl4jZFO4uX/0Y4eQl18160XcnWtkz5WGpNvWtFgpxMUvyPMwu2RUyPoGta8zqXYf7gwuhNbqVTzPu/gxqWyd30Cy6O3cdYNtcUb83/eFsszpFED+mZSUxrgQOJXoYHDjM+Ncnrz7N8t3Irvh2dm5o/nWpHn02/JfVpmt6urQz2D/Dq4xQfjDmO7t7H8f0HCQYCrRuLX5cWCWshonqYgutiu44k0v1/HjcsLrsdwD8FGACqhNA6kzA7CgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 622,
            "name": "Famagusta"
          },
          {
            "id": 623,
            "name": "Kyrenia"
          },
          {
            "id": 624,
            "name": "Larnaca"
          },
          {
            "id": 625,
            "name": "Limassol"
          },
          {
            "id": 626,
            "name": "Nicosia"
          },
          {
            "id": 627,
            "name": "Paphos"
          }
        ]
      },
      {
        "id": 37,
        "name": "Czech Republic",
        "prefixNumber": "+420",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzhFNzJCMTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzhFNzJCMjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQTYxQ0QwMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3OEU3MkIwMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jrdRWwAAAjdJREFUeNq8lk1o02AYx/95k2aStKDr1s1VaPUgKKs7iuBFbSfDqzsJwtSriFdBp3VszsNwoHgR3MmL280Vdd51qOjBdrCt9aCttVK3Np1NszbxSVhxDFf2kfQJCSFf//f3/p4Xwl0YfJZ+cqO/a48oKGhOeWjPAIErRV/4pvH6/YLRxCqy1qMHkPu5jN7zoxgYmURFqzYFmxlVHV6/F/LBDkw8isHfdwczHxadDzYPek1Hi8ij9VgQ+V8F9Pbfx6WRKagO0rP6iWHQXq2hzaQP+vD04QsEzkXxxiF6tvFCrU7fE7TcR0z3w5PQVmvOBv+jX3N/iNw/jqGr7zao850Nrpfl3kX03QHkcwWcJfeX702hsrp799y+yK3i2qJuPEKeQVU1rMynwfUcwcToAC6GfEBFtWZom6UIW36UGo+JInDiOIxUEomTp1Ho0JDnRNS2Hwxha4tdx5LogS7KiKQ/Yjwzg8Plb5hbMF/naLM5mNEcaoyHIrVDqhRwN/Ec17+/xQovYm6vHzwNiNuhY6EhZQtRumScyX7Gg+RLdJey+Cp58YcJEOj+bkr4PyWDInfCoy4hOj+Nq5lZlJkLcXenNSB+B93UMNj86G9yaYgSwtlPGEu+Qqj0gyjbiNJlTa1dJWyklNRlDMXJZfodSuTyi3u/FWhnqBW8vmPD5HKMXIbIZYpclm1wuWlwXm6Hu1JENDGNa+lZa0rtdLlp8KlcXBlfjHnIpZIilyYl7xDlul8f5a8AAwAi6Fw0Cqzr+gAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 628,
            "name": "Jihocesky Kraj"
          },
          {
            "id": 629,
            "name": "Jihomoravsky Kraj"
          },
          {
            "id": 630,
            "name": "Karlovarsky Kraj"
          },
          {
            "id": 631,
            "name": "Kralovehradecky Kraj"
          },
          {
            "id": 632,
            "name": "Liberecky Kraj"
          },
          {
            "id": 633,
            "name": "Moravskoslezsky Kraj"
          },
          {
            "id": 634,
            "name": "Olomoucky Kraj"
          },
          {
            "id": 635,
            "name": "Pardubicky Kraj"
          },
          {
            "id": 636,
            "name": "Plzensky Kraj"
          },
          {
            "id": 637,
            "name": "Praha"
          },
          {
            "id": 638,
            "name": "Stredocesky Kraj"
          },
          {
            "id": 639,
            "name": "Ustecky Kraj"
          },
          {
            "id": 640,
            "name": "Vysocina"
          },
          {
            "id": 641,
            "name": "Zlinsky Kraj"
          }
        ]
      },
      {
        "id": 38,
        "name": "Denmark",
        "prefixNumber": "+45",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzhFNzJCNTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzhFNzJCNjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OEU3MkIzMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3OEU3MkI0MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YilnMAAAAFRJREFUeNpivMBj/J+BSKD/+cxnEH2R14SXgULAQqJ6ii2EASaGAQKjFo9aPPwsZvwPBCPKxyzA4o9oxcAikwFaZI4mrlGLRy0euhZ/hmKKAUCAAQC4DxA6JMoNqgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 642,
            "name": "Arhus"
          },
          {
            "id": 643,
            "name": "Bornholm"
          },
          {
            "id": 644,
            "name": "Frederiksberg"
          },
          {
            "id": 645,
            "name": "Frederiksborg"
          },
          {
            "id": 646,
            "name": "Fyn"
          },
          {
            "id": 647,
            "name": "Kobenhavn"
          },
          {
            "id": 648,
            "name": "Kobenhavns"
          },
          {
            "id": 649,
            "name": "Nordjylland"
          },
          {
            "id": 650,
            "name": "Ribe"
          },
          {
            "id": 651,
            "name": "Ringkobing"
          },
          {
            "id": 652,
            "name": "Roskilde"
          },
          {
            "id": 653,
            "name": "Sonderjylland"
          },
          {
            "id": 654,
            "name": "Storstrom"
          },
          {
            "id": 655,
            "name": "Vejle"
          },
          {
            "id": 656,
            "name": "Vestsjalland"
          },
          {
            "id": 657,
            "name": "Viborg"
          }
        ]
      },
      {
        "id": 39,
        "name": "Djibouti",
        "prefixNumber": "+253",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzhFNzJCOTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzhFNzJCQTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OEU3MkI3MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3OEU3MkI4MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LIWFKAAAAkdJREFUeNq0ls9PE0EYhp/dbtllbUtLREmtCSYmvfAncdeoJy8aDImejB6MHDxhTJADGBIDJCaSeICEeBAL2ipGEBCbVqgabBf6g3Z3mMXUgyi04L7JHibZmed7v3lnMsrSj0rmUSIfncuWrA5TI9KqYgu8VFB+WUUIUXAHU6tFhpN50vka0aCG6Ve8LMD6DXZHlZrg6YLF2AeLUtUhFvLjU8ERHoPrym3VGHyTZ1p2wfSrnA74EBIuvAbXlVyvMCQLSG2UORXQCBs+7P9j/2BwXZNL2zxJFdiQnTgT0tA15bjtbwzsqlgVjCQLPFu09qBuABWFvS3wFFxXplBlcD7PzFqJNkPlpHmk/f8D7K7g2piehs5OiMf/OXM2U+KxLGB1s0ZXKIzh0+Txc47heHwcenqguxtGRyEWO3CFhTT0z2VF2SkKQ9MagcoDSn7/n7oOW1uws3Mo1FVCGWC0+kDYjiJMoTfqWOx3vLIik1SElpZfYNP868znX6e48voGy7mX6KEOWjRDhs7xLlyft9NclMDJT0PgDxAJnkOV2RDNxatxcNmucD11h/7UPahaBNvi6KrWjMvmwQPLI1ybv8nmz48YoS4C/pAE2t5dIDPfZrmU6CWVfoFqdhAxozIWdrNtbRycLeW4PNfH2OJDGX6dcPA88pY8alsPB9ekm1vv73P77V3sco5AOE6rBNvHa+vB4OEvE1xN9LH+PSmPx1mCejuOU/PuITC/+S5zYbY3+mptwlKMdiInYiiypQLPnh97T59dAQYAfWNBGb6d818AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 658,
            "name": "Ali Sabih"
          },
          {
            "id": 659,
            "name": "Dikhil"
          },
          {
            "id": 660,
            "name": "Djibouti"
          },
          {
            "id": 661,
            "name": "Obock"
          },
          {
            "id": 662,
            "name": "Tadjoura"
          }
        ]
      },
      {
        "id": 40,
        "name": "Dominica",
        "prefixNumber": "+1767",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5QkY3MDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUE5QkY3MTE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQTlCRjZFMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQTlCRjZGMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yQnKJAAAAtZJREFUeNrElUtIVGEUx3/3znXGmbIZUxAdH4mJaWkUYdCDoCijFj2IgjYt2gQVREURWVCWPSAoqE27iIqKatE7aBEmUYFEadlz0pSkdLRGZ5xx5n6daVp774DkgbO49xzO//v/v/Odo3FuyW/sWngiB6vaODTnEwUV0GdWEf3Vxtn3t9l+bQfklNouZYhnMQ6mM06WPrASz4CQBjEt9UtT6QMbtjPNJKhOqHgEsqEwmrzjFGKoPE/iI6kcfSyBkwVd4vkxqi9LSzwrpXGCVxhLYHk9lQscUJEPQ5ITsQeucXK1siXvlBH2XQtS+0hREvIw6B/CzBrE1d5Lt5HJ57pS9m7yQIczlW/F+GjNa2vQEvBe9bD1RhaXppj05/WQHS3H1+4lkP+KaKaTPXdjTKzqY2Cz0A78pTQ6Y/Xd4nzJy8gVX1nE8dYy9nRG0B1h1q+voK9rOo+bmiQYpKHEywF/JzwOpOSOWjBODoJRCcv1uaXIxXg2NX5F0IgxKZ7L1DfVXF/TzOvWCNMGDOrCCd4/m8za7ABBUVyLWwD3mdNGz0iAU9fxxHTyeoeJa7qoOMDSd5kcW5XHhdpvnHqYhanHGZHkfn0GwWjcUmqUXdtwWNX7fWqYeUpRpe7MnK24OF/tXDxLvueqI8U5Kla3y3Y54/znB9Yt6NZx1Zo0XPVyT+Tuz3CyzB3gVrODl/3F3CvS2d85gSubDH73PEIbMm08p4Yy6+Z3im6FOZy+4KboaYTcsIdEgcmwyOvv+sJHRwY9iyrZtln2TfdPaSxlA/jcYmVrgLgF3Ovi0pMuNjaFufnTJ08iwZrChdxf5GTFrGYBlK4alHIOW7Naw9J1LfVEOlw83/ILXn6iMdjC7l75+eIMLSfWwZfu1ORy2KgnbqS1TpSJ76tsiCJ46zaJmKnZ6PvwQ2JGWivHSHutJA88LGCiaOLfJSntf6zFMbIk49B4AP8RYABEcEyuCxX37QAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 663,
            "name": "Saint Andrew"
          },
          {
            "id": 664,
            "name": "Saint David"
          },
          {
            "id": 665,
            "name": "Saint George"
          },
          {
            "id": 666,
            "name": "Saint John"
          },
          {
            "id": 667,
            "name": "Saint Joseph"
          },
          {
            "id": 668,
            "name": "Saint Luke"
          },
          {
            "id": 669,
            "name": "Saint Mark"
          },
          {
            "id": 670,
            "name": "Saint Patrick"
          },
          {
            "id": 671,
            "name": "Saint Paul"
          },
          {
            "id": 672,
            "name": "Saint Peter"
          }
        ]
      },
      {
        "id": 41,
        "name": "Dominican Republic",
        "prefixNumber": "+1849",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5QkY3NDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUE5QkY3NTE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQTlCRjcyMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQTlCRjczMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bJEP0QAAAXtJREFUeNrslM8rw2Ecx1/f72ZjG7MNw3yxidlhuRE5qFH8D1yknJUiBwc5OTiSUi6O7i4yNxxGEYWy/GhfTZvJj8nM15oc5PJMmcve9dSnp3fP63me9/N5JPzDGvCAiMIq/YN9rC+OfZu+HJ4iurKEsdyDoEr1XwV5lsw/qQDOm/TcxMXdj7e83302QPIlSfJdw24ykX6655U4csIsDm7p8AmbL2+cNPqa2NkOcXB1jYU0VR43fo8Xu7MTWakRXkvSMsrlimKJOIGxGVprXUw83zF3dMjI8jyB+ua/zfj0LUa1IjEQTxKVKth1QSiy/4uMc9SbycqFekzViZk1o5WwdojX2fD34LZUCaNKO6pRxa+TGaeX7uLGnMHSWc+QcMapSBRLoAtlYZonLQ2ZYZYNTM6usry5h9tpEz/x/daGsPkFFb3bka3Nki6zbV22Pg9HiAWDxGyKONhQ7hI2a4kURRbHzxdqLwNTNdRVFr7MAvhHHz/kmVv6IcAA7rhthUQGtAoAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 673,
            "name": "Azua"
          },
          {
            "id": 674,
            "name": "Baoruco"
          },
          {
            "id": 675,
            "name": "Barahona"
          },
          {
            "id": 676,
            "name": "Dajabon"
          },
          {
            "id": 677,
            "name": "Distrito Nacional"
          },
          {
            "id": 678,
            "name": "Duarte"
          },
          {
            "id": 679,
            "name": "Elias Pina"
          },
          {
            "id": 680,
            "name": "El Seibo"
          },
          {
            "id": 681,
            "name": "Espaillat"
          },
          {
            "id": 682,
            "name": "Hato Mayor"
          },
          {
            "id": 683,
            "name": "Independencia"
          },
          {
            "id": 684,
            "name": "La Altagracia"
          },
          {
            "id": 685,
            "name": "La Romana"
          },
          {
            "id": 686,
            "name": "La Vega"
          },
          {
            "id": 687,
            "name": "Maria Trinidad Sanchez"
          },
          {
            "id": 688,
            "name": "Monsenor Nouel"
          },
          {
            "id": 689,
            "name": "Monte Cristi"
          },
          {
            "id": 690,
            "name": "Monte Plata"
          },
          {
            "id": 691,
            "name": "Pedernales"
          },
          {
            "id": 692,
            "name": "Peravia"
          },
          {
            "id": 693,
            "name": "Puerto Plata"
          },
          {
            "id": 694,
            "name": "Salcedo"
          },
          {
            "id": 695,
            "name": "Samana"
          },
          {
            "id": 696,
            "name": "Sanchez Ramirez"
          },
          {
            "id": 697,
            "name": "San Cristobal"
          },
          {
            "id": 698,
            "name": "San Jose de Ocoa"
          },
          {
            "id": 699,
            "name": "San Juan"
          },
          {
            "id": 700,
            "name": "San Pedro de Macoris"
          },
          {
            "id": 701,
            "name": "Santiago"
          },
          {
            "id": 702,
            "name": "Santiago Rodriguez"
          },
          {
            "id": 703,
            "name": "Santo Domingo"
          },
          {
            "id": 704,
            "name": "Valverde"
          }
        ]
      },
      {
        "id": 42,
        "name": "Ecuador",
        "prefixNumber": "+593",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5QkY3ODE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkM4MTQwQzE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQTlCRjc2MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQTlCRjc3MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oj8tnwAAAr1JREFUeNrUlU9IFGEYxn/fzOy66667urrrCusfyOgSWoc0KihLOllEXQsiiIgOdTG6dK1OdalTBxEpI+pi9IfoYBjZIaICpTAzJF1bXbdVd51d50+fa+dmRWHpY2aYj2+G533e93neVxifIguUYGnyrigFsEKJlraur21Q3fLhMkFX5VYgPPLdUDBzArndZMb2X9CIBR6JsxwAv4WotLB0nzyQV9Rew7U3EViReVEDWZ49Ndh/KkbkYB1PXtbS06ehtijsOB6iv99AqciiuFaRnakLqep/xiiEXSChqyEGXsUQ+TGGRxKk9ZPUhBYQ+kN2NjeQczVy4nASnzqLsOQ/trJRxjK9wmQq2UFTSKN5e5zWPStYK3GOtOe5cdWLHpqkOawxs9iJbSmSr+XM2B4LOFfFb6D/CPFx3OLaA6+MpYuGA9W4ZHF/vR/n7WQvPecjdLTKFNekYVl1VvXygs+5xrrANH4TqA3hmt5G+74Y0WPnuPl8Hl/mBZ3lcaL1X9GzM4hUECtfhJ2arlwsQtVu1KUMvZcesaXKJpEYwj8ZJpZapFx8ptHv5fucn0O3L2O6gjLSnDNwYipShK7dMG3ijSdpbGtl4p6XvsoBaqvc1A8ZZI66iWTSxEfrISz9JooAJpApAliHXBXj71a40D3M45k25r99IRCupHrrCme6Jhh5Iz1XUQbB1dZvOIuLvXedxSWbU1m1j2B6lLP+16R2ecgOZqVtBN4uP3UfdO783M1idQuZZGbNxg5WFp62W47AwrSkZ20WTB/p8Uqo0+mevo9mG1yPnZZl8OJrmiNaniE+q2Apzi4VgzUtdlEdUzYFS9pH1WyMvErQWCqcpTU/mtvANiWYbcqGIwpNx4my1phPrW+sGGuhLLs8hYDCZkJKQBSiK8AVOSi0lOrd0HjLqeX/3zxeLAXwHwEGAOXk99HjIQVFAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 705,
            "name": "Azuay"
          },
          {
            "id": 706,
            "name": "Bolivar"
          },
          {
            "id": 707,
            "name": "Canar"
          },
          {
            "id": 708,
            "name": "Carchi"
          },
          {
            "id": 709,
            "name": "Chimborazo"
          },
          {
            "id": 710,
            "name": "Cotopaxi"
          },
          {
            "id": 711,
            "name": "El Oro"
          },
          {
            "id": 712,
            "name": "Esmeraldas"
          },
          {
            "id": 713,
            "name": "Galapagos"
          },
          {
            "id": 714,
            "name": "Guayas"
          },
          {
            "id": 715,
            "name": "Imbabura"
          },
          {
            "id": 716,
            "name": "Loja"
          },
          {
            "id": 717,
            "name": "Los Rios"
          },
          {
            "id": 718,
            "name": "Manabi"
          },
          {
            "id": 719,
            "name": "Morona-Santiago"
          },
          {
            "id": 720,
            "name": "Napo"
          },
          {
            "id": 721,
            "name": "Orellana"
          },
          {
            "id": 722,
            "name": "Pastaza"
          },
          {
            "id": 723,
            "name": "Pichincha"
          },
          {
            "id": 724,
            "name": "Sucumbios"
          },
          {
            "id": 725,
            "name": "Tungurahua"
          },
          {
            "id": 726,
            "name": "Zamora-Chinchipe"
          }
        ]
      },
      {
        "id": 43,
        "name": "Egypt",
        "prefixNumber": "+20",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QkM4MTQwRjE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkM4MTQxMDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQzgxNDBEMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCQzgxNDBFMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4WJtkQAAAL5JREFUeNpiPCeo9p9hAAATwwCBUYtHLaYZYPz///9HIM0HxCRmqw9AzALEPCTbCcSfWKAMBiQaP/j1iIHhxwkGBg5NiFt/3GRgYDcEYhWSLGchOYz+/WD4eyucgVEsg4GBmZvh//NeBiati0S6GgFItvj/v+9AXXwMjBwaQHczMfxn5gUK/iTZ/SRbzPjvEwOzZBGQ8Qsc1MzSpcBQ+EivxPUDiK9BtegAMTvJiYuR9NQ8WoCMWjxqMXYAEGAAUBIvbfhWcKoAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 727,
            "name": "Ad Daqahliyah"
          },
          {
            "id": 728,
            "name": "Al Bahr al Ahmar"
          },
          {
            "id": 729,
            "name": "Al Buhayrah"
          },
          {
            "id": 730,
            "name": "Al Fayyum"
          },
          {
            "id": 731,
            "name": "Al Gharbiyah"
          },
          {
            "id": 732,
            "name": "Al Iskandariyah"
          },
          {
            "id": 733,
            "name": "Al Isma'iliyah"
          },
          {
            "id": 734,
            "name": "Al Jizah"
          },
          {
            "id": 735,
            "name": "Al Minufiyah"
          },
          {
            "id": 736,
            "name": "Al Minya"
          },
          {
            "id": 737,
            "name": "Al Qahirah"
          },
          {
            "id": 738,
            "name": "Al Qalyubiyah"
          },
          {
            "id": 739,
            "name": "Al Wadi al Jadid"
          },
          {
            "id": 740,
            "name": "Ash Sharqiyah"
          },
          {
            "id": 741,
            "name": "As Suways"
          },
          {
            "id": 742,
            "name": "Aswan"
          },
          {
            "id": 743,
            "name": "Asyut"
          },
          {
            "id": 744,
            "name": "Bani Suwayf"
          },
          {
            "id": 745,
            "name": "Bur Sa'id"
          },
          {
            "id": 746,
            "name": "Dumyat"
          },
          {
            "id": 747,
            "name": "Janub Sina'"
          },
          {
            "id": 748,
            "name": "Kafr ash Shaykh"
          },
          {
            "id": 749,
            "name": "Matruh"
          },
          {
            "id": 750,
            "name": "Qina"
          },
          {
            "id": 751,
            "name": "Shamal Sina'"
          },
          {
            "id": 752,
            "name": "Suhaj"
          }
        ]
      },
      {
        "id": 44,
        "name": "El Salvador",
        "prefixNumber": "+503",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QkM4MTQxMzE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkM4MTQxNDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQzgxNDExMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCQzgxNDEyMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/anEfAAAALNJREFUeNpiZFCYz0AbwMRAMzBqNP2MZvz//z+NjGYhWuU3Bob3YPV8DAycVHT1j2ePTlx/LG8ox3Tt6TdFydfS8voMDPxUCOt/f59VzLxy+ehCIbbpR46eqph2+O+fO9QJkP8MrB+/Xnom8H7FZd4bP39/+gkMHGHqpBBmZvHsENlzL0RW7bJ5/uZVdog8M4sMFVPInwfPNp299N1Ij1dRypOBgXUgEx/jaMk3ajReABBgAAmeREpJl5cdAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 753,
            "name": "Ahuachapan"
          },
          {
            "id": 754,
            "name": "Cabanas"
          },
          {
            "id": 755,
            "name": "Chalatenango"
          },
          {
            "id": 756,
            "name": "Cuscatlan"
          },
          {
            "id": 757,
            "name": "La Libertad"
          },
          {
            "id": 758,
            "name": "La Paz"
          },
          {
            "id": 759,
            "name": "La Union"
          },
          {
            "id": 760,
            "name": "Morazan"
          },
          {
            "id": 761,
            "name": "San Miguel"
          },
          {
            "id": 762,
            "name": "San Salvador"
          },
          {
            "id": 763,
            "name": "Santa Ana"
          },
          {
            "id": 764,
            "name": "San Vicente"
          },
          {
            "id": 765,
            "name": "Sonsonate"
          },
          {
            "id": 766,
            "name": "Usulutan"
          }
        ]
      },
      {
        "id": 45,
        "name": "Equatorial Guinea",
        "prefixNumber": "+240",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkMzOEFFNDE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkMzOEFFNTE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQzgxNDE1MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCQzgxNDE2MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Tw5JAwAAAphJREFUeNq8lktPE1EUx/935jKlb0BCCYagEGJCdKE7ExMXfgE/gHFlaFwoK9mwUcQmbFyYmlA3xrgw0W9AQkI0xhijRNGqUay1D7AIQkceHTpzPXdaISMPKdje5Exm7pw7v/M/95yZYR2RcOZoe6xtuQC9aAKModrDT5blycwteYJj7TH/UgGoFVyB9hXJdBSTqTC8LoCrgBBVB0OBmgdcXwh+G5Pp2sEVCKLY8CkkU1J5b03g3D6uw0vKFQXoOXgHn2eBJYOclL9WUQ0oZDIuOzixV7ADnkAicZNgbtF3+onI6QewsGxCtUkW+bjBeT2stax9zbQ2WMUihPmLAlJ3l2XA4o4pG75I8BV8+jDAxMlGXDvjdIEoQCy+BuPNFLYPMCgAbzet81YimCmbpiTcRT3lSeNSdIJFxuZYKbllYy42/0NjV0cfsLMP+9irqRQjqNNnZ9sGLAdlFG7yaVEwEI2j99E3x+281oRnb8fx9N0o5uo8+yiubXeD4KbASsFyTHsCAVxuPQ9f8QKOd5yCYRrQVK3CdtpyB8gMgs0YuHLxCO6fO7R+KzOdRTz+EaveNWS1WUzE32BmOvcfFMvKNWmfeSv6+1vE8AlnpTaFWhGq96Cxuwsq56ij3mv2VVZYksI3QTntWX0bwu+jYvjuS8u414iFpaLdTpZlQXNp6AkE8T2Xox4WCIVC0PN5zBYK1P/KbsCqs50kVBZKsBPhFxGMjA2y+TzUuS3SIue0MiNhbZRqBUPlG0rdBO1C7/MhjIxfR97vh94cgFuYOz5B2/Mr8096GzoJegMxCfX58dMVgPoP6P4+ElJpg1QaIeggKfVVHVoCBw+XlRLUR1AtWHWonWpSqsceD/kpvXotlJZ/ffTfAgwAojL4tK6cs5UAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 767,
            "name": "Annobon"
          },
          {
            "id": 768,
            "name": "Bioko Norte"
          },
          {
            "id": 769,
            "name": "Bioko Sur"
          },
          {
            "id": 770,
            "name": "Centro Sur"
          },
          {
            "id": 771,
            "name": "Kie-Ntem"
          },
          {
            "id": 772,
            "name": "Litoral"
          },
          {
            "id": 773,
            "name": "Wele-Nzas"
          }
        ]
      },
      {
        "id": 46,
        "name": "Eritrea",
        "prefixNumber": "+291",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkMzOEFFODE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkMzOEFFOTE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQzM4QUU2MTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGQzM4QUU3MTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Jln83QAABGBJREFUeNqcVstvG0Uc/mb26XWcOHHjhDSv5l2prcojFKkHkHpCnLhwiTgjxAWJG/wBiBtcKnFBHAD1wAFRKAcEQhyQEDRNLYU0TkAN0KaJm4cdr73enZ3lN7tpsfOGlVZ+jX/fN99jbDZ3evre99NhZm4ixK3xEIuDEn5nBHAAOwxtFQYrwJEXa34R4dhLrWcCz0VajBJhS5e4Myxxc5JITIWYJTKFUQmZjZKBVYYU3TYRYeothv91qVFsXb9UoccMk4AjGZwm/hV689akxG0i8CsRmVOKDJAiuSihvUsk1UheRv8B/DHwvg9oih1ytMVqJDw36V7oF7h9kYgoa4jUnYEQXj56xBRONbGGRXs9OA6YFkcBQ0iARlbAfCaALHPIFY72oRD6LxaSAEjscImFIYmfLhCJieRuyQiRSB+SkVZgApUEyo0IxrMC2fcrCIo6vM9t6JMC9owH/1sT229noHlAir6SborXo4zMUkZmVUbImsJYa0ZiRfy9wORzKGlnr7uwX2rAvW7D/8qE86qH2ic2WFeEttdcMM7gfpiCN2dC02SMe1xGbk7ttmY3Iy3AoeCwzvvovFFG7V0Hm1fb4Qw3CLgO8/kAGy9mY0V6ChsQSxq2ZjogPVJI3x8r5XEqJKmbiGwTyfkRCVVdvrdh5nkBSUMrV9MweYCua2XotFABaX30CB31j1LQL5Fx0eE5VlWrEaESyb9O9wblwSQil5d0vPG11QQsk+QaTxFwUaNnDBHJvvMeidcWwf/RQLhF4BQ7/2cduKfBeFLE605yYNAouE1EeHOrGUs2oU0H0BjJ4UgEBR3hXxp0IqT0U0CsgxY5EbReeXRnjiDCW046HkE+4GCUQuURp+FdyyWEqxyNGxaMESW1BkvJPErPF7WTHxu0zBRkndhCt1j5F5ipGeRB/RvqKQUmS96KhxSgl3Mwzgp0fFyOq9V2sQ7rzRoaHzgIlg1wLg/FMoRATmwS0F10h3/ChIel7hF8+fQre+pErEI6rVIv+Oj4bhPBNQtrM93IXHbBqQaRy9D+xTbCH0yUrnQlkhky2bTaURjQSbdDmlTj0FA/sNwzisWhCarRBBaGp7DSO4zV3BMHnFw0R0iSc8KH81YdvEzDzwmE8zoiEkPMa6h/moKscti0gwwB8RiIUowcVvKDWO4fw29nzmJpYJxOskmsdfYg0HSkvRoytR3Yvnf4Wa06LYl76lwdzjs1+J9ZaFw3YyAL2zFDF3nc7R3EUv84Fs5MoUi7+v30CNazeXimDcerI1vdjoFO/COReKSkq1Jz3VhLGoOV7kEUSboi7aYwegF/9I2glD0F37CQrruPd8QjeWTV9JbUHeDRYn48BlocbPXI102SzkW7W0Hfw1VwSUCMNY07uma6I2qZNErx0hpOoZgf2+fRA/JIaAZJpzxSQPepbq01kjEoO+bvSRPwWmf+fmH0SqbZo5LyyLDpB75GHpUxsP73PqCD50cH/904YN0/AgwA07gejJviOMwAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 774,
            "name": "Anseba"
          },
          {
            "id": 775,
            "name": "Debub"
          },
          {
            "id": 776,
            "name": "Debubawi K'eyih Bahri"
          },
          {
            "id": 777,
            "name": "Gash Barka"
          },
          {
            "id": 778,
            "name": "Ma'akel"
          },
          {
            "id": 779,
            "name": "Semenawi Keyih Bahri"
          }
        ]
      },
      {
        "id": 47,
        "name": "Estonia",
        "prefixNumber": "+372",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkMzOEFFQzE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkMzOEFFRDE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQzM4QUVBMTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGQzM4QUVCMTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r3fpugAAACxJREFUeNpitCo9wkAbwMRAMzBqNP2MHgWjYMAA4////0dz46jRA2I0QIABABDSBIkzwazwAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 780,
            "name": "Harjumaa (Tallinn)"
          },
          {
            "id": 781,
            "name": "Hiiumaa (Kardla)"
          },
          {
            "id": 782,
            "name": "Ida-Virumaa (Johvi)"
          },
          {
            "id": 783,
            "name": "Jarvamaa (Paide)"
          },
          {
            "id": 784,
            "name": "Jogevamaa (Jogeva)"
          },
          {
            "id": 785,
            "name": "Laanemaa (Haapsalu)"
          },
          {
            "id": 786,
            "name": "Laane-Virumaa (Rakvere)"
          },
          {
            "id": 787,
            "name": "Parnumaa (Parnu)"
          },
          {
            "id": 788,
            "name": "Polvamaa (Polva)"
          },
          {
            "id": 789,
            "name": "Raplamaa (Rapla)"
          },
          {
            "id": 790,
            "name": "Saaremaa (Kuressaare)"
          },
          {
            "id": 791,
            "name": "Tartumaa (Tartu)"
          },
          {
            "id": 792,
            "name": "Valgamaa (Valga)"
          },
          {
            "id": 793,
            "name": "Viljandimaa (Viljandi)"
          },
          {
            "id": 794,
            "name": "Vorumaa (Voru)"
          }
        ]
      },
      {
        "id": 48,
        "name": "Ethiopia",
        "prefixNumber": "+251",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRjMwQjczRDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRjMwQjczRTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQzM4QUVFMTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNGMzBCNzNDMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yFhTVwAAAsBJREFUeNrUlU1oE0EYhp/t7rbJJv1JMaVJbUuLP4XowVapIGIv/hzUIh4VqScRUQ+CevDkwYMHL4qg0oJXUSiK4E3QQ0V78eK/TdVG20hjbX43ye74xYDgpRsRKQ4MzM7Mzvu97/fONxrHti2yDM2Q3rgcwHUsUzP+/BcNVBkcW8YKdJ9MGdXxPwHWRBzlQi4hOpngj1aDKHyuBuGPyLxR3VMTcKrBe5eqgBbA9wmiO6Frr4x7ZEEHewpmHki/C/kOicWS7g1u7BqY9zaC5tDizjCujqPWnCTvNLOuYQKrzuZpdoeQ34IKRdjvXuRb3UpcpXsLqJIh5ZlTf4p3ySFWTzyU73mR6SsH2x4Q1HPcmN2HTYvIHWFy824GovclHa2eOdeceFh5saU+xeDkPRLpGH1Nk4TMFBsCbyQkxYt8D3OFCG8z6/H5Znk5uB1KAWFtLi112dWW3FBv5MhmozxL99Em3LY0PyNipLie3EfZNTnSfodF/zTvJIBXmbXMpntpt95TLrX+/T1WYqKAyLpQCnNzdj9p16okgIKwyrv1jM4N86XQJV7L4lSMWMPVMrygXWURDCSIBeK8tcPkZe51vpuj7bdlTeNpJoYtZmrSCnRZH4gE4ygn6EnJ0MOOB1s5wXI51z/KnsfDdBpxOsw5LsyMUBbGI+FxLMNmRu/k0sYz1HUUcHKNotHS52rJsz2erta1Eq12ghP+81weOgVFqVbFuKzJ4cYqCBQ5/OgqY4unpCx0iNymt6unemOeCVEiZdDJ0BZMcGXTYcb6D/BxRYhKmYim0hx6fovTT64x/z3Md6MZTXO87/HHrX01FVlH02lwikQWPpHzNRIP9Qonje6FaRpz35hrWUne9KG7Tm0VuFbgX+w1DV+5iFXM/XR2zvQLYINUIvVvX6cKgK2b2P7m3+b+q/c4vRzAPwQYAEGjBC1vMOsHAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 795,
            "name": "Addis Ababa"
          },
          {
            "id": 796,
            "name": "Afar"
          },
          {
            "id": 797,
            "name": "Amhara"
          },
          {
            "id": 798,
            "name": "Binshangul Gumuz"
          },
          {
            "id": 799,
            "name": "Dire Dawa"
          },
          {
            "id": 800,
            "name": "Gambela Hizboch"
          },
          {
            "id": 801,
            "name": "Harari"
          },
          {
            "id": 802,
            "name": "Oromia"
          },
          {
            "id": 803,
            "name": "Somali"
          },
          {
            "id": 804,
            "name": "Tigray"
          },
          {
            "id": 805,
            "name": "Southern Nations, Nationalities, and Peoples Region"
          }
        ]
      },
      {
        "id": 49,
        "name": "Fiji",
        "prefixNumber": "+679",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxMDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjUyMkUxMTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTBFMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTBGMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+scF2nwAAA6lJREFUeNrslH9oG2UYx9/3fiW55C7X/Lok7dKuxNqljii6abVzdXNQhqNanUzrwGq7yVxRJwMdgyEqYzgGKipDNgs6qdCOFf/QualU0ZVBdO2SJgWrTVuXn5fkkkvuktzlvLLgxL/GxvzLh+ePLy/v++HL8zzvA/s/mgC3JhBwywJ7I7XU2LXmi4z57bG5hTNTwGL9dLi997P3vt6++8mxNCiWHYyy31PZ3dMst3pfiFVKBYHE0Oty7X1/8ZXh8Sfiwcs7nUeP9TkeWJMpA70oFXA97WIOekuhZ5v29q87VGxlTyQT0aSVIq7TNXzqpVHJ1PAwU9kFlrHersKqtuWx7+DzA+DjE0bKsApkwUPdI8HSxAdnER2gOh1VBEBFRRVFNJJ5ikEkFUAtgYKitJgjhaIm6mhx7UbNY7YgRyWo8gWbHqkqtYzBxAh5PY5wNlZNcI1o1e4wAIYZGtybpBlKKsmkgV6I2hfiFRON6AGEKiZWUqw712jBpWq91vPdW7JRTgCIb0OHJZ0wFXlOBKmRUfrpPkdnu/lCKFWBl1gPcyVGspSKY2i1oj1LQcP6jLTvz7dkfzkV1VtliZgGH/r3jPmG3NJiHX1XiL1327YDj9/uoTh1cvpYjPa30neOfz7T88jE+q6hQYUKXgqfjw7zTRer9KMV0ULIkgKwfBH6nDNre2uZpDvI/eghSls43msjufK1CTm62bXHHsVGfjgyHn5nUc/JtlNDrBVDhYuRXc9885rf9vqOO15lsU2Ni+/+nPipbZ2I6CCoGgtFfoPr1H07LReUF49/O39466RfuT/kQ05PAbvxKho9vP+5X85PHSwyJ+kWxEq03GNpbmN4koy0ty21WAQ+fS4Sn7nb7+ju8BpLEYiVUAxT1YyV8k///vKhUfu5QCH1hy8obD8dn8vxgWYnVZXrrveFs7XOjYws9ZMQw91Akady8tnHdlDZ9OZNFOhxK7Va7Mrym5Oqjl3tEEukrNQgxBGcy8eiOrUBejgxXasmjeJshR+AqB4AqY52GwhQLGhKWKnSSotoLVMJTeSyCgAr7TbhhAnXbgia1rgrJ/F0oP22niMHOgAorh5s+cQhNdkuT/SScwFA6+roG/vEhAmVsvDLr0Jmq+yCSzPf+46bH/xtftZl1ikquCk0UGGDCQ+EZ8OK0jHQF0k3F7Koyyhqn+nahNzw9tF64DQQEoS/NjmNecFZK/+Te1Poq3XXFoqFz//dg/9oqf6P/lf8JcAAQ7yON3YEhEoAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 806,
            "name": "Central (Suva)"
          },
          {
            "id": 807,
            "name": "Eastern (Levuka)"
          },
          {
            "id": 808,
            "name": "Northern (Labasa)"
          },
          {
            "id": 809,
            "name": "Rotuma"
          },
          {
            "id": 810,
            "name": "Western (Lautoka)"
          }
        ]
      },
      {
        "id": 50,
        "name": "Finland",
        "prefixNumber": "+358",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxNDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjUyMkUxNTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTEyMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTEzMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FFmzagAAAQ5JREFUeNpi/A8EDAwMnxlwAJO4WQxn915jYJAWhAg8eMPgE2PFsLkvkoESwAKleRnoDJgYBgiMWjx4LGZkZMQiRrnFjIFlK/9jk2BmYmRgYmJi2HXiDsOHV8DcxskKkfj2k0FCVpjB2UyJ4fvPPwyQ3EiGxQwi2dh1ggwEycgIMTBwszMw/PkLEWdlZmD4+J2B4ek7oOuYQSaQabFpw/8RlbhYQEUg/qAGFpVcaEH9CRTUH0AJgeygZnELN2fAlbhAKfrIxUcMn959YWBghyYuoKWikgIMlu66DD9//SU/cf0noNM0fjbDmT1XUSoJ31grhk29kbSNY2zu+v9/OJdcoxZTLx9DwGd6WwwQYAA8jFV5xASNJwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 811,
            "name": "Aland"
          },
          {
            "id": 812,
            "name": "Etela-Suomen Laani"
          },
          {
            "id": 813,
            "name": "Ita-Suomen Laani"
          },
          {
            "id": 814,
            "name": "Lansi-Suomen Laani"
          },
          {
            "id": 815,
            "name": "Lappi"
          },
          {
            "id": 816,
            "name": "Oulun Laani"
          }
        ]
      },
      {
        "id": 51,
        "name": "France",
        "prefixNumber": "+33",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxODE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjc4RjdFMDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTE2MTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTE3MTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NYcTvAAAADBJREFUeNpiZFCYz4Ab/L+fgEf2q7YTHlkmBpqBUaNHjR41etToUaNHjaad0QABBgAMOgSHJZqdhAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 817,
            "name": "Alsace"
          },
          {
            "id": 818,
            "name": "Aquitaine"
          },
          {
            "id": 819,
            "name": "Auvergne"
          },
          {
            "id": 820,
            "name": "Basse-Normandie"
          },
          {
            "id": 821,
            "name": "Bourgogne"
          },
          {
            "id": 822,
            "name": "Bretagne"
          },
          {
            "id": 823,
            "name": "Centre"
          },
          {
            "id": 824,
            "name": "Champagne-Ardenne"
          },
          {
            "id": 825,
            "name": "Corse"
          },
          {
            "id": 826,
            "name": "Franche-Comte"
          },
          {
            "id": 827,
            "name": "Haute-Normandie"
          },
          {
            "id": 828,
            "name": "Ile-de-France"
          },
          {
            "id": 829,
            "name": "Languedoc-Roussillon"
          },
          {
            "id": 830,
            "name": "Limousin"
          },
          {
            "id": 831,
            "name": "Lorraine"
          },
          {
            "id": 832,
            "name": "Midi-Pyrenees"
          },
          {
            "id": 833,
            "name": "Nord-Pas-de-Calais"
          },
          {
            "id": 834,
            "name": "Pays de la Loire"
          },
          {
            "id": 835,
            "name": "Picardie"
          },
          {
            "id": 836,
            "name": "Poitou-Charentes"
          },
          {
            "id": 837,
            "name": "Provence-Alpes-Cote d'Azur"
          },
          {
            "id": 838,
            "name": "Rhone-Alpes"
          }
        ]
      },
      {
        "id": 52,
        "name": "Gabon",
        "prefixNumber": "+241",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUMzNjM2MDE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUMzNjM2MTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5QzM2MzVFMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5QzM2MzVGMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XUVjwgAAADFJREFUeNpiZJiXwEAbwMRAMzBq9LAwmvHPRbHRABk1ekCMZrFbsm40QEaNxg0AAgwAqCcEmp2Ti78AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 839,
            "name": "Estuaire"
          },
          {
            "id": 840,
            "name": "Haut-Ogooue"
          },
          {
            "id": 841,
            "name": "Moyen-Ogooue"
          },
          {
            "id": 842,
            "name": "Ngounie"
          },
          {
            "id": 843,
            "name": "Nyanga"
          },
          {
            "id": 844,
            "name": "Ogooue-Ivindo"
          },
          {
            "id": 845,
            "name": "Ogooue-Lolo"
          },
          {
            "id": 846,
            "name": "Ogooue-Maritime"
          },
          {
            "id": 847,
            "name": "Woleu-Ntem"
          }
        ]
      },
      {
        "id": 53,
        "name": "Gambia",
        "prefixNumber": "+220",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUMzNjM2NDE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUMzNjM2NTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5QzM2MzYyMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5QzM2MzYzMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I9VNdgAAAKpJREFUeNpiPCeo9pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERp7FLD/e3x0Qixn/11R/ANL8QPyPjqH8kfHsy//vgAxBIP5Dr1AG4veMDLxtA+JjFlZOZqYBSGhMLExMjAOTqn+++fEfyv5PrwQNsovx5tV/74EMASD+SyeLmYH4A8vZb50Dk48lE1g+0bmCAIHPLIriKqOVxDCvnaBNHl46N30+AwQYACKRKLCtBsdeAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 848,
            "name": "Banjul"
          },
          {
            "id": 849,
            "name": "Central River"
          },
          {
            "id": 850,
            "name": "Lower River"
          },
          {
            "id": 851,
            "name": "North Bank"
          },
          {
            "id": 852,
            "name": "Upper River"
          },
          {
            "id": 853,
            "name": "Western"
          }
        ]
      },
      {
        "id": 54,
        "name": "Georgia",
        "prefixNumber": "+995",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RjU5RkIzNTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RjU5RkIzNjE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5QzM2MzY2MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGNTlGQjM0MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6i4DLgAAAqBJREFUeNqkVllPE1EYPXfu1ASwIqEErCBRQ2Ki8UXjg5IQE/UJWfQXuP0+EzHGWPRF9MEHDRXColIBbbSWFlptO53l85uFhulMZVpPMpm7nu/ebzm5goi+A0jyV0YEULWG/IWbMDYy3JOQQwNILKWg9PchIuL8ZVWvgQN/wLIA0wQUhbklOoJpgZhD2PulEjCuhO75uo38lSkYq1/QKcxvWeyM34WxvhE6HzCspRZQuH0P+soSijMPoT1JtW1Ue/EahUnmWE6jOP0A2tz84Yah66BKDUJIJ56k6e1flzlQqULA46iHcHBylagJxqcM5c5dJ/3javMUWZUq5c6MUxYn+TtFP4cukZkvBNYZmS36dfEW6cvrFIKSGnZgeXYUA5ypEMrhtxMidFiODiPx/lnLeTXgBiInm0VMBRmc2brZ2CyOxFy32WvYkc44t6luuFv3uXwcPKcbgQOI3NhEyVdKh92OS80q7LrlZvfZgNJ3nK8g3TKMhrLIIhndMMhxv9LLYqFIt28fZI8PQkZorrYyrNrqEx10gJyaikN13R8Rqhw+Ed3ufky53Bpu5TGZHHRVjig6lbVb8rva4s0xCdHTDfpTdRND8ZKrNw7rRx47V2dgZDZ5gLV6MIH+t48hT4+A9sp+jm7mqPg5Gq62yUKK2zXU0xXMxt6j3hi567gtjsUbB/OFxQrnQKtsMDPb2Lk8CWPlc4SwU1O8PY5N1uprszDWomr1/BsUpu+jvryI4p1HrLMv21bM+vwCilPMkf6A4izr/dNXEW5cY23d+83eiTl/W2vbBdU0J97/5Gip1WMTpKdXOtfqjS3Knb9B+tJaG1rNGZpYfO5IXqeQI0kk3s05Mhtax96TJ+57+vCrQXRJ/BdYQoUqWz19yn8FGABqxdXVw6EGDQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 854,
            "name": "Tbilisi"
          }
        ]
      },
      {
        "id": 55,
        "name": "Germany",
        "prefixNumber": "+49",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RjU5RkIzOTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RjU5RkIzQTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGNTlGQjM3MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGNTlGQjM4MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aBEH3AAAAChJREFUeNpiYBgFo2CAAOMNmhnNxDBq9KjReBPf/3OjATJqNB4AEGAA+2UCvgLMJf0AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 855,
            "name": "Baden-Wuerttemberg"
          },
          {
            "id": 856,
            "name": "Bayern"
          },
          {
            "id": 857,
            "name": "Berlin"
          },
          {
            "id": 858,
            "name": "Brandenburg"
          },
          {
            "id": 859,
            "name": "Bremen"
          },
          {
            "id": 860,
            "name": "Hamburg"
          },
          {
            "id": 861,
            "name": "Hessen"
          },
          {
            "id": 862,
            "name": "Mecklenburg-Vorpommern"
          },
          {
            "id": 863,
            "name": "Niedersachsen"
          },
          {
            "id": 864,
            "name": "Nordrhein-Westfalen"
          },
          {
            "id": 865,
            "name": "Rheinland-Pfalz"
          },
          {
            "id": 866,
            "name": "Saarland"
          },
          {
            "id": 867,
            "name": "Sachsen"
          },
          {
            "id": 868,
            "name": "Sachsen-Anhalt"
          },
          {
            "id": 869,
            "name": "Schleswig-Holstein"
          },
          {
            "id": 870,
            "name": "Thueringen"
          }
        ]
      },
      {
        "id": 56,
        "name": "Greece",
        "prefixNumber": "+30",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0UwNjAzNjE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0UwNjAzNzE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RTA2MDM0MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RTA2MDM1MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KGW0OAAAAblJREFUeNrEVL9LAmEYfj79UgqtiCQoHIUobHAwiBrdG8JBqKUpAgkaoq1F/4aG9E8wxLHJVqmla8ghaDB/QA13lVh6X+99d6lIRHRH98DDvd9x3PM+74+PASc1APNEDWgim03h+HgdxeIdNjdP6fUk0QMTOlHAJoLER24FGHp+A2YJtondoUT+Ls5/992HFM/nU1hdXUCz+WpXGNwo7wA1CGH+VNc7RkUslx/SZTw+h6WlkKRdsEzmUv0qc6v1imRyGWtrYVSrT8jlrhEM+uH1MkqIUmh30evpYIzZ1dWYEEL9ub8DRKOHUJQrimw71nipVO2fVLVD5VxAJDKDRuMF5fIDxsc5fD6vdByLbSAUWkEg4IMDOCDHB8JkUmQyF8JAoXBD5x1imrhH3BeKUhcOQeXmnn6hTf3zy8jjMQZ+2trjnpzqev0Ni4sCtZrqxFR3R9ZGl5EwaivPg71NJM7gFLh5OQxfFMPwWO/YSGLM/jrd3rb6U93pdBEOT2F2dgKa9o77+2dw7oX97bG5Tk4K8+3tc7gBKuKWO47T6V13HLvW40rl0a0eH7njGBjTLGHtn0Sl1qcAAwDRS+VdNgkmcAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 871,
            "name": "Agion Oros"
          },
          {
            "id": 872,
            "name": "Achaia"
          },
          {
            "id": 873,
            "name": "Aitolia kai Akarmania"
          },
          {
            "id": 874,
            "name": "Argolis"
          },
          {
            "id": 875,
            "name": "Arkadia"
          },
          {
            "id": 876,
            "name": "Arta"
          },
          {
            "id": 877,
            "name": "Attiki"
          },
          {
            "id": 878,
            "name": "Chalkidiki"
          },
          {
            "id": 879,
            "name": "Chanion"
          },
          {
            "id": 880,
            "name": "Chios"
          },
          {
            "id": 881,
            "name": "Dodekanisos"
          },
          {
            "id": 882,
            "name": "Drama"
          },
          {
            "id": 883,
            "name": "Evros"
          },
          {
            "id": 884,
            "name": "Evrytania"
          },
          {
            "id": 885,
            "name": "Evvoia"
          },
          {
            "id": 886,
            "name": "Florina"
          },
          {
            "id": 887,
            "name": "Fokidos"
          },
          {
            "id": 888,
            "name": "Fthiotis"
          },
          {
            "id": 889,
            "name": "Grevena"
          },
          {
            "id": 890,
            "name": "Ileia"
          },
          {
            "id": 891,
            "name": "Imathia"
          },
          {
            "id": 892,
            "name": "Ioannina"
          },
          {
            "id": 893,
            "name": "Irakleion"
          },
          {
            "id": 894,
            "name": "Karditsa"
          },
          {
            "id": 895,
            "name": "Kastoria"
          },
          {
            "id": 896,
            "name": "Kavala"
          },
          {
            "id": 897,
            "name": "Kefallinia"
          },
          {
            "id": 898,
            "name": "Kerkyra"
          },
          {
            "id": 899,
            "name": "Kilkis"
          },
          {
            "id": 900,
            "name": "Korinthia"
          },
          {
            "id": 901,
            "name": "Kozani"
          },
          {
            "id": 902,
            "name": "Kyklades"
          },
          {
            "id": 903,
            "name": "Lakonia"
          },
          {
            "id": 904,
            "name": "Larisa"
          },
          {
            "id": 905,
            "name": "Lasithi"
          },
          {
            "id": 906,
            "name": "Lefkas"
          },
          {
            "id": 907,
            "name": "Lesvos"
          },
          {
            "id": 908,
            "name": "Magnisia"
          },
          {
            "id": 909,
            "name": "Messinia"
          },
          {
            "id": 910,
            "name": "Pella"
          },
          {
            "id": 911,
            "name": "Pieria"
          },
          {
            "id": 912,
            "name": "Preveza"
          },
          {
            "id": 913,
            "name": "Rethynnis"
          },
          {
            "id": 914,
            "name": "Rodopi"
          },
          {
            "id": 915,
            "name": "Samos"
          },
          {
            "id": 916,
            "name": "Serrai"
          },
          {
            "id": 917,
            "name": "Thesprotia"
          },
          {
            "id": 918,
            "name": "Thessaloniki"
          },
          {
            "id": 919,
            "name": "Trikala"
          },
          {
            "id": 920,
            "name": "Voiotia"
          },
          {
            "id": 921,
            "name": "Xanthi"
          },
          {
            "id": 922,
            "name": "Zakynthos"
          }
        ]
      },
      {
        "id": 57,
        "name": "Greenland",
        "prefixNumber": "+299",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDcxODhGMUMxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdFMDYwM0ExNzdBMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNTkxNDkxNjg0Qzg2MzI5QzUyMjkyQjk5NEQ3QkI1QkQiIHN0UmVmOmRvY3VtZW50SUQ9IjU5MTQ5MTY4NEM4NjMyOUM1MjI5MkI5OTREN0JCNUJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNGGgQAAAtNJREFUeNq0VU1rE1EUve9jkkltmqS2IU2tQhXB0FoVArYLQbDFgi1uFP0B4lYEl+KfEBHc66IFhRYbUYTqQkEpLdovTDc6adO0NWY6MZP5eM83KU1tkknjwsswi3fnnXfuufe8QZxz+D+B3RK89FQEq7XoFtQtIVCMrYw2+Vyfm8VaDlqaaW/cP3y1Kdy+ezQ6AJvXCsOylAf3lo/65hEsEfjmhUUMCwDJrubU/btmURff2IzXD1SttWUUlSsX9dcfpKhMggEhmvMNEgE8m9VXde+lgY7JNz6vrz73SmgbQBkd1icS3p4OZCPmCPNXiQgwRsbXNenyhWNT0/if2ph99LAwkfCcCnMHlVURAbEuxcJG4t3Wk8e7ojcGrU2OU1lgUHAbSkccQn3we+yZWTrOVRDRjHKysJJU4ieJ2NwkH9B7vQgFiHz+cijW4zp8hmFIQnDMEZHzqylb9uDWECdS/blCzDIz6WJ6VY71ILtYXSFjiK4NxR0NkW0rGc/gSLeyzVUNbPMAaEIh2Jq5cyt7+ybu7KyQxZGMc2osLhBHE8Y2uBX5RLGEg6EG/cZmZ1nyJ+SyFdAOUwSUtLUR7nTe49fNlWVtbqal71wjuNr8nJlcJN0B8PoqWomckzjeGx/ZZ6eLhZcvGqS8PfaUpfJY9ruNCErGIjusS0w00+Ltifeh02fdfCY8RQDUpYX1wX4CJvIHa42249z9cx0KIDW/eWM0n0m5cRG4+bSyfm2Y/1Jx6HBNy/CyZfaSpi2dOCKtKD/6z2y+nareZAHkpl+tD8Rh+bt0vJNbVm0pyoJgxzS8XIloLVM2zJxBh877R657e/u4P0BVtTA/o02Mm4mPJCiRrjAYtvvd7QiyX+tyOZhgy7DSm5bKIYC4j+CCDTlO/YCibUC9yLbq3tcONC1z3VcOY4ApjUZoVKhgIsZ4M4YOygGLPWCzOr+nHcuI1x8BBgBBy38D0GVnSQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 923,
            "name": "Avannaa (Nordgronland)"
          },
          {
            "id": 924,
            "name": "Tunu (Ostgronland)"
          },
          {
            "id": 925,
            "name": "Kitaa (Vestgronland)"
          }
        ]
      },
      {
        "id": 58,
        "name": "Grenada",
        "prefixNumber": "+1473",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzE4OEYxRjE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzE4OEYyMDE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3MTg4RjFEMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3MTg4RjFFMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RYghnAAAA/BJREFUeNrUVVtsFGUU/v6ZnZ2ZvU13S+n26gJ7aQPYEhKJtOqDIU0IJPhEY0I0RhMNRkHwmhh5UNPYENQ+qvHBRHwzPlCiiWhskAQJbi2l28u2DWxLd7tAd7ezO7M7M7//LKWm3PSFB0+yD3N2/u985zvff4Zc9EfxcILDQwsH+1V4ElTLZoksQAIoZRlw0bfynAvjx3wOWPgPGWKjkXpogkSveZyCSQkTRNKseIsn1KM+7svk8+4l3ckKsH4IB2pWCbBzFh6UoURxVhTf8vli3dSP3m2zBU3ibNahUunD1o2ndrV+1PjnwS1TPjEN3YOlagEX/afDEmGJOzOMbk0F0jLK8pej4bcXtndPzD0zlklIbhvaAmk2tdyw+9XBrhONkaOPTrzcPg1PDjmPmRZA6L21tAjvNODLIyV9dXlL/0h0PFWPJkeroVG7qarW7ChTBi4NtcVkVnnldPdnI+F3Osafa5vhvSpyXrPMw0H5AOMA8waHCuEFE7UFaM6T8VjfcOyvKw0QKwjk4JYZFF0dIwuRs6ALyHvAsLzFxGLg+cEnT1yKvNuZ2B+b4f0mJE9hSKAG8T1VRlmFRr4fDX8cj12YbYJgoDZnN8f4UbLGISzSmtiy/npEKZyZbIZUsgtQMjxf13s1OHB505u7E12fqJnvJOae+n3c+cOB/tNtv061gKM207tA10BPFlzdLelvHzvz+c87Xh/qgKzbx5RlWNzZTOjssXXxX37b+vVNyJh6VtmT3Ukjfig3wHq9F+iaKyPyVsYjYhAdo0toKjPElf8ZI55C5wydcH6Lq7NMA1Tl4LDuO947WLf51IF4eN/i7p/m/WikECx7uAU3ykJHaP7Ie2MbupYv7a1lgrQcVU8+fe74UPuFZFVlJt0tQe4H7XaYyAk/qI+gQYNuoOhi029rzhzZOvFiexI1Opq9pJ7AQM2uSq883RtIfTO+sX84OpIKwlmxC6Dq+ruhK8z5oglnETkZRW9zQ5aZ7+DmJNxF291zMjOfv0e3zZfhkK3hReNAZ+JAbOaLsU198dj03Hq4dPtlshaaPfKsqaKIRSlYn31jZ/y1zUlRKTAvmln/itwUZvr2AHhqGjyu1/DOykvbR1+Izg6Mho+PRFIL6yBzDIqsQrM1cNUhuTu193uGmQIOKQfLjZsKZMq7jOouqs579aKvZorsqMIH9UNtFw/tnfx0JPzB4rYr5ySuKo29nmTN+iPkC+1Rn1CuacuubEmCxZhWr6llc7SBTPKgDEcCku7yqr8XgpOnPDuS+ZLE2dC3lqpVwgLkqjPshRk5XOBEOt7nE26v0H/NEJAGaA7JmveIK0v1//eV+VuAAQAuXtAy981G1AAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 926,
            "name": "Carriacou and Petit Martinique"
          },
          {
            "id": 927,
            "name": "Saint Andrew"
          },
          {
            "id": 928,
            "name": "Saint David"
          },
          {
            "id": 929,
            "name": "Saint George"
          },
          {
            "id": 930,
            "name": "Saint John"
          },
          {
            "id": 931,
            "name": "Saint Mark"
          },
          {
            "id": 932,
            "name": "Saint Patrick"
          }
        ]
      },
      {
        "id": 59,
        "name": "Guatemala",
        "prefixNumber": "+502",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjBFNzZFNDExNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjBFNzZFNDAxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iODBCNDU1NDY3QzIxOTc2OTNGMUNENjM0NTMwOTgyQkUiIHN0UmVmOmRvY3VtZW50SUQ9IjgwQjQ1NTQ2N0MyMTk3NjkzRjFDRDYzNDUzMDk4MkJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+T8VYKgAAAklJREFUeNpidF77kOn/v3+MjAxIgJHh/4Mv/0NV2NuspBhwgwNPPubsfyPKxcKMohuk/T8jAxMDw/9/jOh6/jMwMjH8Y/zPQAgwMv7/hykK1sfI8p/xL+N/JigXSRYizUAYMGLoBbv6P9Bx/4nRTxqAWMVEnNPQtREDiDL6719QgG44dfjAtQuMIO7ff//+EWE0I06zmZiAFjPMWbdg5rqFQMbreydyasN+/GO4cuNK7ZQ2oAg7GxvuGPjPhMeD3JxcDAx/lu5YziMg//nutFSbXU1RgqktZb+ZWLcf33rn8hFhQQ5cMQsMORY8PhLg4T1yYjMjK3OcqxMDg+L7PTeC+NRYnKR+Mf8y1TPbcmZXqK4NIyMuPzMy4UlTrMwMT9+95OBgBXLffeR49/URw+vp3N9WfvnBqqes++Hjhx+/GMgxGhhQ337+NVE1ev/u06tPv15dufiem+uvX8H5Z5yvXt05deWMopj0f0IpBCf4+OWTsqqRpqqGk7vKdyY+E5dlX9lSv/7VntVb8+rZs/io/C/fGPAkFXzR+P3nDyDZGFpw7+7j6CqPR88eHjq3a9LksitnrqT7xjEwcHz4+gmPy1gIpmpZVfWTp64s37r0zbt37H8ZC7IbjLVMvay9COYfFqb/wFKIQBbTVdDWzW6DsF2tXYnN6P9JyLqkAWA0/qOd0bQCLH8YmZmwlat/gaUQIYv/MTL9YWD5x8CMWYAApVg4GX4zMvz7j27Kf47//9gYWAi4699vTsZvrIwcLKgRBjQaCAECDAAobt+WaLkKAQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 933,
            "name": "Alta Verapaz"
          },
          {
            "id": 934,
            "name": "Baja Verapaz"
          },
          {
            "id": 935,
            "name": "Chimaltenango"
          },
          {
            "id": 936,
            "name": "Chiquimula"
          },
          {
            "id": 937,
            "name": "El Progreso"
          },
          {
            "id": 938,
            "name": "Escuintla"
          },
          {
            "id": 939,
            "name": "Guatemala"
          },
          {
            "id": 940,
            "name": "Huehuetenango"
          },
          {
            "id": 941,
            "name": "Izabal"
          },
          {
            "id": 942,
            "name": "Jalapa"
          },
          {
            "id": 943,
            "name": "Jutiapa"
          },
          {
            "id": 944,
            "name": "Peten"
          },
          {
            "id": 945,
            "name": "Quetzaltenango"
          },
          {
            "id": 946,
            "name": "Quiche"
          },
          {
            "id": 947,
            "name": "Retalhuleu"
          },
          {
            "id": 948,
            "name": "Sacatepequez"
          },
          {
            "id": 949,
            "name": "San Marcos"
          },
          {
            "id": 950,
            "name": "Santa Rosa"
          },
          {
            "id": 951,
            "name": "Solola"
          },
          {
            "id": 952,
            "name": "Suchitepequez"
          },
          {
            "id": 953,
            "name": "Totonicapan"
          },
          {
            "id": 954,
            "name": "Zacapa"
          }
        ]
      },
      {
        "id": 60,
        "name": "Guinea",
        "prefixNumber": "+224",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MEU3NkU0NDE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MEU3NkU0NTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwRTc2RTQyMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwRTc2RTQzMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+S1dzKQAAAJpJREFUeNpiPCeo9pSBgUEKiD8zYAF/PzIyskr8+6u55tN/Nql/LED+f2zqmFl+M375xfFX4ZQjw9tvPMwMrL+wqgMCXiB+xgJlMCDR2MA/KM3EgB/8h2JC6ngJKUA3lBpqiPIBzcCoxaMWj1o8avGoxaMWD22LGamkBgxYoE0eXlxNH6hhf6GVPAueyh6mDtwSwqMObBdAgAEADjElH4U24o0AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 955,
            "name": "Beyla"
          },
          {
            "id": 956,
            "name": "Boffa"
          },
          {
            "id": 957,
            "name": "Boke"
          },
          {
            "id": 958,
            "name": "Conakry"
          },
          {
            "id": 959,
            "name": "Coyah"
          },
          {
            "id": 960,
            "name": "Dabola"
          },
          {
            "id": 961,
            "name": "Dalaba"
          },
          {
            "id": 962,
            "name": "Dinguiraye"
          },
          {
            "id": 963,
            "name": "Dubreka"
          },
          {
            "id": 964,
            "name": "Faranah"
          },
          {
            "id": 965,
            "name": "Forecariah"
          },
          {
            "id": 966,
            "name": "Fria"
          },
          {
            "id": 967,
            "name": "Gaoual"
          },
          {
            "id": 968,
            "name": "Gueckedou"
          },
          {
            "id": 969,
            "name": "Kankan"
          },
          {
            "id": 970,
            "name": "Kerouane"
          },
          {
            "id": 971,
            "name": "Kindia"
          },
          {
            "id": 972,
            "name": "Kissidougou"
          },
          {
            "id": 973,
            "name": "Koubia"
          },
          {
            "id": 974,
            "name": "Koundara"
          },
          {
            "id": 975,
            "name": "Kouroussa"
          },
          {
            "id": 976,
            "name": "Labe"
          },
          {
            "id": 977,
            "name": "Lelouma"
          },
          {
            "id": 978,
            "name": "Lola"
          },
          {
            "id": 979,
            "name": "Macenta"
          },
          {
            "id": 980,
            "name": "Mali"
          },
          {
            "id": 981,
            "name": "Mamou"
          },
          {
            "id": 982,
            "name": "Mandiana"
          },
          {
            "id": 983,
            "name": "Nzerekore"
          },
          {
            "id": 984,
            "name": "Pita"
          },
          {
            "id": 985,
            "name": "Siguiri"
          },
          {
            "id": 986,
            "name": "Telimele"
          },
          {
            "id": 987,
            "name": "Tougue"
          },
          {
            "id": 988,
            "name": "Yomou"
          }
        ]
      },
      {
        "id": 61,
        "name": "Guinea-Bissau",
        "prefixNumber": "+245",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTVBODZCRDE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTVBODZCRTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwRTc2RTQ2MTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFBNUE4NkJDMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NfA1TgAAAaZJREFUeNrslbtKA0EUhv+5uLlq1ChewBvElD6AhfgOvoKFjZVvYClYpLDVh7AQC59ASGOh4CUiGIKGBI2S7GVmPLMSBCvjbtTCA2f3LMPwzX8us6w8UrwHMIgvmNGA/8RNYfdF5dfbUt0KfNck+TR+wTh5q8c9hjyIA4zfUvx3wDaXCcYgwML4x8C8S6dH38E6bHGGHBOY5w72Ow3cKA8LwkGK8XA9TpPdIEmpfdQBKkpjgkuU2nV4pLcoE7hULgo8AZe+NR0uyzWDDCCkiQ62aodJbanziCOvRfNisEfwY4q3M5ME4/C0orobNJRQOc8x2hMsMrhlFEaZxMHQLJabVzhXnTC9O5kprDpZXFPabV3mSPfm3Yw5OR02rOZHV2w72Cc1FQLY90Yqj0P3GWd0gBVkYaVZd2it6juy0U4LdNzo4Hc4cEH13EqPE3gMa84zykEbdf1xUSnCDwllMEBqZRAP+In+AksyGdb61H9FQSSwSM1VI7AD1p+u7s6WZwweTBA2W5Pqbgc5buj/Xf3j4MEe97DPvfHd5qr2CDfhVEWEvwkwALDLl6s6AZ8RAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 989,
            "name": "Bafata"
          },
          {
            "id": 990,
            "name": "Biombo"
          },
          {
            "id": 991,
            "name": "Bissau"
          },
          {
            "id": 992,
            "name": "Bolama"
          },
          {
            "id": 993,
            "name": "Cacheu"
          },
          {
            "id": 994,
            "name": "Gabu"
          },
          {
            "id": 995,
            "name": "Oio"
          },
          {
            "id": 996,
            "name": "Quinara"
          },
          {
            "id": 997,
            "name": "Tombali"
          }
        ]
      },
      {
        "id": 62,
        "name": "Guyana",
        "prefixNumber": "+595",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTVBODZDMTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTVBODZDMjE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFBNUE4NkJGMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFBNUE4NkMwMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jfKcDAAABN5JREFUeNq0ln1o1HUcx1+/e9jtbnO33eaUXDl1DqVRmYqohSZWKqhFBCb9WZhgiQhJkA+RFEmBf1RahBFSQU8gtc25ypGz6XyYJGqKc5t7OG+7290ebw939+v9u5umsZalfeEHP+73+X4/78/78/68v2e8XLW321nkYd+xQ0SazgLD4M4G1ziw2cE0+T+WMTuv2Hxqx2bWrp1Ng2eYvbX1VLXUEgydhIEQpGelgNiddxWE8R055hbCMCOP/btWM2/lE/p5GuVX0ygLtFLeWkO9vwb6m8GZLiAC4XRbW/X8dyBGMK/EdMQTvB1u5F36mb8cvt3pI//hlfq8BLqmUt2bxsFgN4faznEiIBDh8/oWFxO5akmmTjH+NRvGiZzppgsbxXYXl6PDbO4LUGF0sn4TfLhRERN1cMdcyFiqSmfRMHgPlZ0xfmi9wM8tR+gL1kGsR0x4U225zZYYp3OKk1Ex0Tbe5qDAcPK1qtvENcyZA7y/w82zKyS4SAz8CvQ9CLkrlGQBweh4fgwnKA34OdJ2kqaOWuhtgTQPeHwC4frbdtxIzEiI9Uy1p2GKyXfCIXYRYP7TsH+rj2mz0uBikFhoCIdeySwQkMfExiLMxAx+7fNS1h6ivLmWOv9RtemykttS4kzLUDbbDTZuSXx9xZXeraDpQnyub5AN/dc4nt7Fq1vdvPWCKM3SmF0aIhaLYiR6sSe0yZ2RApG9TKeWcLbHTXlogAr/RY5dO05/8Ixo7VNcTrIloya+viz6J9qcTDAcI/T7MUsG+eyNbFasVqKWOLFgAsNpiWtQGyIYYspmseGdAzmPSxdz6RiezE8RO6X+K1RerSQggY6Z2FqJkcEpFP02HbonHGG7ACxabOfjnV4KC+wkuhI3d08gpIdEt7xoGLvIIWNiCohbInUu4eJQgeT8T+ob6btVvUf0e7Fb3kZXl0nC+jDaCdZ4WTuNEeRxqX44qJeoeu3GJ1d0jJXUSpYnmieJ7tLOXjYl/HQVRfny9SzWPCdLDcSJt+vkJNWCE5cRxUzs1qneB0T1Ys35PDqHJlPTO47yej8VjV9w2V89emILpFNwZzhcNA/EWNXTTIXc7aXXXOzZMAHytO3SMLGhAUV1YwyocJdKz31EAtOoOebQGM2jIhilzF/P4dbP6QlJXEPh1B0gld+S2EwmNZksdbjF4e6OcLKfxUsTnN6Ry6yFssz6CLFTfTjUO0eGFOpbDePkcEjJ0XzKW3r1nKGq9RM53IURh1NchswlM+fGXN9iID7RWijnKQv1sVG0Bu/r573tbl58RmIZEJVNCswuUmXy84zFRCWSqoiNUs3u4bY6zgeOQ7c1u6rHkzumpzssWq2ySxzptIjWtZ1tfEWQNevgU9lm+hQh7pinl0fh/jmifhJHe1yUXmqgsvkbAu1yq8FgyrMt2/RN+Uui0YfGca+EkylUuzua2KZ+zVwIDbvSKVyg2wL5c08Jvzm9VAS6KG37neq2A9LQuT/NwGNRmHWTP9/eZWEctOWbWxLthAuz+OjN5Sx7/kn9XER1a5ZupAhlupvr2n4RhVdIDqXlwUkKbXd2LZZ4CsxV2zazft0SAt4Ye0828n19DYHOUxo7fyqJlUwKv6t/BF45+EF3zkP57Ks9RPMV64rrTVGY/OvjuKOqxlp/CDAALJ7xfKNmRxYAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 998,
            "name": "Barima-Waini"
          },
          {
            "id": 999,
            "name": "Cuyuni-Mazaruni"
          },
          {
            "id": 1000,
            "name": "Demerara-Mahaica"
          },
          {
            "id": 1001,
            "name": "East Berbice-Corentyne"
          },
          {
            "id": 1002,
            "name": "Essequibo Islands-West Demerara"
          },
          {
            "id": 1003,
            "name": "Mahaica-Berbice"
          },
          {
            "id": 1004,
            "name": "Pomeroon-Supenaam"
          },
          {
            "id": 1005,
            "name": "Potaro-Siparuni"
          },
          {
            "id": 1006,
            "name": "Upper Demerara-Berbice"
          },
          {
            "id": 1007,
            "name": "Upper Takutu-Upper Essequibo"
          }
        ]
      },
      {
        "id": 63,
        "name": "Haiti",
        "prefixNumber": "+509",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTVBODZDNTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTVBODZDNjE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFBNUE4NkMzMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFBNUE4NkM0MTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vIrdngAAAb5JREFUeNrslT1IHFEQx39vbzeunkYvIRH8QgJBBAXNR5EQkIASREhlomArVulSWVjY2CmiWKuVBLGwEYuASIrAhigkhSFgkDsQDWjirbruebfrrFZW9wTJEXDgLcwyzO/NvP+8p6ifTlMAM2WVFQJsUCC7Af9TcenbrRikXPD8yBFZ3oUj8YNDsMWvE51mgmsGh7L2PF501dP4MMGRf8LaxjrVVbU8uN/Ez19/Wf2YglLZgNIBK1sTLOS9E971t9DzqgqP7/SOOiy875QkjSyu7LL6ISngIgHnJ5vxQPP+CKKSXexYluTWDjPz20wMDDI55fL29Q6WkSNO1PYoOD9YfU48D/XAAd5BkpfOMrPZewy39fOlO82juVJGnGn6rD+stHZQXF4jks2vWbNas2IlYJMMm1vbpN/8oH3MYWg9Tue4y+FTh9RSggZ8crkDiY7lz/et4olWxUqibnsBy88q+NpsURnG8Q0TK8yyrzweb4S0f/qNaytCjTPWBkeWMxQl+8fY5xK3pAMGWTnUUDrhyde/U4YRhNc/xzFJmikv5vTy3/NNRDhd6NUvkGiq1MVI39zV/9Uj4RYCfCbAAH4eks60LgqAAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1008,
            "name": "Artibonite"
          },
          {
            "id": 1009,
            "name": "Centre"
          },
          {
            "id": 1010,
            "name": "Grand 'Anse"
          },
          {
            "id": 1011,
            "name": "Nord"
          },
          {
            "id": 1012,
            "name": "Nord-Est"
          },
          {
            "id": 1013,
            "name": "Nord-Ouest"
          },
          {
            "id": 1014,
            "name": "Ouest"
          },
          {
            "id": 1015,
            "name": "Sud"
          },
          {
            "id": 1016,
            "name": "Sud-Est"
          }
        ]
      },
      {
        "id": 64,
        "name": "Honduras",
        "prefixNumber": "+504",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkM3N0M3QTE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEM5MDFFMjE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGQzc3Qzc4MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGQzc3Qzc5MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++ppqvgAAALNJREFUeNpiZHDfxUAbwMRAMzBqNP2MZvz///8AuPrS1Q/4NV+98RGf9H8c4Pj1D3J+e68++IxLwdM3P+T9924+8QqXAnwB8vXvf25mRji3ZuGd7z/+9qSpM8LEvvz5z83CyIhDOwseDyGbC3TA1x9/P3/7C3QIXJSHhZGcADlz66NmxMEbj7/iUvDi3U/tqIM7z77BpQCn0UCw4/Tr/3jB9lP4FNAw8TGOlnyjRuMFAAEGAEq7Jwn/ToVjAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1017,
            "name": "Atlantida"
          },
          {
            "id": 1018,
            "name": "Choluteca"
          },
          {
            "id": 1019,
            "name": "Colon"
          },
          {
            "id": 1020,
            "name": "Comayagua"
          },
          {
            "id": 1021,
            "name": "Copan"
          },
          {
            "id": 1022,
            "name": "Cortes"
          },
          {
            "id": 1023,
            "name": "El Paraiso"
          },
          {
            "id": 1024,
            "name": "Francisco Morazan"
          },
          {
            "id": 1025,
            "name": "Gracias a Dios"
          },
          {
            "id": 1026,
            "name": "Intibuca"
          },
          {
            "id": 1027,
            "name": "Islas de la Bahia"
          },
          {
            "id": 1028,
            "name": "La Paz"
          },
          {
            "id": 1029,
            "name": "Lempira"
          },
          {
            "id": 1030,
            "name": "Ocotepeque"
          },
          {
            "id": 1031,
            "name": "Olancho"
          },
          {
            "id": 1032,
            "name": "Santa Barbara"
          },
          {
            "id": 1033,
            "name": "Valle"
          },
          {
            "id": 1034,
            "name": "Yoro"
          }
        ]
      },
      {
        "id": 65,
        "name": "Hong Kong",
        "prefixNumber": "+852",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTRDOTAxRTYxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTRDOTAxRTUxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iOEM1NEUwNEVGRUE1NkNERDAwQzk2MEExNjM3RDQ2OTEiIHN0UmVmOmRvY3VtZW50SUQ9IjhDNTRFMDRFRkVBNTZDREQwMEM5NjBBMTYzN0Q0NjkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OzkpswAAAc9JREFUeNrEVUlLw0AUnknatGqhShGKIErVizfBsygVL+JFRFC8uJw9KOJycbnpz3ABF9qKeKwe3ZeT2NbisQoqNmm2mkyeY7RQEJO6FIePxzCZfPPlzfdesIGKNZiiMSNH4VtxbgJ/q5ry0tTpNJaUIoz/klpDSO3rVUOhjMdD8r7AahhfA3KgYuWuTgkgQ1FTTcxFww5Wz3QTYErOJm6Ex0cRQGtroSskd7bF64zFjand3dmJcb2jQ+c4cp9ifT60vS073crWpnZyLA6NaNaZsThWGRyWAUReyKys8fML4u5OOtgmAPA0Lbyo0ri6rDMM/EA1ioQILxDOhQf6iaJoo6Pg4F4mp1yRCJZlfWODRKPgdH7P1+/OdabTEGzFm1vg9RqNjcZ9qozBantQiSVKpmfYeMxtSoMfmI9FyH1+ydTVG3OzXp53rK3rTc0efxU3PQkNAWxu+JX5VH+llExKD09v5ltaVI4OhNSdfHur2znEhlqpKBfOz+hlPgNIh4fZQEDa36MWVOJxW2q7HsKy6PTCkRGMqysYH2NUjfT0osQ1Gw7/qhrzC4d8zBnqZamu9sXlsi1IbBTQmCAvFt787JsqfIr//ysoIvWrAAMA7mZQmc9OmukAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1035,
            "name": "Central"
          }
        ]
      },
      {
        "id": 66,
        "name": "Hungary",
        "prefixNumber": "+36",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NEM5MDFFOTE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEM5MDFFQTE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QzkwMUU3MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0QzkwMUU4MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JU411wAAAFRJREFUeNpivKSs84lhAAALEPMOhMVMDAMERp7FjKcZuP4PiMX3kzMHxuL/QDBq8ajFw8pilvgd3QNTgDBUqQ+MjxmE5UcrieFtMagF8nkgLAYIMACetyMUbe9cBgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1036,
            "name": "Bacs-Kiskun"
          },
          {
            "id": 1037,
            "name": "Baranya"
          },
          {
            "id": 1038,
            "name": "Bekes"
          },
          {
            "id": 1039,
            "name": "Borsod-Abauj-Zemplen"
          },
          {
            "id": 1040,
            "name": "Csongrad"
          },
          {
            "id": 1041,
            "name": "Fejer"
          },
          {
            "id": 1042,
            "name": "Gyor-Moson-Sopron"
          },
          {
            "id": 1043,
            "name": "Hajdu-Bihar"
          },
          {
            "id": 1044,
            "name": "Heves"
          },
          {
            "id": 1045,
            "name": "Jasz-Nagykun-Szolnok"
          },
          {
            "id": 1046,
            "name": "Komarom-Esztergom"
          },
          {
            "id": 1047,
            "name": "Nograd"
          },
          {
            "id": 1048,
            "name": "Pest"
          },
          {
            "id": 1049,
            "name": "Somogy"
          },
          {
            "id": 1050,
            "name": "Szabolcs-Szatmar-Bereg"
          },
          {
            "id": 1051,
            "name": "Tolna"
          },
          {
            "id": 1052,
            "name": "Vas"
          },
          {
            "id": 1053,
            "name": "Veszprem"
          },
          {
            "id": 1054,
            "name": "Zala"
          },
          {
            "id": 1055,
            "name": "Bekescsaba"
          },
          {
            "id": 1056,
            "name": "Debrecen"
          },
          {
            "id": 1057,
            "name": "Dunaujvaros"
          },
          {
            "id": 1058,
            "name": "Eger"
          },
          {
            "id": 1059,
            "name": "Gyor"
          },
          {
            "id": 1060,
            "name": "Hodmezovasarhely"
          },
          {
            "id": 1061,
            "name": "Kaposvar"
          },
          {
            "id": 1062,
            "name": "Kecskemet"
          },
          {
            "id": 1063,
            "name": "Miskolc"
          },
          {
            "id": 1064,
            "name": "Nagykanizsa"
          },
          {
            "id": 1065,
            "name": "Nyiregyhaza"
          },
          {
            "id": 1066,
            "name": "Pecs"
          },
          {
            "id": 1067,
            "name": "Sopron"
          },
          {
            "id": 1068,
            "name": "Szeged"
          },
          {
            "id": 1069,
            "name": "Szekesfehervar"
          },
          {
            "id": 1070,
            "name": "Szolnok"
          },
          {
            "id": 1071,
            "name": "Szombathely"
          },
          {
            "id": 1072,
            "name": "Tatabanya"
          },
          {
            "id": 1073,
            "name": "Veszprem"
          },
          {
            "id": 1074,
            "name": "Zalaegerszeg"
          }
        ]
      },
      {
        "id": 67,
        "name": "Iceland",
        "prefixNumber": "+354",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwODE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwOTE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QzkwMUVCMTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0QzkwMUVDMTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EtSEQQAAAU1JREFUeNpiZLCYzoAG/jMwPHg/dWtBFuup8/oOAqbGiqfOuNcd2TXnCIO8AAPRgImBZmDUaPoZzcJw5y2WFPL2zdvv/xi4mYE8RkaQ2P2XXxmev2L4/ZcEo8tmxWMx+t03dxvuv1fZgcy//0BiFXkuN82VGAQ5iTea8f/Hh1iEWZkZHr19uXH3i4ZaDlU1menTuBVEGAS5SXI14xURERxS/xnZOZgFBf///v3n7VtGMsL63/dvOEwGhjITMxMonv9///7/P5BPmtGM/1/cwBADB8jDty+27n/Z3sKhrCzd18ejKMogyMXwi5RorD7Nj0X43ffAOHNDNpZnNZUs7Kw8zs4LbzHc2vqAQYCHBKPbEudiTXwcSi0mot+BHmAGh0NLz847s3cyiAiTkq5VhLEYzcIkzMnE8BPkfWAgA4GSBPcdSbHRkm/kGQ0QYAC5z2/IQnQq8QAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1075,
            "name": "Austurland"
          },
          {
            "id": 1076,
            "name": "Hofudhborgarsvaedhi"
          },
          {
            "id": 1077,
            "name": "Nordhurland Eystra"
          },
          {
            "id": 1078,
            "name": "Nordhurland Vestra"
          },
          {
            "id": 1079,
            "name": "Sudhurland"
          },
          {
            "id": 1080,
            "name": "Sudhurnes"
          },
          {
            "id": 1081,
            "name": "Vestfirdhir"
          },
          {
            "id": 1082,
            "name": "Vesturland"
          }
        ]
      },
      {
        "id": 68,
        "name": "India",
        "prefixNumber": "+91",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1083,
            "name": "Andaman and Nicobar Islands"
          },
          {
            "id": 1084,
            "name": "Andhra Pradesh"
          },
          {
            "id": 1085,
            "name": "Arunachal Pradesh"
          },
          {
            "id": 1086,
            "name": "Assam"
          },
          {
            "id": 1087,
            "name": "Bihar"
          },
          {
            "id": 1088,
            "name": "Chandigarh"
          },
          {
            "id": 1089,
            "name": "Chhattisgarh"
          },
          {
            "id": 1090,
            "name": "Dadra and Nagar Haveli"
          },
          {
            "id": 1091,
            "name": "Daman and Diu"
          },
          {
            "id": 1092,
            "name": "Delhi"
          },
          {
            "id": 1093,
            "name": "Goa"
          },
          {
            "id": 1094,
            "name": "Gujarat"
          },
          {
            "id": 1095,
            "name": "Haryana"
          },
          {
            "id": 1096,
            "name": "Himachal Pradesh"
          },
          {
            "id": 1097,
            "name": "Jammu and Kashmir"
          },
          {
            "id": 1098,
            "name": "Jharkhand"
          },
          {
            "id": 1099,
            "name": "Karnataka"
          },
          {
            "id": 1100,
            "name": "Kerala"
          },
          {
            "id": 1101,
            "name": "Lakshadweep"
          },
          {
            "id": 1102,
            "name": "Madhya Pradesh"
          },
          {
            "id": 1103,
            "name": "Maharashtra"
          },
          {
            "id": 1104,
            "name": "Manipur"
          },
          {
            "id": 1105,
            "name": "Meghalaya"
          },
          {
            "id": 1106,
            "name": "Mizoram"
          },
          {
            "id": 1107,
            "name": "Nagaland"
          },
          {
            "id": 1108,
            "name": "Orissa"
          },
          {
            "id": 1109,
            "name": "Pondicherry"
          },
          {
            "id": 1110,
            "name": "Punjab"
          },
          {
            "id": 1111,
            "name": "Rajasthan"
          },
          {
            "id": 1112,
            "name": "Sikkim"
          },
          {
            "id": 1113,
            "name": "Tamil Nadu"
          },
          {
            "id": 1114,
            "name": "Tripura"
          },
          {
            "id": 1115,
            "name": "Uttaranchal"
          },
          {
            "id": 1116,
            "name": "Uttar Pradesh"
          },
          {
            "id": 1117,
            "name": "West Bengal"
          }
        ]
      },
      {
        "id": 69,
        "name": "Indonesia",
        "prefixNumber": "+62",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkxMDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkxMTE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBFMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBGMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D76wCAAAAG9JREFUeNpiPCeo9pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERi0etZhmgOXP+w8DYzGbtOQ/KPsfHUP5H+Of9x/fAxkCQPyXThYzA/EHFmYBPmYkAXoB5tHsNGrxqMXUK7mgTR5eOjd9PgMEGACLNBM7Kx9mIgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1118,
            "name": "Aceh"
          },
          {
            "id": 1119,
            "name": "Bali"
          },
          {
            "id": 1120,
            "name": "Banten"
          },
          {
            "id": 1121,
            "name": "Bengkulu"
          },
          {
            "id": 1122,
            "name": "Gorontalo"
          },
          {
            "id": 1123,
            "name": "Irian Jaya Barat"
          },
          {
            "id": 1124,
            "name": "Jakarta Raya"
          },
          {
            "id": 1125,
            "name": "Jambi"
          },
          {
            "id": 1126,
            "name": "Jawa Barat"
          },
          {
            "id": 1127,
            "name": "Jawa Tengah"
          },
          {
            "id": 1128,
            "name": "Jawa Timur"
          },
          {
            "id": 1129,
            "name": "Kalimantan Barat"
          },
          {
            "id": 1130,
            "name": "Kalimantan Selatan"
          },
          {
            "id": 1131,
            "name": "Kalimantan Tengah"
          },
          {
            "id": 1132,
            "name": "Kalimantan Timur"
          },
          {
            "id": 1133,
            "name": "Kepulauan Bangka Belitung"
          },
          {
            "id": 1134,
            "name": "Kepulauan Riau"
          },
          {
            "id": 1135,
            "name": "Lampung"
          },
          {
            "id": 1136,
            "name": "Maluku"
          },
          {
            "id": 1137,
            "name": "Maluku Utara"
          },
          {
            "id": 1138,
            "name": "Nusa Tenggara Barat"
          },
          {
            "id": 1139,
            "name": "Nusa Tenggara Timur"
          },
          {
            "id": 1140,
            "name": "Papua"
          },
          {
            "id": 1141,
            "name": "Riau"
          },
          {
            "id": 1142,
            "name": "Sulawesi Barat"
          },
          {
            "id": 1143,
            "name": "Sulawesi Selatan"
          },
          {
            "id": 1144,
            "name": "Sulawesi Tengah"
          },
          {
            "id": 1145,
            "name": "Sulawesi Tenggara"
          },
          {
            "id": 1146,
            "name": "Sulawesi Utara"
          },
          {
            "id": 1147,
            "name": "Sumatera Barat"
          },
          {
            "id": 1148,
            "name": "Sumatera Selatan"
          },
          {
            "id": 1149,
            "name": "Sumatera Utara"
          },
          {
            "id": 1150,
            "name": "Yogyakarta"
          }
        ]
      },
      {
        "id": 70,
        "name": "Iran",
        "prefixNumber": "+98",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Mzc5RDMzQjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Mzc5RDMzQzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTEyMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzNzlEMzNBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bVy5sQAAAL5JREFUeNrslDEOgkAQRf+QLUSUwsZ7eAoaOo7Aoew5AyWcwwNAsa0IWZRdnC3sXaPZxOxPJltN3uyfn6HD+bTCgyJ4UgD/P5hWlg+w4Bq49m93zA9AE5a65neByHP2zQDxxoU72B9fXcATA3XfQ1ujjIGIt6BdgqQonMDOO1YMVeMI0hpkDbjPUF33+3ClWQbB4LFtcWsaRFIitXZ/EC4nq1+SZYmVBzhWFUgI1/bBX6ovROFyBXAAf0VPAQYAymNH2XVfIfsAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1151,
            "name": "Alborz"
          },
          {
            "id": 1152,
            "name": "Ardabil"
          },
          {
            "id": 1153,
            "name": "Azarbayjan-e Gharbi"
          },
          {
            "id": 1154,
            "name": "Azarbayjan-e Sharqi"
          },
          {
            "id": 1155,
            "name": "Bushehr"
          },
          {
            "id": 1156,
            "name": "Chahar Mahall va Bakhtiari"
          },
          {
            "id": 1157,
            "name": "Esfahan"
          },
          {
            "id": 1158,
            "name": "Fars"
          },
          {
            "id": 1159,
            "name": "Gilan"
          },
          {
            "id": 1160,
            "name": "Golestan"
          },
          {
            "id": 1161,
            "name": "Hamadan"
          },
          {
            "id": 1162,
            "name": "Hormozgan"
          },
          {
            "id": 1163,
            "name": "Ilam"
          },
          {
            "id": 1164,
            "name": "Kerman"
          },
          {
            "id": 1165,
            "name": "Kermanshah"
          },
          {
            "id": 1166,
            "name": "Khorasan-e Janubi"
          },
          {
            "id": 1167,
            "name": "Khorasan-e Razavi"
          },
          {
            "id": 1168,
            "name": "Khorasan-e Shemali"
          },
          {
            "id": 1169,
            "name": "Khuzestan"
          },
          {
            "id": 1170,
            "name": "Kohgiluyeh va Buyer Ahmad"
          },
          {
            "id": 1171,
            "name": "Kordestan"
          },
          {
            "id": 1172,
            "name": "Lorestan"
          },
          {
            "id": 1173,
            "name": "Markazi"
          },
          {
            "id": 1174,
            "name": "Mazandaran"
          },
          {
            "id": 1175,
            "name": "Qazvin"
          },
          {
            "id": 1176,
            "name": "Qom"
          },
          {
            "id": 1177,
            "name": "Semnan"
          },
          {
            "id": 1178,
            "name": "Sistan va Baluchestan"
          },
          {
            "id": 1179,
            "name": "Tehran"
          },
          {
            "id": 1180,
            "name": "Yazd"
          },
          {
            "id": 1181,
            "name": "Zanjan"
          }
        ]
      },
      {
        "id": 71,
        "name": "Iraq",
        "prefixNumber": "+964",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Mzc5RDMzRjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Mzc5RDM0MDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzNzlEMzNEMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzNzlEMzNFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+A6ksKQAAANtJREFUeNpiPCeo9p9hAAATwwCBUYuHv8WM/4FgxAX1Z1I0LLizh+HJ1zdgNnJQPf76mmHDo+MMb39+IsaYzyT5+Oirawxy3KIMMtwiDOsfHmO4++k5XG7vs4sMxYf7GNbfP0yUWSzEWrrp0QmGzsurGTxkzRj6rqxjEPz7i8HOthgs13tpFcOWWzsZxJhZGR69vUu9OE4/0s9QdXYhAxcLB8OWhycYWJiYGTh4JRgufnoKlj/97h7DJzZuBlMFW4aPLOwM1z88Hk3VmD5GS5yjReaoxUPfYoAAAwDKmktuMenkLgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1182,
            "name": "Al Anbar"
          },
          {
            "id": 1183,
            "name": "Al Basrah"
          },
          {
            "id": 1184,
            "name": "Al Muthanna"
          },
          {
            "id": 1185,
            "name": "Al Qadisiyah"
          },
          {
            "id": 1186,
            "name": "An Najaf"
          },
          {
            "id": 1187,
            "name": "Arbil"
          },
          {
            "id": 1188,
            "name": "As Sulaymaniyah"
          },
          {
            "id": 1189,
            "name": "At Ta'mim"
          },
          {
            "id": 1190,
            "name": "Babil"
          },
          {
            "id": 1191,
            "name": "Baghdad"
          },
          {
            "id": 1192,
            "name": "Dahuk"
          },
          {
            "id": 1193,
            "name": "Dhi Qar"
          },
          {
            "id": 1194,
            "name": "Diyala"
          },
          {
            "id": 1195,
            "name": "Karbala'"
          },
          {
            "id": 1196,
            "name": "Maysan"
          },
          {
            "id": 1197,
            "name": "Ninawa"
          },
          {
            "id": 1198,
            "name": "Salah ad Din"
          },
          {
            "id": 1199,
            "name": "Wasit"
          }
        ]
      },
      {
        "id": 72,
        "name": "Ireland",
        "prefixNumber": "+353",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Mzc5RDM0MzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Mzc5RDM0NDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzNzlEMzQxMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzNzlEMzQyMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fGQZ6wAAADBJREFUeNpiZJiVzIAb/E+dg0eWodkOjyQTA83AqNGjRo8aPWr0qNGjRtPOaIAAAwDApAPmE9cHWgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1200,
            "name": "Carlow"
          },
          {
            "id": 1201,
            "name": "Cavan"
          },
          {
            "id": 1202,
            "name": "Clare"
          },
          {
            "id": 1203,
            "name": "Cork"
          },
          {
            "id": 1204,
            "name": "Donegal"
          },
          {
            "id": 1205,
            "name": "Dublin"
          },
          {
            "id": 1206,
            "name": "Galway"
          },
          {
            "id": 1207,
            "name": "Kerry"
          },
          {
            "id": 1208,
            "name": "Kildare"
          },
          {
            "id": 1209,
            "name": "Kilkenny"
          },
          {
            "id": 1210,
            "name": "Laois"
          },
          {
            "id": 1211,
            "name": "Leitrim"
          },
          {
            "id": 1212,
            "name": "Limerick"
          },
          {
            "id": 1213,
            "name": "Longford"
          },
          {
            "id": 1214,
            "name": "Louth"
          },
          {
            "id": 1215,
            "name": "Mayo"
          },
          {
            "id": 1216,
            "name": "Meath"
          },
          {
            "id": 1217,
            "name": "Monaghan"
          },
          {
            "id": 1218,
            "name": "Offaly"
          },
          {
            "id": 1219,
            "name": "Roscommon"
          },
          {
            "id": 1220,
            "name": "Sligo"
          },
          {
            "id": 1221,
            "name": "Tipperary"
          },
          {
            "id": 1222,
            "name": "Waterford"
          },
          {
            "id": 1223,
            "name": "Westmeath"
          },
          {
            "id": 1224,
            "name": "Wexford"
          },
          {
            "id": 1225,
            "name": "Wicklow"
          }
        ]
      },
      {
        "id": 73,
        "name": "Israel",
        "prefixNumber": "+972",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMxQzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzVCNDMxRDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzFBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzFCMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5PxNOAAAAaFJREFUeNrEVjtIA0EUnD3vEj9IiIlooSJYCmK0UAloIdhouhSinZBKIZ2dqIi1hZWFQRFBsJWUghaCkPhBBBsl0SIBTUhyBM391r0oClaXTcwNLHss3A0z8/a9I5QBNkDsm7uU2d5aZ15ZfLrLwxbFyKl8b5LvnTMosraXKPBY3eGWQAhBOqtwWU1YbXERKxqFrlM0OQUuYoE3I//SNQYWYlVkbBG6QRGJpiGpBk4fZMTYAlMcXL1HYMiNIss6NNMJSbSmxbLV5m0fXbxC7CIDV08zlme70egQsHHwjGyyiH6fG7e7w2gQiCWrYRJTi1BUg3qnzunW8cvPWSSaom2TZ/RD0WkFKFSUsSQSaKyoBPKrSmBf0JjlTkn4n4xNq8fDN8i9lrB5mCwTmlavRBIovJXgC8UR3xli56S2xAZjDk60Y97vKRdXePsRBiu46TEPAixvmT3rxpcDNS2uvxhkCnOyhsTRSH0bSL6oQWV5e10S35BY309yNQCzZZp5pjIKX69G1wmX4iqHhCzC47BnLHp7W2whJu8l3ZZfn08BBgBy6AUOH3COZgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1226,
            "name": "Central"
          },
          {
            "id": 1227,
            "name": "Haifa"
          },
          {
            "id": 1228,
            "name": "Jerusalem"
          },
          {
            "id": 1229,
            "name": "Northern"
          },
          {
            "id": 1230,
            "name": "Southern"
          },
          {
            "id": 1231,
            "name": "Tel Aviv"
          }
        ]
      },
      {
        "id": 74,
        "name": "Italy",
        "prefixNumber": "+39",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMyMDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzVCNDMyMTE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzFFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzFGMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oQE2+QAAAJNJREFUeNpiZJjk9pSBgUEKiD8zYAM/PjHy8Ir9fZK47D8/OzcLUOQ/A3bA+O/nz79Xnf0Yftx7wMwiJIhLHS8QP2OBMhiQaGzgH5RmYsAP/kMxIXW8hBSgG0oNNUT5gGZg1OJRi0ctHrV41OJRi4e2xYxUUgMGLNAmDy/Opg/EsL/QSh5v0weqDgSY8agD2wUQYAAUKyFbP8LJRAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1232,
            "name": "Abruzzo"
          },
          {
            "id": 1233,
            "name": "Basilicata"
          },
          {
            "id": 1234,
            "name": "Calabria"
          },
          {
            "id": 1235,
            "name": "Campania"
          },
          {
            "id": 1236,
            "name": "Emilia-Romagna"
          },
          {
            "id": 1237,
            "name": "Friuli-Venezia Giulia"
          },
          {
            "id": 1238,
            "name": "Lazio"
          },
          {
            "id": 1239,
            "name": "Liguria"
          },
          {
            "id": 1240,
            "name": "Lombardia"
          },
          {
            "id": 1241,
            "name": "Marche"
          },
          {
            "id": 1242,
            "name": "Molise"
          },
          {
            "id": 1243,
            "name": "Piemonte"
          },
          {
            "id": 1244,
            "name": "Puglia"
          },
          {
            "id": 1245,
            "name": "Sardegna"
          },
          {
            "id": 1246,
            "name": "Sicilia"
          },
          {
            "id": 1247,
            "name": "Toscana"
          },
          {
            "id": 1248,
            "name": "Trentino-Alto Adige"
          },
          {
            "id": 1249,
            "name": "Umbria"
          },
          {
            "id": 1250,
            "name": "Valle d'Aosta"
          },
          {
            "id": 1251,
            "name": "Veneto"
          }
        ]
      },
      {
        "id": 75,
        "name": "Jamaica",
        "prefixNumber": "+1876",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMyNDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU2ODE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzIyMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzIzMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KsC74wAAA+VJREFUeNqsVttPk2cY/30tVAVKC1SRo3jAAjswnXFL3NwfsFvNlgXn1OjFoomJxgsvjInxZtNh1HnIZHPOw1iyLWEXS1y2zIsly2KiMcZjQRGwA1pBaEsp7ffs9/b9KhQ/AhPf5Pf1OzzP+zzP7zm8NdYe8Q/905sPt8tEVUECAkDU5SUuQ4GXx9FcDIw6sWJ+DIb5EHLhfglabpXgr2ABiuakUJE/lpaerQMZg8FYLkIjOVhdGsGm+jA2LA/DkACD9ALmMPDtvRKcu+PD3/9qBirzE2lF8386oHTUUhEOMsKVjHBjXRib/CG4PNzsKWUYlaCHUnHCQyMR4GKgGGdv+9IMFLo0AzNxQMkYGKd0dWk0bbCpNow5hVQe4sdcogpwLl6A/W808qGSGKAiWX69ZgQfLwmjujCB7qgL10N5iKcc8DINMOwpdShKafBRxIWG4jj2rgriyJourFocQ84oBUyiRsu3XtQ6Uu8Hdn0KbGniUzHxHAP2NaAq0S6HdhEqes9fAr44CVy78Uxdr9fq6cAOYON6PvgUZ8QIMbkG2AUqeochCNOgXQ7hsljkfeuPwKFjwNXr2UzJZDT4IWeOsqj7CNaAdBMsQumHpB5AvrtcLG8frpM3P2+Qr371SbzdSH+TduKRpfOEcqcgKxqf3z8T7FQfpK4WcvZLbVBtlgpYDtCh6B1Dnt52aOc6IMn7lsFByPctkMZXp953WsMZFBVB9uyADCkDjGj0Lg081FD3Y52QCO/37YaULph+P4WcmfTlAKt9mEUmhi7hZ+5OaCP1GIkCofDM+31KrxZVQpoPktZOi2pGLPc01Qn+xu5adUCakwEtk3wMOXUYUrvkBaiuKIMcOsDNe6y89Y4blC5I2xWPrG32y1sssB9+LxLptOpA5TmodUzqHP8MsrTG3nBWO1WV63ba+hGQV80XvdC9yHYCh8DPAS++5kT7s8eNeTlmemgMJ5x4p3wYm+tC+GA5czKPsoNEPlEGJINASyvb6SgQeJA9dKRiIbCTA2T7J8Bc1ex9lkGPNtjW4eUA8eG3rkLMdZqo5inmdOgN1Bjt4rSKjTnwXgUdaAhh/VI6kJftQIoOnDwHNHOAdHTSsMrhtiYrwn5L2Ksn10/tXnyjIux2I9cJLHKPpqOcPLMz79S4jCcdWFMWweb6ED6sfTLuQAGxUDtw5lLmkOjTEyZD6S8dHpy+OR9/dDNCUlrtZoQzOCQyDigGomTg3fIItr3Sj3UTGbAcMFTR2OXQ5ZQ0pY4XOBYzOuqAUSmwqwFDjcO2dvscmrP8IzCRgawaWDYA4/0Ty4auTJPD2S67GvhPgAEAIEVx8Ck6yuQAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1252,
            "name": "Clarendon"
          },
          {
            "id": 1253,
            "name": "Hanover"
          },
          {
            "id": 1254,
            "name": "Kingston"
          },
          {
            "id": 1255,
            "name": "Manchester"
          },
          {
            "id": 1256,
            "name": "Portland"
          },
          {
            "id": 1257,
            "name": "Saint Andrew"
          },
          {
            "id": 1258,
            "name": "Saint Ann"
          },
          {
            "id": 1259,
            "name": "Saint Catherine"
          },
          {
            "id": 1260,
            "name": "Saint Elizabeth"
          },
          {
            "id": 1261,
            "name": "Saint James"
          },
          {
            "id": 1262,
            "name": "Saint Mary"
          },
          {
            "id": 1263,
            "name": "Saint Thomas"
          },
          {
            "id": 1264,
            "name": "Trelawny"
          },
          {
            "id": 1265,
            "name": "Westmoreland"
          }
        ]
      },
      {
        "id": 76,
        "name": "Japan",
        "prefixNumber": "+81",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREQ2NTU2QjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU2QzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTY5MTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTZBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sXSjEQAAAbhJREFUeNrklt8rg1EYx79n3k2WrWGY363EkgtJSVntgguJi5UbbuTSrf/CHTeukDulUVJKCRciGVIYiYvNhqZmm9H2eo/nfWlcbW9sk5zT89TpfTqf59c552Wc8xsAlSQR5GYYSPyMwOGPRS5H5O+BeUKUNZhWmxtwYHqBxIWn00vicugbrbAMO1E1OpgdsBR9wYFjCF73IuQYtSghzZDAAwlHVVMPWrfmIZiNmQXvdfbBt72CIjTQSiO78vGFKTqEc1haHOg43FAF1qix8k7Nwp+E4gtUqbYiJjTi9mgT1+OTqnKtCny3sAyBImNpzHVkdb+0mhnw6/MTYsfXtKmZ4pJS9TnVvRgvF36IsejPwVyenCdrmf6cJdXPwEJBIfTNdYgjmMZc7vAQ8ustEPSGzNS4zNkLUUkzT4Fl5Fwcpf3dqhKj+jjttHXh1r1OnW1T0v/pBFNmCB6Ybe3oPNlVE476cywGw9i3D8DvWUM+de97s0G5QOKky2vtaNt2QVddmvkrk0sSfBNzCMy4EDu7oqaToG+wooKuzJqxETAhL/uPhPgYlT2BYDLiGyPyP9/jX/n1eRNgAFs4yk+Ai07FAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1266,
            "name": "Aichi"
          },
          {
            "id": 1267,
            "name": "Akita"
          },
          {
            "id": 1268,
            "name": "Aomori"
          },
          {
            "id": 1269,
            "name": "Chiba"
          },
          {
            "id": 1270,
            "name": "Ehime"
          },
          {
            "id": 1271,
            "name": "Fukui"
          },
          {
            "id": 1272,
            "name": "Fukuoka"
          },
          {
            "id": 1273,
            "name": "Fukushima"
          },
          {
            "id": 1274,
            "name": "Gifu"
          },
          {
            "id": 1275,
            "name": "Gumma"
          },
          {
            "id": 1276,
            "name": "Hiroshima"
          },
          {
            "id": 1277,
            "name": "Hokkaido"
          },
          {
            "id": 1278,
            "name": "Hyogo"
          },
          {
            "id": 1279,
            "name": "Ibaraki"
          },
          {
            "id": 1280,
            "name": "Ishikawa"
          },
          {
            "id": 1281,
            "name": "Iwate"
          },
          {
            "id": 1282,
            "name": "Kagawa"
          },
          {
            "id": 1283,
            "name": "Kagoshima"
          },
          {
            "id": 1284,
            "name": "Kanagawa"
          },
          {
            "id": 1285,
            "name": "Kochi"
          },
          {
            "id": 1286,
            "name": "Kumamoto"
          },
          {
            "id": 1287,
            "name": "Kyoto"
          },
          {
            "id": 1288,
            "name": "Mie"
          },
          {
            "id": 1289,
            "name": "Miyagi"
          },
          {
            "id": 1290,
            "name": "Miyazaki"
          },
          {
            "id": 1291,
            "name": "Nagano"
          },
          {
            "id": 1292,
            "name": "Nagasaki"
          },
          {
            "id": 1293,
            "name": "Nara"
          },
          {
            "id": 1294,
            "name": "Niigata"
          },
          {
            "id": 1295,
            "name": "Oita"
          },
          {
            "id": 1296,
            "name": "Okayama"
          },
          {
            "id": 1297,
            "name": "Okinawa"
          },
          {
            "id": 1298,
            "name": "Osaka"
          },
          {
            "id": 1299,
            "name": "Saga"
          },
          {
            "id": 1300,
            "name": "Saitama"
          },
          {
            "id": 1301,
            "name": "Shiga"
          },
          {
            "id": 1302,
            "name": "Shimane"
          },
          {
            "id": 1303,
            "name": "Shizuoka"
          },
          {
            "id": 1304,
            "name": "Tochigi"
          },
          {
            "id": 1305,
            "name": "Tokushima"
          },
          {
            "id": 1306,
            "name": "Tokyo"
          },
          {
            "id": 1307,
            "name": "Tottori"
          },
          {
            "id": 1308,
            "name": "Toyama"
          },
          {
            "id": 1309,
            "name": "Wakayama"
          },
          {
            "id": 1310,
            "name": "Yamagata"
          },
          {
            "id": 1311,
            "name": "Yamaguchi"
          },
          {
            "id": 1312,
            "name": "Yamanashi"
          }
        ]
      },
      {
        "id": 77,
        "name": "Jordan",
        "prefixNumber": "+962",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREQ2NTU2RjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU3MDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTZEMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTZFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QGsVzQAAApVJREFUeNq8lM1rE1EUxc97M5mZhExNG6F2oTRtzKapdVWJICIuVCguigtB/AMKUlz0X9FaqQtB6S6IYkMKIoJIRRDUhSt14UcVTWLSNsl8ZJ53Mk7aGLtoMu2FSZj3ePzOOfe+YXf1w1/nawV91a5iP4uVDqaFJQRyZgUL9SJeWJv7A37Vn6pojOkJrqAqHDwkAYv1AlatvU2AvSYw/esN+tHAkJA8AcvmelPA8z1KoAX2F3wBwyTAoBY8MstYqFECAc9AB/h/AmqUQNAzsCO4TQCjFvydgaWNNeRiGpSp85AjGswva3AMY9dguVMKg1OtQdg2JD0Kid7dqX/fMJoJXNHiuEwidDWO8OwMkEwE5NgBBDljnEGYFpim0YKzdYJzcNOGsf4JHCoGpqcxNHcN4cyJXYH59hdhWbCqvzBy7wbGP7yEejQB6/f39hOOA0fmUOIp8MggfmTv483J03g7NonCUrY7MCUJAXKpKpAH+sEkyVvcqSROuzKFZMAuFCHqhhtXF1FTP4VlkhwJ8oE+2MUSWEj18m+doKhtQlU+NnXHzl7Aoesz6Js618NwkVquaGhsbMAof4YcixFIuDHAIeMy8YdKm2SUI3rxKtS5WeDU8a6Gq2OqhdOg3oWbjzdrAjKBEyW72ZdsMoTlM0egXJqAEn4H60EeTr0ewHXy7y85VMjhCAHdepLUsDgZRW6CuiLT7X58E6Br1211gP1IXaA7JvmUhjsEXBmL0JeEPBctwKad6CA96B28HejW01ENtzJR5McJqNBmiVxWGt6Qs94/mbIP9HuYT4WbDvNp6rFKm8WG5zAgYOty/OSjIuSIrR4ei3hA16ElAoW1OX42rH67nYnqK2m/hxR1OXiH/9YfAQYA1jgMxWJoPhoAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1313,
            "name": "Ajlun"
          },
          {
            "id": 1314,
            "name": "Al 'Aqabah"
          },
          {
            "id": 1315,
            "name": "Al Balqa'"
          },
          {
            "id": 1316,
            "name": "Al Karak"
          },
          {
            "id": 1317,
            "name": "Al Mafraq"
          },
          {
            "id": 1318,
            "name": "'Amman"
          },
          {
            "id": 1319,
            "name": "At Tafilah"
          },
          {
            "id": 1320,
            "name": "Az Zarqa'"
          },
          {
            "id": 1321,
            "name": "Irbid"
          },
          {
            "id": 1322,
            "name": "Jarash"
          },
          {
            "id": 1323,
            "name": "Ma'an"
          },
          {
            "id": 1324,
            "name": "Madaba"
          }
        ]
      },
      {
        "id": 78,
        "name": "Kazakhstan",
        "prefixNumber": "+7",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMzkyMjdBRTE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMzkyMjdBRjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTcxMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTcyMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+44EnowAAAkpJREFUeNq0lc9rE1EQx2fee7ub3cSyjbXWIgFFS7A9FC+iVEWk9KQI9qIYPHjyJBQE/wSxh4J48qpQwSL2UFA8tPESUC/tRVotKCX+SO2WpMlu9ufzvRybZCOYDLuw7M77MPOdH4vwugC9MQI9M4lWIKAQAWCX0SaxF9OPcsZ7CNPdRTMKYZYVB7ACnLV348A14AmZGdbl9Q8psjpX37rjG8GRxoGWFgE3EOvDrKRAWAxNn6cA7Y50ZqB3mFiDtALIG968KWLDJJWriUJOX2Hov3AuvnQuWJEJ6HRAB0Bdrnqt1RDx6hDpp7TV+8nFMUO26VFS3giGlp3zQKIGvW2PEZdLdFXoyGlTyFQTiRNH4EeVLeAIkXpC+d5HPPFSlVwa1yEGumfV9WO0JJtwn4XpW0b+wYH5Vf/4G3dcKCNYy+7pT97ITGrhhp6HsD++jNpH/+S38BBA0PSVOpxeS3x4WJ2+V75T8LIKBvPOxK8oedtYeVybAq7GoRmKYeE6eoDB/jKSnQV7aoT+vptcemZfmq1eN9G2eCKn59+5Y6/sSaBWHFoBPynUFOhmQ9+LUk9qV86omxPqepZtbQaZc+qazbW5vZu74UGg2zFyM+FXCs3tqK9V5xEg1p9wYMkZ7ic7GfpzVP3sAz63LxeDDLAfjcq3j1pDf1Jb+yJGJtKBlJvlBlID2NvlxtPqNJAqhINyXjpxJZoDfg2GLDlgftwWk/PtygfZS7wjV8op9nUS6wEwlystRvF/1pO4a3LvQHe5vf8V9Mj+CjAATRXoTFoxM8YAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1325,
            "name": "Almaty Oblysy"
          },
          {
            "id": 1326,
            "name": "Almaty Qalasy"
          },
          {
            "id": 1327,
            "name": "Aqmola Oblysy"
          },
          {
            "id": 1328,
            "name": "Aqtobe Oblysy"
          },
          {
            "id": 1329,
            "name": "Astana Qalasy"
          },
          {
            "id": 1330,
            "name": "Atyrau Oblysy"
          },
          {
            "id": 1331,
            "name": "Batys Qazaqstan Oblysy"
          },
          {
            "id": 1332,
            "name": "Bayqongyr Qalasy"
          },
          {
            "id": 1333,
            "name": "Mangghystau Oblysy"
          },
          {
            "id": 1334,
            "name": "Ongtustik Qazaqstan Oblysy"
          },
          {
            "id": 1335,
            "name": "Pavlodar Oblysy"
          },
          {
            "id": 1336,
            "name": "Qaraghandy Oblysy"
          },
          {
            "id": 1337,
            "name": "Qostanay Oblysy"
          },
          {
            "id": 1338,
            "name": "Qyzylorda Oblysy"
          },
          {
            "id": 1339,
            "name": "Shyghys Qazaqstan Oblysy"
          },
          {
            "id": 1340,
            "name": "Soltustik Qazaqstan Oblysy"
          },
          {
            "id": 1341,
            "name": "Zhambyl Oblysy"
          }
        ]
      },
      {
        "id": 79,
        "name": "Kenya",
        "prefixNumber": "+254",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMzkyMjdCMjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMzkyMjdCMzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYzOTIyN0IwMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYzOTIyN0IxMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4JAoOgAAAoJJREFUeNq8Vs9LG1EQ/jb74o8kdWOktWuKSamUtoqnekmRQA71UKjkIJSeEqgtmEIv/hXBgz2mpRcRkh6D1IMVSi7iIVBBPFRarIamIsWsRpq4yeY5m24llZa89JCFb9/MvmG+nXkzOysB+EYYIBTRnusSIS/R7dhS2nkVhYllWYYkSahWq3/dZ4zV13/tXySGRcybQVVVHolEznXJwm89Go1yv9/PRXxZnGLEJlKpFH8+O1uXX4+N8cVA4BdpLMbT6bQoaZ2Y9fp8TfNipvgwl8PbpSU8mJnB1NwcnoyPA4qCd2truBsOI5VM1m09fj845019si/r60LVYLfbodE5VohohPRdtxvM48ELki8XCng4P49X8Tgqui7kj+WDQeFSdBD56v4+nCSrNhsljWOP5I/T0wh5vTimwhKJtk68u70tFrG1viQ8JgQyGVTpRfIkv9E0eAkOkk8Fg2AdLXT9AWGL8J3QPzwM3tmJ/PIyNkk3CC6rcoSIW+l63rDaKFpOZ95IJLXgi1UEDU8I3YRb5vmaUWezqBG5+a29Y0Vg2oj6Y1f7BoTf0ikzxH4eQTk5ghwKwd7TA3VlBc8cLlx3eaAbVfGIb25lhQxtkozqlV5Mvf+AnfsTdKYcEqV6kPaCiwtwhSchH/xAjRtixLcXJoQMy0YZ1xQfPN4R3PAAiRwltmBDnKpus7aKYiKBr4ef4WAOIX8SHglOpzIwOjiKQtcpcjufkCzdg6PGMNmdgTo0hP6SCxt7G0CX6HR6Kj4WFUlBSS9Bd+tgGj2o0TTqox4v2OHscELjWgtjsQXi894x+0a2ZOPCc0Hilvr4D8fGfzZwwwekaEXczl+f4pkAAwBDiPf/eEPUkQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1342,
            "name": "Central"
          },
          {
            "id": 1343,
            "name": "Coast"
          },
          {
            "id": 1344,
            "name": "Eastern"
          },
          {
            "id": 1345,
            "name": "Nairobi Area"
          },
          {
            "id": 1346,
            "name": "North Eastern"
          },
          {
            "id": 1347,
            "name": "Nyanza"
          },
          {
            "id": 1348,
            "name": "Rift Valley"
          },
          {
            "id": 1349,
            "name": "Western"
          }
        ]
      },
      {
        "id": 80,
        "name": "Kuwait",
        "prefixNumber": "+965",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUZGOTk4RTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUZGOTk4RjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1RkY5OThDMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1RkY5OThEMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rNTKhQAAAX1JREFUeNrElktLw0AUhc8kadMmBhcttN1Y3IkguBC1goKPRRHxN4jiThR0r4KI/82NOxdaEZWKD9Qi9pXX9aatIhQhixm9cDfJJGc+zpnLGJgcrWJz1UExD9w+Al4AaAKqK1IgWClgfQVYngHqTeC5BuiaUmGdew+eb+L0HLh5AEaKwHAB+OAN+EwvhDLid27n+4mVBjaYvjwNNNvA05sS+n7hryqNdTcwlFPi/e/CUdk978sl4KoCNFrdL5QL90qbG8fS/q5vhiAKQvFnwiZ3q1YnDFoEScyxUkPJJF7dhuitFzI6dlx9CqWmWsM/VXxhyWfZiLPIDT1QJkud8SopXLGEF3UH4dpOcGcmKSBSf5wMfn1g57CVyqD6UuGFnvrJtZAYwJGdx1TCwkXQRp1TrUOo8zj6eSQYUbbZ0jO/yQkUUkX7hOeZ8phFJ5jykikbkin7LgIR0SF7uZ3O8qAgXIduh1LlPcSYTdj3J3bBmepQuuxloIzyZ30KMABBFnf5qa4SdQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1350,
            "name": "Al Ahmadi"
          },
          {
            "id": 1351,
            "name": "Al Farwaniyah"
          },
          {
            "id": 1352,
            "name": "Al Asimah"
          },
          {
            "id": 1353,
            "name": "Al Jahra"
          },
          {
            "id": 1354,
            "name": "Hawalli"
          },
          {
            "id": 1355,
            "name": "Mubarak Al-Kabeer"
          }
        ]
      },
      {
        "id": 81,
        "name": "Kyrgyzstan",
        "prefixNumber": "+996",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUZGOTk5MjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUZGOTk5MzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1RkY5OTkwMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1RkY5OTkxMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZagutAAAAeJJREFUeNq0lc1qFEEUhb/bVT1Dz2gkShZRUQP+LDRushNXvoDuBcGFa0EXbnwIX0BcKAr6Ej6AgpsoYiAoKgnqxskkM9PVdb3V4nKmZwan6UUXRZ976px7bsnO8jqLefyxpTWR7L/jqkafZX4RlI2uN/ipWFcwEgRyxU3Huqk6BBgIVv2QEmFfUplCyUnLCVo34I4MWjhesV7KpWDf+t7z0fPVpQJtReeDDjXu+SA3DzgV+OGsmFwu2XH6vOCDp5wEMFFlE3e1klv7xk5fdBiKFdNXhekgt/ucrChlLkHsvKbmxcBh5YuTtaBPO0SVa0N6wopi9O0cYSzGeNZRjKxcKPnsWFZOV3QjS8pq5Gjkk5eNkiJSyeystX5bqTH0ZcFKJQ97tNFHXXYzuT5INkht9cxaZ5r6wZrhXGAAW16ujGRjyHdHL+Ns0HeefobT2VnbzgG8zblayt2+Pu7ogyMJqFC50+enYzNPxnZ0rg6x4O06fVaYb3J/j1aKjNzbM4f1SZFauzUpMxLO3Bgb9L+RMaNO1JGxbjHpN72+yfnmUtzHR6Yp6PZbG8rUfIalrzUVMxHKGjRnQhSb0kg9JYxdN1maJgn/ljTgJuhph7VX/IxDNcawqKvg1+/tBV1gfwQYAP8yvkoLLzQ/AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1356,
            "name": "Batken Oblasty"
          },
          {
            "id": 1357,
            "name": "Bishkek Shaary"
          },
          {
            "id": 1358,
            "name": "Chuy Oblasty"
          },
          {
            "id": 1359,
            "name": "Jalal-Abad Oblasty"
          },
          {
            "id": 1360,
            "name": "Naryn Oblasty"
          },
          {
            "id": 1361,
            "name": "Osh Oblasty"
          },
          {
            "id": 1362,
            "name": "Talas Oblasty"
          },
          {
            "id": 1363,
            "name": "Ysyk-Kol Oblasty"
          }
        ]
      },
      {
        "id": 82,
        "name": "Latvia",
        "prefixNumber": "+371",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTY0MkY2RDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTY0MkY2RTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNjQyRjZCMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxNjQyRjZDMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+92Hw/QAAAF1JREFUeNpibBNT/sQwAIAFiHkHwmImhgECoxbTL3F9f/d+YCzml5MZEIsZf37+8n9ALP4PBCMrcf368nVgLJ6sbzUwFn989GRgLOYUEhwtMkctplkL5PNAWAwQYABbtBShZM+mNQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1364,
            "name": "Aizkraukles Rajons"
          },
          {
            "id": 1365,
            "name": "Aluksnes Rajons"
          },
          {
            "id": 1366,
            "name": "Balvu Rajons"
          },
          {
            "id": 1367,
            "name": "Bauskas Rajons"
          },
          {
            "id": 1368,
            "name": "Cesu Rajons"
          },
          {
            "id": 1369,
            "name": "Daugavpils"
          },
          {
            "id": 1370,
            "name": "Daugavpils Rajons"
          },
          {
            "id": 1371,
            "name": "Dobeles Rajons"
          },
          {
            "id": 1372,
            "name": "Gulbenes Rajons"
          },
          {
            "id": 1373,
            "name": "Jekabpils Rajons"
          },
          {
            "id": 1374,
            "name": "Jelgava"
          },
          {
            "id": 1375,
            "name": "Jelgavas Rajons"
          },
          {
            "id": 1376,
            "name": "Jurmala"
          },
          {
            "id": 1377,
            "name": "Kraslavas Rajons"
          },
          {
            "id": 1378,
            "name": "Kuldigas Rajons"
          },
          {
            "id": 1379,
            "name": "Liepaja"
          },
          {
            "id": 1380,
            "name": "Liepajas Rajons"
          },
          {
            "id": 1381,
            "name": "Limbazu Rajons"
          },
          {
            "id": 1382,
            "name": "Ludzas Rajons"
          },
          {
            "id": 1383,
            "name": "Madonas Rajons"
          },
          {
            "id": 1384,
            "name": "Ogres Rajons"
          },
          {
            "id": 1385,
            "name": "Preilu Rajons"
          },
          {
            "id": 1386,
            "name": "Rezekne"
          },
          {
            "id": 1387,
            "name": "Rezeknes Rajons"
          },
          {
            "id": 1388,
            "name": "Riga"
          },
          {
            "id": 1389,
            "name": "Rigas Rajons"
          },
          {
            "id": 1390,
            "name": "Saldus Rajons"
          },
          {
            "id": 1391,
            "name": "Talsu Rajons"
          },
          {
            "id": 1392,
            "name": "Tukuma Rajons"
          },
          {
            "id": 1393,
            "name": "Valkas Rajons"
          },
          {
            "id": 1394,
            "name": "Valmieras Rajons"
          },
          {
            "id": 1395,
            "name": "Ventspils"
          },
          {
            "id": 1396,
            "name": "Ventspils Rajons"
          }
        ]
      },
      {
        "id": 83,
        "name": "Lebanon",
        "prefixNumber": "+961",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTY0MkY3MTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTY0MkY3MjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNjQyRjZGMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxNjQyRjcwMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KNMpfwAAAapJREFUeNrsVd0rg1EY/x2bNWab0aLEBWIkn+XChVJSSv4AKXfyH7hyq5SvcqeUK5I7VzIpLnxESzOTYhOab5t3693hffc+TnPP+5Zxs1+dntM5T8/v+TjPc1iqpZTwD8jBPyFL/GdgWvRFEtKuT53AcnIBmwNjO1OotpVgqH0QkDmIx0UYJr28cRCRRAbhjZ4RFlsJS13U65uhGKlGTUiGUx1O3GF0exJ19gaUMSe8vlWEX68yX+MJ/xIu4xHcJO5FtjR4imsxf74GRVMN2TEbUQ5Ew0ioHLL6DpclX5TUgsBTEIHbAzS6qjDi6c8M8fLFOnyPpyjKKwQXDihKEg6rExXuepzEQuCpD1iFM79K7I9eQjFb8fB0BkkQVJd3ICSiJVIR4G+wiztJkX+feP8xCL8gne6ZwLGQs3uzcLjrMN42nK65U6R+M3KEgcpunZ2ps504aRQiOb2fu9ogzHsIC00UlK7TZymxDpMRklSuq50YJeWfB4h4vRARwcSwFd7FM4+hs7QZ06crqCgowXBNHywWx1ePKBzQhD5j3w4Qlv0Ws8SZwqcAAwBwcmoqHHZSowAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1397,
            "name": "Beyrouth"
          },
          {
            "id": 1398,
            "name": "Beqaa"
          },
          {
            "id": 1399,
            "name": "Liban-Nord"
          },
          {
            "id": 1400,
            "name": "Liban-Sud"
          },
          {
            "id": 1401,
            "name": "Mont-Liban"
          },
          {
            "id": 1402,
            "name": "Nabatiye"
          }
        ]
      },
      {
        "id": 84,
        "name": "Lesotho",
        "prefixNumber": "+266",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDVDQzk4MDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMDVDQzk4MTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNUNDOTdFMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNUNDOTdGMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0nsttgAAARhJREFUeNrslc9Kw0AQxr9Nd/uHNFSQHEqoKCrWIsV3EHydPEz1Fih4EfIMOXnOQTA3D1FQ6ik2K0hJ6o6rB8/ZHCyUfDDsZWd+sx+zuxz7c8IGZGFDasDbD2ZLWUi9OlUThBBotYDZ7ApluYbv+2CMoShKE+4HHzjCuNvnp0ck93dQSmHxconDowl6HbM6vI5Nijg+V9An/tKedWpZXQvseR7iOEae53Bd9/+GKwxDpGmKLMsQBEG96SIiSQaKoog45z/P7F/oRshQ0gi8zN7pYDgip92j6fGEzk/OaKfbpz13SG+vCyMwL9S6kjNti0PYXQS3N0iSB0gpYel7Zds2Tsdj9HcHv/uq1mO4vmh+pwa8XeBvAQYA1mkQ97LOB/MAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1403,
            "name": "Berea"
          },
          {
            "id": 1404,
            "name": "Butha-Buthe"
          },
          {
            "id": 1405,
            "name": "Leribe"
          },
          {
            "id": 1406,
            "name": "Mafeteng"
          },
          {
            "id": 1407,
            "name": "Maseru"
          },
          {
            "id": 1408,
            "name": "Mohale's Hoek"
          },
          {
            "id": 1409,
            "name": "Mokhotlong"
          },
          {
            "id": 1410,
            "name": "Qacha's Nek"
          },
          {
            "id": 1411,
            "name": "Quthing"
          },
          {
            "id": 1412,
            "name": "Thaba-Tseka"
          }
        ]
      },
      {
        "id": 85,
        "name": "Liberia",
        "prefixNumber": "+231",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDVDQzk4NDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMDVDQzk4NTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNUNDOTgyMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNUNDOTgzMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+G0pyRwAAAdFJREFUeNrklM9LVFEUxz/3vZlyZnyKNNXkGIhDmZtEaKEEZuBiFJfSJpyCgpYGEW1cuHLTP1ETCOqiGYJxIUgMtBpoIUVgPxQdTcksnljjNPOeZ17TIghqcfEtOnDfu++eCx/O93zPU5wf2gAsfkWlAqYJSv1cEpnVIgMHJdYx0BUBWa3ergZxHCiVIdQgGYFU5VuOw73dBIIBGl1XI1ipPUzDYn0LvpVI3btJemYeVopw5qTcMOl4niYilyOgEVytova/k7yWpL0txsMHt+hKnGXp5Rtmc3lJO3xJZ6nEopS0gkVLt/yDyqddJqbuEhGZ798eZezOJG5N2tBxPtxIkcDmPUobWNE5bAvBYvk1T7KP6O/p4m1xi8ErKYi2iL4hXlwf4VJLE3saK1bialsMZUVbTzHY183cTI7kyFWBb7OcL4AAV9YWaUdvKOIDtjwtz9UfdzxpPWefaJZsbXxcFnovcjncwGetPT4WrG+ln22nwaiNVX1sTMM7tp/mKIu1dnX2+J29b//2A/lDxF0HmWwcnVKLc/8Kpg41dEr9Sl3AjwhYQ/2+gP9Zau0Vf32c8afiAsqfis9NP/vPerw2Om75UvESiU15Nx41+FCAAQBN8o5alKABbgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1413,
            "name": "Bomi"
          },
          {
            "id": 1414,
            "name": "Bong"
          },
          {
            "id": 1415,
            "name": "Gbarpolu"
          },
          {
            "id": 1416,
            "name": "Grand Bassa"
          },
          {
            "id": 1417,
            "name": "Grand Cape Mount"
          },
          {
            "id": 1418,
            "name": "Grand Gedeh"
          },
          {
            "id": 1419,
            "name": "Grand Kru"
          },
          {
            "id": 1420,
            "name": "Lofa"
          },
          {
            "id": 1421,
            "name": "Margibi"
          },
          {
            "id": 1422,
            "name": "Maryland"
          },
          {
            "id": 1423,
            "name": "Montserrado"
          },
          {
            "id": 1424,
            "name": "Nimba"
          },
          {
            "id": 1425,
            "name": "River Cess"
          },
          {
            "id": 1426,
            "name": "River Gee"
          },
          {
            "id": 1427,
            "name": "Sinoe"
          }
        ]
      },
      {
        "id": 86,
        "name": "Libya",
        "prefixNumber": "+218",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDVDQzk4ODE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDA0MjA0QzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNUNDOTg2MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNUNDOTg3MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oNTByAAAACVJREFUeNpiZJhqwEAbwMRAMzBq9KjRo0aPGj1q9KjRtDMaIMAADHgA7Vx8bugAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1428,
            "name": "Ajdabiya"
          },
          {
            "id": 1429,
            "name": "Al 'Aziziyah"
          },
          {
            "id": 1430,
            "name": "Al Fatih"
          },
          {
            "id": 1431,
            "name": "Al Jabal al Akhdar"
          },
          {
            "id": 1432,
            "name": "Al Jufrah"
          },
          {
            "id": 1433,
            "name": "Al Khums"
          },
          {
            "id": 1434,
            "name": "Al Kufrah"
          },
          {
            "id": 1435,
            "name": "An Nuqat al Khams"
          },
          {
            "id": 1436,
            "name": "Ash Shati'"
          },
          {
            "id": 1437,
            "name": "Awbari"
          },
          {
            "id": 1438,
            "name": "Az Zawiyah"
          },
          {
            "id": 1439,
            "name": "Banghazi"
          },
          {
            "id": 1440,
            "name": "Darnah"
          },
          {
            "id": 1441,
            "name": "Ghadamis"
          },
          {
            "id": 1442,
            "name": "Gharyan"
          },
          {
            "id": 1443,
            "name": "Misratah"
          },
          {
            "id": 1444,
            "name": "Murzuq"
          },
          {
            "id": 1445,
            "name": "Sabha"
          },
          {
            "id": 1446,
            "name": "Sawfajjin"
          },
          {
            "id": 1447,
            "name": "Surt"
          },
          {
            "id": 1448,
            "name": "Tarabulus"
          },
          {
            "id": 1449,
            "name": "Tarhunah"
          },
          {
            "id": 1450,
            "name": "Tubruq"
          },
          {
            "id": 1451,
            "name": "Yafran"
          },
          {
            "id": 1452,
            "name": "Zlitan"
          }
        ]
      },
      {
        "id": 87,
        "name": "Lithuania",
        "prefixNumber": "+370",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDA0MjA1MzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDA0MjA1NDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMDQyMDUxMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwMDQyMDUyMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dE0CWQAAADFJREFUeNpi/LtTmIE2gImBZmDU6GFhNAvzRsPRABk1GjdgPKiuOxogo0YPiNEAAQYAG3sD7LiMQpYAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1453,
            "name": "Alytaus"
          },
          {
            "id": 1454,
            "name": "Kauno"
          },
          {
            "id": 1455,
            "name": "Klaipedos"
          },
          {
            "id": 1456,
            "name": "Marijampoles"
          },
          {
            "id": 1457,
            "name": "Panevezio"
          },
          {
            "id": 1458,
            "name": "Siauliu"
          },
          {
            "id": 1459,
            "name": "Taurages"
          },
          {
            "id": 1460,
            "name": "Telsiu"
          },
          {
            "id": 1461,
            "name": "Utenos"
          },
          {
            "id": 1462,
            "name": "Vilniaus"
          }
        ]
      },
      {
        "id": 88,
        "name": "Luxembourg",
        "prefixNumber": "+352",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDQ3NDU2MjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMDQ3NDU2MzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMDQyMDU1MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwMDQyMDU2MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HeS18gAAADFJREFUeNpifK+ty0AbwMRAMzBq9LAwmvH///+jATJqNG7Awrjk3miAjBo9IEYDBBgAMnEF8ALV3YIAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1463,
            "name": "Diekirch"
          },
          {
            "id": 1464,
            "name": "Grevenmacher"
          },
          {
            "id": 1465,
            "name": "Luxembourg"
          }
        ]
      },
      {
        "id": 89,
        "name": "Macedonia",
        "prefixNumber": "+389",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDQ3NDU2QTE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMDQ3NDU2QjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNDc0NTY4MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwNDc0NTY5MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+x/HZMgAABhZJREFUeNpsVmtsFFUYPXdmdmdn9tHdblsoj7KFgkL5QSQRYggmihhNDCIgGAjgKyo/1BiRP5pGEzRKMPERNeIPgWCCIcZAsDwSEowxMSYkgElNoRRoaaGlu9t9zaMzc/3unW0owqQ3nex9fN853znfHebdaC4VTujofyeFiXEFRrsH+XDc8wQ2A+hvwY9FJJZOgE8Adr+K3q0ZeEUGNXGfTWILDeuKCtXgyH1WQnatA03NBMmmF2uIL5mQwQtndejNPrQUB/fvPkPROZxBFTYdklzpgtG8fUmDe0OB1hTcG1MF/CqDfVNFwzIXcz8vwVzuAg6DUiS0KDMYDzlY1J1H27tleHkF9jVVbhQZT81eJCNQyt8jdMZ1Fb7FwrVTUWo0N6jAvalg5hsVLD4xBvMRmzYzlM5Eofy7MYPeLWkUDpsAUTF7TwGdx/OItfuo9mmSTqbcjcIilLxCp9NcrVf7Hy1hcrXLGiItARYeKSD3TQFIByj+YuLStjR61megRVt8jB2LIX88hswhG9NetpBeU8WSXgd9W9O4ddCElggQnR6AU/kVk8MdIJTEkkrsOldVKEZYW4FyYpRQklZa1lmYf5gCqj7KJ03c3GcifzSGgJLVZwRg53IPcoEoENRT/cTmzGoHs3ZVEF9pYbzbxOXtaTgjqhRe4FAEj2HxmTy0TIALK7LwK6Gw7H4NWkOAju+LyDxfRe3vGAY/TqDQrdM+BfpMX+qEU8KSJ/EiAhpzfVrAkP9Nl4uzGyzM7ipjyflRXN2Vwq0DJgRD7oiCYncUapLLegtKLQravN5Cbm9JlqdvWxa3fzLgE0sxQqgYniwBr2tQs4kqgVjUjkW5zEjSSotGfzYxdsTAtNeqmP56FakVLga6EogmAwQW7Z5g0LOUrM/Q8dU4Eg+7GPqCaP06Dt9VEG0id5AABUteSQEnUJPBWf+OHPfpR2+cwRuj/wUFQY3BpyEWeiUGi4iJIMCMrVUwlyO7zkbDs1QbOqByJoKRgwZ4hGF4vwkXVBJ4kg0BQmhCpaFlaGQDWQqVrMp4JctpHbgbBgvIGqJRcFK+sIlfVGS2Xp7hNqFvWE7131uG26PJwNHOCQx9kET+RAxNL9iINNLBxIiov2KQGGM8HCRANc4lq5QbQam7gSmUEb37NFiEI9CY9CljgfRlYCtQxKZJawWT9WJhqWhONSgoIdLSPEQsg0IGFUOcO+l/bYCy9cdDSj2BbiykXdAtkAvbWI5G6zla19bgUlMok7CST7myrdZ+j8DuU6UuenZkKB9quxGiOlVHTAEFvZJmkZB4F1T/iU7O6sYXyhZZMj30pTsatqPmDTW0vklBqUtd3Zmk7gPMfK9KaXMM7Q2FlNtD7XChj+FvTYwcoJpTqkJc0qoEQLhFqF0ky2losdydhiwWiSbhUIMQk5knbLR9WIaxwMPAR0nc+DIhD3PzKvmevEv02sMkvOYAvS+l0fpKDblPS5jxdgXXu1LIH9PlufpsH5HIHSvVcdYDBuENYhMqYZtFvxaw8NRtOXdhWRMGKajR5pFSSVBkocbnbGQ3OdDbQlQGARj+IY7zS5tlr3/g6Cg6T+aRftyh8qjybGGlyfarCZEILwty06sctGyxkN1WlaK59lYaQxRQ0QPEOzzJhk/XX4zeVWrtispl4Oq5iKylSb+7wwourmoi9FW07ysitdqS98AIWa1wUpcABQOaQNjwqIuW7RaaNtdIcR5qfxm4/GoDShejMFp96UNev6aF5fRZvhQPIz3E5vgo/REVQpVrhMg0m2pP6MfPRtHxXQmZjVUaNvKHDFn/4mkd2oL9RTQ+7YA1CTMrGNqdxuDuhBREYq4naz31XhaHG/OJ3nhoLVH/qY+kk2ofn+fRva3hnycbMWtnFLO6KmjcXJWxCqd0KNlNFgUNqCFE0bsmg/73UyGSeX4ohqkfFTxsreLKlI+4adp8WfepwkE9WbFOo+vw2idJ9DyTgXMhSooNkFlLvdAfVcuCqiv09WEPqTDneLKzcO8+nz5kCaHgGKHhtdAeMUIfpVtHXpPxuz99xBmiPZoJD4XTMVx8LIJ2sl16tYv/BBgAT2nbpDC92HAAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1466,
            "name": "Aerodrom"
          },
          {
            "id": 1467,
            "name": "Aracinovo"
          },
          {
            "id": 1468,
            "name": "Berovo"
          },
          {
            "id": 1469,
            "name": "Bitola"
          },
          {
            "id": 1470,
            "name": "Bogdanci"
          },
          {
            "id": 1471,
            "name": "Bogovinje"
          },
          {
            "id": 1472,
            "name": "Bosilovo"
          },
          {
            "id": 1473,
            "name": "Brvenica"
          },
          {
            "id": 1474,
            "name": "Butel"
          },
          {
            "id": 1475,
            "name": "Cair"
          },
          {
            "id": 1476,
            "name": "Caska"
          },
          {
            "id": 1477,
            "name": "Centar"
          },
          {
            "id": 1478,
            "name": "Centar Zupa"
          },
          {
            "id": 1479,
            "name": "Cesinovo"
          },
          {
            "id": 1480,
            "name": "Cucer-Sandevo"
          },
          {
            "id": 1481,
            "name": "Debar"
          },
          {
            "id": 1482,
            "name": "Debartsa"
          },
          {
            "id": 1483,
            "name": "Delcevo"
          },
          {
            "id": 1484,
            "name": "Demir Hisar"
          },
          {
            "id": 1485,
            "name": "Demir Kapija"
          },
          {
            "id": 1486,
            "name": "Dojran"
          },
          {
            "id": 1487,
            "name": "Dolneni"
          },
          {
            "id": 1488,
            "name": "Drugovo"
          },
          {
            "id": 1489,
            "name": "Gazi Baba"
          },
          {
            "id": 1490,
            "name": "Gevgelija"
          },
          {
            "id": 1491,
            "name": "Gjorce Petrov"
          },
          {
            "id": 1492,
            "name": "Gostivar"
          },
          {
            "id": 1493,
            "name": "Gradsko"
          },
          {
            "id": 1494,
            "name": "Ilinden"
          },
          {
            "id": 1495,
            "name": "Jegunovce"
          },
          {
            "id": 1496,
            "name": "Karbinci"
          },
          {
            "id": 1497,
            "name": "Karpos"
          },
          {
            "id": 1498,
            "name": "Kavadarci"
          },
          {
            "id": 1499,
            "name": "Kicevo"
          },
          {
            "id": 1500,
            "name": "Kisela Voda"
          },
          {
            "id": 1501,
            "name": "Kocani"
          },
          {
            "id": 1502,
            "name": "Konce"
          },
          {
            "id": 1503,
            "name": "Kratovo"
          },
          {
            "id": 1504,
            "name": "Kriva Palanka"
          },
          {
            "id": 1505,
            "name": "Krivogastani"
          },
          {
            "id": 1506,
            "name": "Krusevo"
          },
          {
            "id": 1507,
            "name": "Kumanovo"
          },
          {
            "id": 1508,
            "name": "Lipkovo"
          },
          {
            "id": 1509,
            "name": "Lozovo"
          },
          {
            "id": 1510,
            "name": "Makedonska Kamenica"
          },
          {
            "id": 1511,
            "name": "Makedonski Brod"
          },
          {
            "id": 1512,
            "name": "Mavrovo i Rastusa"
          },
          {
            "id": 1513,
            "name": "Mogila"
          },
          {
            "id": 1514,
            "name": "Negotino"
          },
          {
            "id": 1515,
            "name": "Novaci"
          },
          {
            "id": 1516,
            "name": "Novo Selo"
          },
          {
            "id": 1517,
            "name": "Ohrid"
          },
          {
            "id": 1518,
            "name": "Oslomej"
          },
          {
            "id": 1519,
            "name": "Pehcevo"
          },
          {
            "id": 1520,
            "name": "Petrovec"
          },
          {
            "id": 1521,
            "name": "Plasnica"
          },
          {
            "id": 1522,
            "name": "Prilep"
          },
          {
            "id": 1523,
            "name": "Probistip"
          },
          {
            "id": 1524,
            "name": "Radovis"
          },
          {
            "id": 1525,
            "name": "Rankovce"
          },
          {
            "id": 1526,
            "name": "Resen"
          },
          {
            "id": 1527,
            "name": "Rosoman"
          },
          {
            "id": 1528,
            "name": "Saraj"
          },
          {
            "id": 1529,
            "name": "Skopje"
          },
          {
            "id": 1530,
            "name": "Sopiste"
          },
          {
            "id": 1531,
            "name": "Staro Nagoricane"
          },
          {
            "id": 1532,
            "name": "Stip"
          },
          {
            "id": 1533,
            "name": "Struga"
          },
          {
            "id": 1534,
            "name": "Strumica"
          },
          {
            "id": 1535,
            "name": "Studenicani"
          },
          {
            "id": 1536,
            "name": "Suto Orizari"
          },
          {
            "id": 1537,
            "name": "Sveti Nikole"
          },
          {
            "id": 1538,
            "name": "Tearce"
          },
          {
            "id": 1539,
            "name": "Tetovo"
          },
          {
            "id": 1540,
            "name": "Valandovo"
          },
          {
            "id": 1541,
            "name": "Vasilevo"
          },
          {
            "id": 1542,
            "name": "Veles"
          },
          {
            "id": 1543,
            "name": "Vevcani"
          },
          {
            "id": 1544,
            "name": "Vinica"
          },
          {
            "id": 1545,
            "name": "Vranestica"
          },
          {
            "id": 1546,
            "name": "Vrapciste"
          },
          {
            "id": 1547,
            "name": "Zajas"
          },
          {
            "id": 1548,
            "name": "Zelenikovo"
          },
          {
            "id": 1549,
            "name": "Zelino"
          },
          {
            "id": 1550,
            "name": "Zrnovci"
          }
        ]
      },
      {
        "id": 90,
        "name": "Madagascar",
        "prefixNumber": "+261",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTdFNEQ0RjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTdFNEQ1MDE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNDc0NTZDMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5N0U0RDRFMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rDjCQAAAKdJREFUeNpi/P///1MGBgYpIP7MgAP8+/6D4YqOHcPPe/cZWASFGCgEvED8jAXKYECi6QF4mRgGCIxaPGoxzQALMYoYgZjv61+G30DI/OUP/Sz+D8RvBFgZvr9hZ2AVYqOfxT+AqkLa9Rgefpdg4GfjpaOPgWH9SYKDgeE3F8NHFk46xjEorD//ZmD4CcSsv0ez06jFoxbjzE6foa2Pz/RqfYDsAggwAPr+KDn2/fllAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1551,
            "name": "Antananarivo"
          },
          {
            "id": 1552,
            "name": "Antsiranana"
          },
          {
            "id": 1553,
            "name": "Fianarantsoa"
          },
          {
            "id": 1554,
            "name": "Mahajanga"
          },
          {
            "id": 1555,
            "name": "Toamasina"
          },
          {
            "id": 1556,
            "name": "Toliara"
          }
        ]
      },
      {
        "id": 91,
        "name": "Malawi",
        "prefixNumber": "+265",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTdFNEQ1MzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTdFNEQ1NDE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5N0U0RDUxMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5N0U0RDUyMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+taggYQAAAP1JREFUeNpiZCAO8DAy8TEy/2dg+Pr/36f/f4nRwkhQhTATix8bnz4LpxAjM1D1x///Lv75vuHXx9f//lBktAELZz2X+Jv/f+f9ePvm318mBgZ+JuYEdiE5Jtamby9P/fnGQB5QZ2Y/IKCcwCEEZNuzcldziQORCxsvkBvOLnBYQAXoFTKNns8rW8olCmTM4JX5L6r/V0T/j4j+fzGDhXxyQMFsTpElfHLMuLXjlLJm5ZZlYm389rKESzSfU+zwn693//26/+/Xg7+/XFl52RmZur+9Mmbh/MfAABTEHtYXBdUZaAOYGGgGRo0eFkazJPXyjQbIqNEDYjRAgAEAy3xInECTax0AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1557,
            "name": "Balaka"
          },
          {
            "id": 1558,
            "name": "Blantyre"
          },
          {
            "id": 1559,
            "name": "Chikwawa"
          },
          {
            "id": 1560,
            "name": "Chiradzulu"
          },
          {
            "id": 1561,
            "name": "Chitipa"
          },
          {
            "id": 1562,
            "name": "Dedza"
          },
          {
            "id": 1563,
            "name": "Dowa"
          },
          {
            "id": 1564,
            "name": "Karonga"
          },
          {
            "id": 1565,
            "name": "Kasungu"
          },
          {
            "id": 1566,
            "name": "Likoma"
          },
          {
            "id": 1567,
            "name": "Lilongwe"
          },
          {
            "id": 1568,
            "name": "Machinga"
          },
          {
            "id": 1569,
            "name": "Mangochi"
          },
          {
            "id": 1570,
            "name": "Mchinji"
          },
          {
            "id": 1571,
            "name": "Mulanje"
          },
          {
            "id": 1572,
            "name": "Mwanza"
          },
          {
            "id": 1573,
            "name": "Mzimba"
          },
          {
            "id": 1574,
            "name": "Ntcheu"
          },
          {
            "id": 1575,
            "name": "Nkhata Bay"
          },
          {
            "id": 1576,
            "name": "Nkhotakota"
          },
          {
            "id": 1577,
            "name": "Nsanje"
          },
          {
            "id": 1578,
            "name": "Ntchisi"
          },
          {
            "id": 1579,
            "name": "Phalombe"
          },
          {
            "id": 1580,
            "name": "Rumphi"
          },
          {
            "id": 1581,
            "name": "Salima"
          },
          {
            "id": 1582,
            "name": "Thyolo"
          },
          {
            "id": 1583,
            "name": "Zomba"
          }
        ]
      },
      {
        "id": 92,
        "name": "Malaysia",
        "prefixNumber": "+60",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTdFNEQ1NzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTdFNEQ1ODE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5N0U0RDU1MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5N0U0RDU2MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WpzGZAAAA1RJREFUeNrElF1oW2UYx38n5zTn5Lvt+pE13XLhoNPNaZirUqc4BTdBBcdAwSlMFId3YxdjoHgnCIpXohcieDFwYAteCFZFhcKYFVfHKhq3Nfsg6dIk2CZtkybnY8/JWTtEbaMIeeDl5YX3ff7P//9/3kdhz2gWiLAaiuPthT5YNiC0DB0mBGX3r4Dt429DixJayfP9ucMk5Vhk/dBkDaydfBZUgzC7mYf3j/PC41+RySa4cCnJmfQOSgtdUkRdwFXvriYFOYr3tlxG6QyQOD1GTDcxmqnXB66sMW7owrSfd06+xfEXR3n/1DNMnr+HuapOh18AFRvqOnpkgYalYdcCYIgSjqhQX0HRQkQOPo1fsvpbYHxb4twgrz3/IcePjXLgyBuMnzoCW6+CXqezN8/Ijinu7JtlXlS5kE1yrRinVvd7zHt6sCtzpEM6SbNOUVkfWBGPy03GKwY+8c/6/Am++3Enj748BtunhaRKv17l/rt/5s0nT5O6N0P64gDvffkU354b5nKpF9sFXrIIb1KZeXuQLt3GRG2R8XKIgaFfoBc+ndwLAZHQ50rrJxRuMLItTWp3BsTaoVSOAzemODu1Rwq71WyOg6IoqLEYPkPBh69FYK3B4lK4mTgZK4jfHZ6nmsV8OcaVolS0JPc20dwz+T6KlRiolve+qwt7Kc/MzqFmVxdoVWq38hsJfvjgWYZFTmVkQpKKUX15DEslLt6+8tDXPLj9N9K5BB9PPMavV7ZRNqVAVaReaBCJG1z/7BGiQdUVoEVgt7lKPXR3Fyl9cYjpmTj7jn5EMS9M++cIR+expQAVm55IhcJilFrNEC8VrzHFmXAnXDwRoNtv0djAYwEe84BxvMqlWwe3/M4nr79Lh1Zl/OxeJi9tYfraHczO9XtDxFGb1jStaA4cAVfDBBsFJtKvstVapLQh8ANnymv/2E3ieuYCLMs3ue8nEvEC2esyY/Kbb/u5etddqwPkD/nngwEq3wwTZuNQTvTuL/9pZN5KaonnC9LplqkSDlYxhKniMvsn72om/qjO0Zd2o8kE8bG+yYqzb+ivwP8l3EY0bWYyFWzb2Zix4zj/D/C/DC13+DnaEZqZy7UFuH1SZ3bd1R6p9VQq0i6ps+2Q+qYAAwAlKDesr1W8UQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1584,
            "name": "Johor"
          },
          {
            "id": 1585,
            "name": "Kedah"
          },
          {
            "id": 1586,
            "name": "Kelantan"
          },
          {
            "id": 1587,
            "name": "Kuala Lumpur"
          },
          {
            "id": 1588,
            "name": "Labuan"
          },
          {
            "id": 1589,
            "name": "Malacca"
          },
          {
            "id": 1590,
            "name": "Negeri Sembilan"
          },
          {
            "id": 1591,
            "name": "Pahang"
          },
          {
            "id": 1592,
            "name": "Perak"
          },
          {
            "id": 1593,
            "name": "Perlis"
          },
          {
            "id": 1594,
            "name": "Penang"
          },
          {
            "id": 1595,
            "name": "Sabah"
          },
          {
            "id": 1596,
            "name": "Sarawak"
          },
          {
            "id": 1597,
            "name": "Selangor"
          },
          {
            "id": 1598,
            "name": "Terengganu"
          }
        ]
      },
      {
        "id": 93,
        "name": "Maldives",
        "prefixNumber": "+960",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjMyMTNFRTE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjMyMTNFRjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MzIxM0VDMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2MzIxM0VEMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+25GwywAAAhZJREFUeNrEVktL41AU/u7tIzdarUU6oGNFRBlm5cafIAriQmRWs5jVLCoMzNI/ITO7wY24E0Hc6x9wXXQjiCBi1YKPtEmbdGqSOdemjG3iow/rgZvk3pyc757vnHtO2MHAdBbAMA0d3ZE+Ghdh7wGP7l0B53gnCT+euAxgLtBfBrhTnbcj0pZDNnSF7rw6DwSuvbjpIUU575B3Ubse1AcsPb0m0C9fIzhNAAkz2FCIh2BYRVjGLZRYAjERg+PYPr0CeZosAjubFaQ0QFOf8VjSqyXokuS4K7oBqBGi5AzqYBxzC8vInGaQuzoGIsKvS0CapJkxcLeeQx4UF2bSRYKWGoZJH15cYlCM4OjnHhbjn3CdPad1+HVLng3T23xD3JrLavseuLew+30NN8U7LP/5BruUpyCq7WX1i2LmMTQ6hemPn7G08QMQvURnnLh0mgZu+hxzVuXMfkim1vO+OWC1H9mzAxzmTrAyk6Y4UqqWDcLnbwwsM5qHMb+exuSHcfxOb1B86fxVrPaBH6qVeGIoFMuhYZxrx5j4NYv9cg4jqbHqunD9+jLnlJrhV5RMQeyBnFMDC0gFLDoK47aA7a1VhPqS6FF64Vr+AmJWyIbxvz7UHVtqi4VaZ2LexvQo89XWVsT1KI39dRtrv17nsSzonLRTBaejTSIv2MtNQr7TRKfag78BtXyOO9mPdS/G3fz10f8JMABK7r8EsRKWRQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1599,
            "name": "Alifu"
          },
          {
            "id": 1600,
            "name": "Baa"
          },
          {
            "id": 1601,
            "name": "Dhaalu"
          },
          {
            "id": 1602,
            "name": "Faafu"
          },
          {
            "id": 1603,
            "name": "Gaafu Alifu"
          },
          {
            "id": 1604,
            "name": "Gaafu Dhaalu"
          },
          {
            "id": 1605,
            "name": "Gnaviyani"
          },
          {
            "id": 1606,
            "name": "Haa Alifu"
          },
          {
            "id": 1607,
            "name": "Haa Dhaalu"
          },
          {
            "id": 1608,
            "name": "Kaafu"
          },
          {
            "id": 1609,
            "name": "Laamu"
          },
          {
            "id": 1610,
            "name": "Lhaviyani"
          },
          {
            "id": 1611,
            "name": "Maale"
          },
          {
            "id": 1612,
            "name": "Meemu"
          },
          {
            "id": 1613,
            "name": "Noonu"
          },
          {
            "id": 1614,
            "name": "Raa"
          },
          {
            "id": 1615,
            "name": "Seenu"
          },
          {
            "id": 1616,
            "name": "Shaviyani"
          },
          {
            "id": 1617,
            "name": "Thaa"
          },
          {
            "id": 1618,
            "name": "Vaavu"
          }
        ]
      },
      {
        "id": 94,
        "name": "Mali",
        "prefixNumber": "+223",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjMyMTNGMjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjMyMTNGMzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MzIxM0YwMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2MzIxM0YxMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uyeEmgAAAJtJREFUeNpiFNlq9ZSBgUEKiD8zYAHv/jEzyjL//nte8sF/QZbfLH//Mf/Hpo6Z7z/j79dMf6+H8jH8fMjEzCL4H6s6IOAF4mcsUAYDEo0N/IPSTAz4wX8oJqSOl5ACdEOpoYYoH9AMjFo8avGoxaMWj1o8avHQtpiRSmrAgAXa5OHF1fSBGvYXWsmz4KnsYerALSE86sB2AQQYAKnHJTCzkNpyAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1619,
            "name": "Bamako (Capital)"
          },
          {
            "id": 1620,
            "name": "Gao"
          },
          {
            "id": 1621,
            "name": "Kayes"
          },
          {
            "id": 1622,
            "name": "Kidal"
          },
          {
            "id": 1623,
            "name": "Koulikoro"
          },
          {
            "id": 1624,
            "name": "Mopti"
          },
          {
            "id": 1625,
            "name": "Segou"
          },
          {
            "id": 1626,
            "name": "Sikasso"
          },
          {
            "id": 1627,
            "name": "Tombouctou"
          }
        ]
      },
      {
        "id": 95,
        "name": "Malta",
        "prefixNumber": "+356",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjMyMTNGNjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRTVFRUNEODE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MzIxM0Y0MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2MzIxM0Y1MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uPhVmAAAAQVJREFUeNrs1s9LwmAYwPHv5hvI3AvqZrrK6AcFDSSoTpWHIqi/OegQQYcOHaK/QNtWastY6jJ0Zeg5OmwR7AsvPLcPL7y8PEoURQ6wMArDoO94aFaZjKbxU+O3Hve1Y4YNB1HM84vk13HFdGDQ8eXd5RV2/YDCxjoxJ9Vx+M7Hs0/Te8DJqjy+vjB8ajPqD2KVRc91uT2/oGNIGq0mypzAu75h5+SIvL0VH6xVyuyeneL4bSJFYXNxibW9fbJmMdYbq5OHpK9UsYwSZqtL1ZhHX11GSD1eeDbkTIPt+iHSqpBEYjZkchqFmk1SqfxRKZzCKZzC/w+e/NXBdAsJEjK/rU8BBgBwJ0VJGmmDwgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1628,
            "name": "Valletta"
          }
        ]
      },
      {
        "id": 96,
        "name": "Mauritania",
        "prefixNumber": "+222",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUYxOTgxNjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUYxOTgxNzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFNUVFQ0UxMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFNUVFQ0UyMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I0M3dwAAAo9JREFUeNrEVjtvE0EQ/vZednx2/CDGcQiJLYMQ1EggRMkPQKKiA1FQIaVKRUWDxA9BNKRAogWEoKCFIgoSBixix1GwZRs/78W3xyGFxmcfyKw0utHu7Hwz3+7Mnth4fmUfwBqlh8WMFKWuBQqOfRcCrkTZpQkPA09BnyL1KGMuYEFxJU+2jrxio0DZp+7M62gWey8QOSxPICVcZBUHd5bbuJtuIUc9o7gYe+KPPaGshWUowVTSKSO0KR1XxfZyC1vZQxp4MFyBh90TsGhtENLm1yFyjGte1IwnBD2tWTCF54Mm+K07OnZGJtPiVq4/GydQs2JIkgnXt3FR4h4bIjrVMruL8QHW6KhLXWZgktoi5cbBJq7Xy8gyGFO1fVBpIwO9vNRH21GiUz1wFZzVx1in45c/0sgziJO8UK9HCbSDQOR5F1T7V6CWgavpIxQJPuA6VCdaxrJU3pDWe5kjnIkNUZ3E/YPXOS/BVilGUE7VSQxFBrlF27cMTA0ps6nABUb+tJfBnqVjb3PXp/EznR44GvpkQ0qTepVzeWb3sbSLBjN93M1xrx0dWJcGiodbjTIUOq5V3uNBrokLzEyyIeWcPsF9zh1WPiBJ/XajBFfe9pCiEuzV3WntUjqXNF4i1a/WPyGeoDlvcn8cp2uBpDEE4kN4wySufavgBY+mrI/YVKbe6p4WVugOS6ZsjPFusoRTX85jm5fnptnFhjHyz7vOIJ60VvGos4KmraFEUDeklGbK+Hjm33meHTo3eX4llS2D/r+yZfY4t8y5FV422xOzdMzwjH8P6TAt26PhYES9xkbi1zUbRo6MeIHNzA/NvK+KBJDtMCacuXrzX71O/3L8N2At+OVJLfjXp/dTgAEAlE8F1+TZHx0AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1629,
            "name": "Adrar"
          },
          {
            "id": 1630,
            "name": "Assaba"
          },
          {
            "id": 1631,
            "name": "Brakna"
          },
          {
            "id": 1632,
            "name": "Dakhlet Nouadhibou"
          },
          {
            "id": 1633,
            "name": "Gorgol"
          },
          {
            "id": 1634,
            "name": "Guidimaka"
          },
          {
            "id": 1635,
            "name": "Hodh Ech Chargui"
          },
          {
            "id": 1636,
            "name": "Hodh El Gharbi"
          },
          {
            "id": 1637,
            "name": "Inchiri"
          },
          {
            "id": 1638,
            "name": "Nouakchott"
          },
          {
            "id": 1639,
            "name": "Tagant"
          },
          {
            "id": 1640,
            "name": "Tiris Zemmour"
          },
          {
            "id": 1641,
            "name": "Trarza"
          }
        ]
      },
      {
        "id": 97,
        "name": "Mauritius",
        "prefixNumber": "+230",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUYxOTgxQTE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUYxOTgxQjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRjE5ODE4MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxRjE5ODE5MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lva3PQAAALZJREFUeNrEVsEKwjAMTduIbjIcO6h48CO865/4j36QCB704BBHq4iMNWbQQ78gefBo6OX1JSENntfbGwBsmAFkUDHvmALIThFxC0rABf10hB+mjCmOQppjliMe6qOO4yc2NnuJFCya+NVxTL7QEZ4vvUpzmfayenFQMwchYcfsDPUTLzy1RgQculKnxm7a6wj7z0xncu1Oe0oXJGiY8PouXNZtUnDYKNVY7z9OK08lvPqEvwADAH3qLsG8TnJFAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1642,
            "name": "Agalega Islands"
          },
          {
            "id": 1643,
            "name": "Black River"
          },
          {
            "id": 1644,
            "name": "Cargados Carajos Shoals"
          },
          {
            "id": 1645,
            "name": "Flacq"
          },
          {
            "id": 1646,
            "name": "Grand Port"
          },
          {
            "id": 1647,
            "name": "Moka"
          },
          {
            "id": 1648,
            "name": "Pamplemousses"
          },
          {
            "id": 1649,
            "name": "Plaines Wilhems"
          },
          {
            "id": 1650,
            "name": "Port Louis"
          },
          {
            "id": 1651,
            "name": "Riviere du Rempart"
          },
          {
            "id": 1652,
            "name": "Rodrigues"
          },
          {
            "id": 1653,
            "name": "Savanne"
          }
        ]
      },
      {
        "id": 98,
        "name": "Mexico",
        "prefixNumber": "+52",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOUI5NTczNTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOUI5NTczNjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRjE5ODIwMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5Qjk1NzM0MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LwZHQAAAaBJREFUeNpiZMhw/8SAD7x4zODm6M+wM6+NgVjwKKeS4enUTgYOQVWcaliAmJdhAAATwwCBUYtJAv///aOfxf+B+Pev7wzPr51g2NwWydDkb8Rw5dQR2lvMCMTvX19guLWrleHW+bMMBw6cZygPtGV4fvsyLSz+D2f9/PWK4T87N4OgmgvD1TuvGBz8XRnEeRgYVk1sRKj+/5+giSxE+ZKJGUy/fHmLgecfJwPTh6sMHB9PM/z5+oXh4zdWBo+CLoZf/9kYnr+6zSAupsrAwsJKLR8zgskvnx8xHHv0jGHJ+a8MD8UcGFyqehg+Pj/J8OXjdwZbHy+GJ88voain2OL///6CaW4ucQZx9tsM/zS9GJZ8MWa4zf6HQaK0kYHZ0ovh8/MzDCJCsmAD//z9Rd3EJSGlyyDCI8WgzXKZIUDoFoPj48MM7L/5GYT5XzJwCIkxKMqaQf3LSJ04RgaSKk4M/C/OMdz8+53ht0kOgz/7WwZhEXEGaRkTksxhISc7cUsYMRgBMcM/YOplYhyAIpNMS0crCboCUOL6PBAWAwQYAIwVfZVkoDrqAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1654,
            "name": "Aguascalientes"
          },
          {
            "id": 1655,
            "name": "Baja California"
          },
          {
            "id": 1656,
            "name": "Baja California Sur"
          },
          {
            "id": 1657,
            "name": "Campeche"
          },
          {
            "id": 1658,
            "name": "Chiapas"
          },
          {
            "id": 1659,
            "name": "Chihuahua"
          },
          {
            "id": 1660,
            "name": "Coahuila de Zaragoza"
          },
          {
            "id": 1661,
            "name": "Colima"
          },
          {
            "id": 1662,
            "name": "Distrito Federal"
          },
          {
            "id": 1663,
            "name": "Durango"
          },
          {
            "id": 1664,
            "name": "Guanajuato"
          },
          {
            "id": 1665,
            "name": "Guerrero"
          },
          {
            "id": 1666,
            "name": "Hidalgo"
          },
          {
            "id": 1667,
            "name": "Jalisco"
          },
          {
            "id": 1668,
            "name": "Mexico"
          },
          {
            "id": 1669,
            "name": "Michoacan de Ocampo"
          },
          {
            "id": 1670,
            "name": "Morelos"
          },
          {
            "id": 1671,
            "name": "Nayarit"
          },
          {
            "id": 1672,
            "name": "Nuevo Leon"
          },
          {
            "id": 1673,
            "name": "Oaxaca"
          },
          {
            "id": 1674,
            "name": "Puebla"
          },
          {
            "id": 1675,
            "name": "Queretaro de Arteaga"
          },
          {
            "id": 1676,
            "name": "Quintana Roo"
          },
          {
            "id": 1677,
            "name": "San Luis Potosi"
          },
          {
            "id": 1678,
            "name": "Sinaloa"
          },
          {
            "id": 1679,
            "name": "Sonora"
          },
          {
            "id": 1680,
            "name": "Tabasco"
          },
          {
            "id": 1681,
            "name": "Tamaulipas"
          },
          {
            "id": 1682,
            "name": "Tlaxcala"
          },
          {
            "id": 1683,
            "name": "Veracruz-Llave"
          },
          {
            "id": 1684,
            "name": "Yucatan"
          },
          {
            "id": 1685,
            "name": "Zacatecas"
          }
        ]
      },
      {
        "id": 99,
        "name": "Moldova",
        "prefixNumber": "+373",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOUI5NTczRDE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOUI5NTczRTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5Qjk1NzNCMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5Qjk1NzNDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UdXXEwAAAipJREFUeNrUlctrE2EQwH/7SDbbmI3m0SpF2iJRaPEQ8FJE8OJFD55ETx5U0EMFEfInWBEFEfXmQfAmCFqhFKHSg+2lBsFSNAj2UFqatNQ8TLN57ToxBy89rCUxODDsx+zs/Ha+mfk+Bd4W2VVU0YM8u5fiauo99jc8iXYYKq985G+EUKOOGHb300VD9EBUeiR7AquKqPoPwS2gT4pTrYN/PwQi4Dptm6J0C9wQmCG9cghqsn76MMT8bAgzKjb5AUPeuY0ugI04pD/5uH39AEGBf8+FWVi2KLtwU2xfMhpGtAtgRbJa/Kzx6EUfM48tEopNJGsz9SDMk5cm6SVNxsc7WPfsuQPhqM7l8T5G5n5S2qgTUFwSQzoXT5lYluRQ9Z6KN7A0jr0Nc2mNuGUwGxvm+KUVlKbD/Md+Brc01nMqTkECxju81a0uNnwFPuQd7gYusDwcZHpglInCLcqObPs+G0UazHE6CZYGUiVo8ohJrlbi2sgb1jMx1paCXBmdweovELH8KH5oNrswTlZYJ7xR5Ky2SKigcsK/xmTiNdsrVfJV7XdJvM6z5+aqb8Lp8RLJ5zD1TmNhuohhNomdV5lIlRkccqhvieNAh8ENG6KW6BicsRxWs3l0SfLkOZejSanFqtxKO94DegYrArFlXNwMjB1zuX/nR/u8NgX4Vd7rbZ+uXRKt4JWsPKV7Hal7ZbMN/VvZwycCap0VtT/r/+o+bmVc6gX4lwADANw8m6+4QijQAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1686,
            "name": "Anenii Noi"
          },
          {
            "id": 1687,
            "name": "Basarabeasca"
          },
          {
            "id": 1688,
            "name": "Briceni"
          },
          {
            "id": 1689,
            "name": "Cahul"
          },
          {
            "id": 1690,
            "name": "Cantemir"
          },
          {
            "id": 1691,
            "name": "Calarasi"
          },
          {
            "id": 1692,
            "name": "Causeni"
          },
          {
            "id": 1693,
            "name": "Cimislia"
          },
          {
            "id": 1694,
            "name": "Criuleni"
          },
          {
            "id": 1695,
            "name": "Donduseni"
          },
          {
            "id": 1696,
            "name": "Drochia"
          },
          {
            "id": 1697,
            "name": "Dubasari"
          },
          {
            "id": 1698,
            "name": "Edinet"
          },
          {
            "id": 1699,
            "name": "Falesti"
          },
          {
            "id": 1700,
            "name": "Floresti"
          },
          {
            "id": 1701,
            "name": "Glodeni"
          },
          {
            "id": 1702,
            "name": "Hincesti"
          },
          {
            "id": 1703,
            "name": "Ialoveni"
          },
          {
            "id": 1704,
            "name": "Leova"
          },
          {
            "id": 1705,
            "name": "Nisporeni"
          },
          {
            "id": 1706,
            "name": "Ocnita"
          },
          {
            "id": 1707,
            "name": "Orhei"
          },
          {
            "id": 1708,
            "name": "Rezina"
          },
          {
            "id": 1709,
            "name": "Riscani"
          },
          {
            "id": 1710,
            "name": "Singerei"
          },
          {
            "id": 1711,
            "name": "Soldanesti"
          },
          {
            "id": 1712,
            "name": "Soroca"
          },
          {
            "id": 1713,
            "name": "Stefan-Voda"
          },
          {
            "id": 1714,
            "name": "Straseni"
          },
          {
            "id": 1715,
            "name": "Taraclia"
          },
          {
            "id": 1716,
            "name": "Telenesti"
          },
          {
            "id": 1717,
            "name": "Ungheni"
          },
          {
            "id": 1718,
            "name": "Balti"
          },
          {
            "id": 1719,
            "name": "Bender"
          },
          {
            "id": 1720,
            "name": "Chisinau"
          },
          {
            "id": 1721,
            "name": "Gagauzia"
          },
          {
            "id": 1722,
            "name": "Stinga Nistrului"
          }
        ]
      },
      {
        "id": 100,
        "name": "Monaco",
        "prefixNumber": "+377",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QjA3RTdDNjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QjA3RTdDNzE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCMDdFN0M0MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCMDdFN0M1MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+o1HuEwAAAEdJREFUeNpiPCeo9omBgYGXgb7gMxPDAIFRi0ctHn4Ws/x5/35gLGaXlRkQixn/fP4yICUXCzMP92iqHrV41OJRi8kCAAEGAK++Cy3NEBqaAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1723,
            "name": "Monaco"
          }
        ]
      },
      {
        "id": 101,
        "name": "Mongolia",
        "prefixNumber": "+976",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QjA3RTdDQTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QjA3RTdDQjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCMDdFN0M4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCMDdFN0M5MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XDrqKwAAAkFJREFUeNq8VT1vE0EQfbO7vrv44jgKiZ1YQRb5ATRRJCiQkKADGn5BaKho6egogQ7xExBlJBoKUDpEgyhQCiJSxBKREcaJ4yS272OXub1EwiYFEnuMtPJ5NLo3b/a9OfpaX/4GoILJMHxoPCW0xnynjacPn2Dj7jqW9lr4m2gvLuPG2w08evwAB9U5aCmhON8YqzoFS/cJImCwaQOTwnkIPv3JpO4Rpq4lUBc19DEKCTGZSH+SBVx6eYLwVoykJ/4PsPAZvEM42VSItiRInldVBOMYKF/nMddTTN1MIEO+40HRwCwiMyKEdxIGH6F6L2JxaZsrBphy+yQdATVrkHYJgw8+hh9Z9iv8f0Aw0Z/2+pdQv3tWNTIVE+JtbqAuuAE+P1hs8xpU4prYMWN9SCDfoPmpj9qzAQ5feWwpgT7/qkWNlS89q/C4Kxwz1nkLqqYRrKUIriR23N7lFF5TQ8zxmeUy7W7cY3esE8JoS0BWDfzVFIYnEW0LW2CGTq/4lPHZeh7xy3lNVu9HKDVThLdj6CNyq6pz7cSsM7ZJSyBpSwRXU4jMx0UDizJbmTf3/gsf8Q7h4LmH4zeKYbVz4DE7kTBQC8A0j1g1mCmryVzK2ZJX4ALRvKHiXcLRa+6HDIbvJQbvJEwCKy7njMWMsWuxtVaxGyreEfi+HtovVfY93l2dsb4uXeCRd90BVyxvfmfEVspGKhd4TbKVbEPMNvqs+FlDBW4Z7/GYK9m4M8CzhSLK+XO2KmUtF5dxqLFfAgwALQ/bbU/KwEgAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1724,
            "name": "Arhangay"
          },
          {
            "id": 1725,
            "name": "Bayanhongor"
          },
          {
            "id": 1726,
            "name": "Bayan-Olgiy"
          },
          {
            "id": 1727,
            "name": "Bulgan"
          },
          {
            "id": 1728,
            "name": "Darhan Uul"
          },
          {
            "id": 1729,
            "name": "Dornod"
          },
          {
            "id": 1730,
            "name": "Dornogovi"
          },
          {
            "id": 1731,
            "name": "Dundgovi"
          },
          {
            "id": 1732,
            "name": "Dzavhan"
          },
          {
            "id": 1733,
            "name": "Govi-Altay"
          },
          {
            "id": 1734,
            "name": "Govi-Sumber"
          },
          {
            "id": 1735,
            "name": "Hentiy"
          },
          {
            "id": 1736,
            "name": "Hovd"
          },
          {
            "id": 1737,
            "name": "Hovsgol"
          },
          {
            "id": 1738,
            "name": "Omnogovi"
          },
          {
            "id": 1739,
            "name": "Orhon"
          },
          {
            "id": 1740,
            "name": "Ovorhangay"
          },
          {
            "id": 1741,
            "name": "Selenge"
          },
          {
            "id": 1742,
            "name": "Suhbaatar"
          },
          {
            "id": 1743,
            "name": "Tov"
          },
          {
            "id": 1744,
            "name": "Ulaanbaatar"
          },
          {
            "id": 1745,
            "name": "Uvs"
          }
        ]
      },
      {
        "id": 102,
        "name": "Morocco",
        "prefixNumber": "+212",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NEYzQkE4OTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NEYzQkE4QTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0RjNCQTg3MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0RjNCQTg4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AgxteQAAAiBJREFUeNrEVktr1FAU/m5uMppOY9up2rEVVCgtFEU3iooVdNWFe3euXAiCf0DsTty5E6VbN+5EBdGFuFGLG3Ezm/rAQseBthJppm1y8/JLTEREnHScmV445Obcc853njcRDQzXAYySHPRmWaSverbBb8+egGvYptUWcEjaCZFS2Caw3o5SHwGXjQhaDFQCAdWLiImFIardP+biwREPFciU13XgXOHRGYVnJ3/GKrqR6ogkSbsJKVMIDctmgG9eBE8JNGWMaqinuQhIq9SICzjTEtikCZ+mbhxdhz0cY6oh8WKSHFre1GNcnlnDqUUDtWqAUZ5dq5mpE+p/gUMaSWq6x9Zw62oT1opA+ZPA9GcDygBejvl4clZhoxzj3k0Lu+ioXaDqgjfX2r8ujzxtVfq4YPq4cs7Bmwkf9bkRfDcjjF9awYX3Jdx9bWG/kmhkA9Yi1U7LiHMDdVZwYtPAbK0fM+M2Lp63UwjLFZhd6CeonsrITs9x3s2vRhSEJvB2yodO5Dggb6/C8bq+pREpLGtkPf5w2oN7MMb87UE8vzOI5mSMx6e99FR2A7hC0adDjPYj8OF6BYeDEk64Jbzj3lsE5vsUBrYw0S2bK187aPRLKWSTSexTGpZY4QRmjO9L5K9GEQ4EEl6xe8wpXOMNGjzErpVpo4W/miPZD/AiKfMkkel4cyUG3Swa+Qd//S/8rnwWO7H07JfH6vGvj/NDgAEAfcqvgcMO6pAAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1746,
            "name": "Agadir"
          },
          {
            "id": 1747,
            "name": "Al Hoceima"
          },
          {
            "id": 1748,
            "name": "Azilal"
          },
          {
            "id": 1749,
            "name": "Beni Mellal"
          },
          {
            "id": 1750,
            "name": "Ben Slimane"
          },
          {
            "id": 1751,
            "name": "Boulemane"
          },
          {
            "id": 1752,
            "name": "Casablanca"
          },
          {
            "id": 1753,
            "name": "Chaouen"
          },
          {
            "id": 1754,
            "name": "El Jadida"
          },
          {
            "id": 1755,
            "name": "El Kelaa des Sraghna"
          },
          {
            "id": 1756,
            "name": "Er Rachidia"
          },
          {
            "id": 1757,
            "name": "Essaouira"
          },
          {
            "id": 1758,
            "name": "Fes"
          },
          {
            "id": 1759,
            "name": "Figuig"
          },
          {
            "id": 1760,
            "name": "Guelmim"
          },
          {
            "id": 1761,
            "name": "Ifrane"
          },
          {
            "id": 1762,
            "name": "Kenitra"
          },
          {
            "id": 1763,
            "name": "Khemisset"
          },
          {
            "id": 1764,
            "name": "Khenifra"
          },
          {
            "id": 1765,
            "name": "Khouribga"
          },
          {
            "id": 1766,
            "name": "Laayoune"
          },
          {
            "id": 1767,
            "name": "Larache"
          },
          {
            "id": 1768,
            "name": "Marrakech"
          },
          {
            "id": 1769,
            "name": "Meknes"
          },
          {
            "id": 1770,
            "name": "Nador"
          },
          {
            "id": 1771,
            "name": "Ouarzazate"
          },
          {
            "id": 1772,
            "name": "Oujda"
          },
          {
            "id": 1773,
            "name": "Rabat-Sale"
          },
          {
            "id": 1774,
            "name": "Safi"
          },
          {
            "id": 1775,
            "name": "Settat"
          },
          {
            "id": 1776,
            "name": "Sidi Kacem"
          },
          {
            "id": 1777,
            "name": "Tangier"
          },
          {
            "id": 1778,
            "name": "Tan-Tan"
          },
          {
            "id": 1779,
            "name": "Taounate"
          },
          {
            "id": 1780,
            "name": "Taroudannt"
          },
          {
            "id": 1781,
            "name": "Tata"
          },
          {
            "id": 1782,
            "name": "Taza"
          },
          {
            "id": 1783,
            "name": "Tetouan"
          },
          {
            "id": 1784,
            "name": "Tiznit"
          }
        ]
      },
      {
        "id": 103,
        "name": "Namibia",
        "prefixNumber": "+264",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMEI3N0VBRTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMEI3N0VBRjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQjc3RUFDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEwQjc3RUFEMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rnH82gAABORJREFUeNqslmtsU3UYxn+n7dq1o2Mb7OJUBGZEjck22ECHiW4EI4iiDEb8IoPAMHFsA+/6xS9+YAheEgNjDBkDhiSKSKJhExmg8cKQXbgMAxHGGDCB9bKu69qe+vb0UBiXgOhJTtOe9LzP//c+z/89RyH3g7NAupxu/uthNMBgANo6Medn8dX2cmYca6HjpTIGunowJtjD/wp/dJv0L5ELSkhujIEBCyhyxeKDmMCdiZqM0HlRlu/j+XXlfDkvC+tHqzn45ttSKxHLiPsIBQfBYCA06LebojeGRd1xWG0D5GZ2EAopNJ+8H2+/FWze21O2nCK2IJuNG19jTqAb58TptBxowGZ9FKPVpokqhhh8jm5M+IkIiyZBI0mpl5iVfYzJGZ0EVAPj7u1hZ9tDXHDERxYWPm9G6RxgxtoythVnY/24isPL3sGDGXtCLiElqAmE/EHcnhZGpzxO+qYqXTjcV6GdOqmNwuyj5IzuxmIKMirJiddvYnNDHsR7hlL6hPKQUE7JpraulKLBszgmzaDl911C+QhxYUo1IJVNeC+fIQYHefNXEqoqY7Fnpy4cMGIa4cTljJUAKIzM6dcux/QKjMOKZaQDn0dabvGLqE7Z59Mo6+dnM+yzao6Uv0WfRplzHWUrGSlPkLppPfunplO0+1XO7/5aFzYGCfTGk5joJeRScRyK1YhVZ4ikxH58l6XV8RK0gCqUp7HkZ7Jp8xJm+4UyZxq/HGzUvIxSKtdSroD15Szq+551y6dJHqS7o7J1YUNIC1DD0QyS4rz0uIcRCCr80ZnODx0ZIipt7boErgFeqC7TEhu7cjWH33iffilvTxRK1EhcdC81yq117M1PZnbDQi42fQtp42C4DdQgV1Mt2+ZidzK1eyZy/NxfsnIDv50Yg7vXDKc6sDydRe3GUuaqkljx8pDupS1MGQpe46WTvGKhrKlgsXcXayufEcqQRomqaqJaLqPCsn0Y3ifb0EzjgcdkIRKg8+clRC6eW1PKtvkTsH0qXlbcxMvBMGUbY5MnkVa/gZ+npDOroYSepu1C+bB0zBYVjG6IIb/C4lZpq0H8bD+DpSCTzfWVFHo7xcvptGpeXp/YLqG8TN6CMGUZC13fUVM5TaccP4Ty1sJX9qXLx0wpsuWVLGyr1nDk9feEUrxMmCBrU4cmNlW8rP+JpvwRzG1YJJQ7IHXcTSlvFJYxhl9IW09jfiqTOklskXoOR65Mn+YGIdQTG/VSp5y3HDYspcSzi+rKJWILN3h5a+Ew5RmhdMj0qVoSnT5Hlr2rUcZHp4+e2L7WiJdb97G/II1C8fLvpm8iib0N5VDh5pNYp4zXKAs9p3FqlLqXtuunTy95C1dBdelVL33qHVNeeygza5pddQsm2O2fCOXSCGVcwliNUlEUVBmNfZ52xoqXaVs2sK8ghaLGpVz4UU+sxfavBPXDrYT+POG69HKp/bgkNu7Kk0QKKYarXmYVfwhfVFAi06f687LI9EkeE6EkdDdPbrfSbh3t8np9dmviA1LiCqVfEtvOgyl5ktha9hYkM7exggt7dkS8NN8V5RBhk6rEE5sUG/HSGMOgq4eAv4vJxZLY9ctY5JEZu+JZeTm4Oy9vGS7FbHZLsfBbiDvodGKxJzG+ah2/znmSFxtLIl7eI17abf+LoP7G4/5HgAEAvGpSdeM9fnwAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1785,
            "name": "Caprivi"
          },
          {
            "id": 1786,
            "name": "Erongo"
          },
          {
            "id": 1787,
            "name": "Hardap"
          },
          {
            "id": 1788,
            "name": "Karas"
          },
          {
            "id": 1789,
            "name": "Khomas"
          },
          {
            "id": 1790,
            "name": "Kunene"
          },
          {
            "id": 1791,
            "name": "Ohangwena"
          },
          {
            "id": 1792,
            "name": "Okavango"
          },
          {
            "id": 1793,
            "name": "Omaheke"
          },
          {
            "id": 1794,
            "name": "Omusati"
          },
          {
            "id": 1795,
            "name": "Oshana"
          },
          {
            "id": 1796,
            "name": "Oshikoto"
          },
          {
            "id": 1797,
            "name": "Otjozondjupa"
          }
        ]
      },
      {
        "id": 104,
        "name": "Nepal",
        "prefixNumber": "+977",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkNCMjg2OTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkNCMjg2QTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQjc3RUI0MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQ0IyODY4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8vLQDwAAA4RJREFUeNq0lXtoU3cUx7+/+2rSR9L04SNWbdX6RuhGcW51uKp0FXVsQ9gfUphTBO0/goj/iCCICBNREJyzjk7ErlPEirZqnYiPWtOVRTYb1zZVY9NIjbFpk97eR+5OkmL/atLXfnC53PO793zO+Z3vOZcZhoHRFvvspyoIGYeh9rlhaFELxrOMpspR97hEH64JPt9W4Wt0QbL9ADGTPEUwVSshOFcLBard1eKZzqqzOcq7eqTOKgQnTkkACcG9fDoXSMnBtrfNuOc68eXWHspezNgHshF9+PofwDwiUBkHp9kOy1AYZzuquQvtp4/OD79ugtm+ErxpwtlzSQWi62DBPnjkMJwaj83eJtx5dvyT3a/rHoNLOQLT9GEfxtSBmSTG7xyHxbUXUHj5N/xjzoNuMJzw3cB118n9RUFXG8wzyyCkjSv7hGDF0430VcVY7LgJ25ZNsH2zASue1EP9Yi1a5AhKBrrQ8O+phQde1jQQ9GcKwBJ3aUwOzEkSQm1/Qw8GP7gy+19hZmsj5qtBqLwAW2QIh15cgufpwe3be267UxmrABOTgoWEm9NyoTv9cH1ejuklJXiZYsPvjjeYwS+AlF9M9ddAp04SZChQAigP/JXdLlmr71kWVULX95CLhxMCG6pKgysTgibg7YMbyCDb/SV7jdb8DUcQ6q4lsp0UwIaFQBHQ+2pQhBbOp2dpwhmDRBVRFOjyIDTzXGTrg2hs+5F9F5G/vZW37ijCXmdMUGxklGpMmHyNoxnrggJL6RosvVmD7DvXECndiFrPuUXrfX8EqJU+Hu65uKJjqh5bWyXMWH9HvmfnY9r5UxDsM2I2ueZX9K0vx0XnSW4LJzbdzfm0GIM9zmilx/MT4ZINDzFv9gdodJlybQgULEc/xXyl4xdxtb/5MbXRsrG20dgmF9VY83mhv+kdqaE/AL3bDS9vRYhG5tWOc6ZVfkczwRfGMzYmDxaybJC7OvGiYjcGHjlil3vrLoSfP4OJ1N4tWSDT36qusyqtONDaQvCCscKFZANEVHj037qN/gdPYj71UD+ktEwwQYBAovISfI7yHvXtZzLKCne2/Jm5ogiy79WkwCZtyJrDwuBS06GG/fFg0mgmkw3KSFYq42FXgmhpO5b11YIdXXVZHxVBHXg6YbAjNc/z9bzvrTITjGSHF4XPpcxVQ7dS49dSdKVk9o72/n8CDABnj2XIyb5lqQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1798,
            "name": "Bagmati"
          },
          {
            "id": 1799,
            "name": "Bheri"
          },
          {
            "id": 1800,
            "name": "Dhawalagiri"
          },
          {
            "id": 1801,
            "name": "Gandaki"
          },
          {
            "id": 1802,
            "name": "Janakpur"
          },
          {
            "id": 1803,
            "name": "Karnali"
          },
          {
            "id": 1804,
            "name": "Kosi"
          },
          {
            "id": 1805,
            "name": "Lumbini"
          },
          {
            "id": 1806,
            "name": "Mahakali"
          },
          {
            "id": 1807,
            "name": "Mechi"
          },
          {
            "id": 1808,
            "name": "Narayani"
          },
          {
            "id": 1809,
            "name": "Rapti"
          },
          {
            "id": 1810,
            "name": "Sagarmatha"
          },
          {
            "id": 1811,
            "name": "Seti"
          }
        ]
      },
      {
        "id": 105,
        "name": "Netherlands",
        "prefixNumber": "+31",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkNCMjg2RDE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkNCMjg2RTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGQ0IyODZCMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQ0IyODZDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dLNUtgAAAEBJREFUeNpiXCej8Z9hAAATwwCBUYtHLaYZYPz///8nIM1LZ3s/j8bxqMU0AyxK7j28A2Av72gcj1o8/CwGCDAAa10IGBJ1C8IAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1812,
            "name": "Drenthe"
          },
          {
            "id": 1813,
            "name": "Flevoland"
          },
          {
            "id": 1814,
            "name": "Friesland"
          },
          {
            "id": 1815,
            "name": "Gelderland"
          },
          {
            "id": 1816,
            "name": "Groningen"
          },
          {
            "id": 1817,
            "name": "Limburg"
          },
          {
            "id": 1818,
            "name": "Noord-Brabant"
          },
          {
            "id": 1819,
            "name": "Noord-Holland"
          },
          {
            "id": 1820,
            "name": "Overijssel"
          },
          {
            "id": 1821,
            "name": "Utrecht"
          },
          {
            "id": 1822,
            "name": "Zeeland"
          },
          {
            "id": 1823,
            "name": "Zuid-Holland"
          }
        ]
      },
      {
        "id": 106,
        "name": "Netherlands Antilles",
        "prefixNumber": "+599",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ZDQjI4NzIxNzgzMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0ZDQjI4NzExNzgzMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQkE2REE0NTQ3MzVGMzJGMUI0MjQ3MkQxOUFBQTIyNDciIHN0UmVmOmRvY3VtZW50SUQ9IkJBNkRBNDU0NzM1RjMyRjFCNDI0NzJEMTlBQUEyMjQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZDn+FAAAAexJREFUeNrkVM9P1EAY/aad7UK72RZkNSgmROFiOHEyZoUQIgkJRw/Gm4khMfHf8KxnxRMQTsqJAyEEDv6InkiAhUAWVrbID3cL2y67225nPmd7U9L2ZGL061ya7703r+/rDEFEiCxndcUcGVOuXAVKW++cez/M7tk54/GjaKIEf6z+VWkinl8LW4vEEmksItWj9YKflG1GBBglCj5A8loiXnpxaSu8i1SmF2vfTuQ7tKmf2S5y7OhUuXSSWS5pZIdxH5CEfy48i9y7KXwDyQBWHj4fNvS2qReLQNKAFkA1yJNEBGKEWRbMtKE4VQ/9BoDf+G5VLIFngC5Au6aptRpHZGEDkwGGgp1/Wy1pVU3OTI8XCo5ZPBbed7b2c+tFgDRA/fatztdvRj9/PD6vXAT+LisQIX0/JCjCGG6sl/O7tuuKyQnjqpgfgC1seq68mSvl9yqMkbBMhHQ2dIjIT0/LrusamY7BwZvFogPgZYf6GCbKJevo6IyxmKyt2H9f7e+dmBz49GFB4B88yb57v3d4kA9a9agDMfX2S0Rblmgtt119+SqRUj1seaSSz85t7emkeu8u580oSxhb+1+Ft3pKwes63tAbeltNsFbnY3nxp9EpVE2gSrILWABWuAdm92HD+F9vvr9R+qcAAwDK6wIXIkUhaQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1824,
            "name": "Willemstad"
          }
        ]
      },
      {
        "id": 107,
        "name": "New Zealand",
        "prefixNumber": "+64",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzg5RTkyNDE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzg5RTkyNTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3ODlFOTIyMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE3ODlFOTIzMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ycsmVwAAAzVJREFUeNrslF9IU1Ecx3/nnHu3uc3p5lbOWDk1VDQj+muQgVREUJGFqEQPSf8IqYeIiAyKngojCiItqLCIrIewsH8WQf8gJNK0P6LRTJ0619y/u927e+7pbgn9hR7cY7+n8/L7nO/5nPM7qOvA8ezyOS0e87EbvZ9bX0CatXlv/vqWE/c21FVe84EgTk+T9zmFHRW5gs05++ib4LAXjFr4uWQFCAYEvxVX0jS6/XZfw+5Fm7c7GldVHm/3BBlNpVI0xZiRjepI3561OUa77fCg+dSdkYhrFMz6H90YQFS5KUCjoEGg/IJGm3ZcVczWckt0G3Fp1pUFHYUDN9uhtgqfv2owpcxEXli+4lJXpLXpoRIT27rHYkERNGSyO0qdDmN9CW7opj0DAmjxL+hA8Xw143hQdkUw8wesOhxTmFdnNIf8Wh5/tdrZmCeLSPaZJgnrbdFVAaYHJE12h2L5eemnl/D7X0mdH/zx4OquBAFLoF/vqg+6v4YYKSorNntHTILPI6Dei1dyayozSwv8L3s8Ev40bVbG+Agy6JY/5UICAx5AkOP9elUxiQuRIxwHBoM2HJZkVX3CO2nka/pXVyzbV72gNIuX0UnNPFi6qOjO5Xd1hx6Vbly6ZaUlP+PdGDvod9ZHciXXICgxjEnBrNQZthT1rEymQEUIxwqzTTfWpD8fUzxu1UzcGLmwv+5MUWB2x+NzR25Xt7ivPwlUO0Jzh54N2udWbG278vijwWKtylVqU93W7rftblAYxkh3dhlf6UDN/RyNicATwChCWV+AdY9EJIXFnajoDQtX3G1s29lBLg1ZfN4wpAND0PtFfIDsnTHk6+htbX1/U++UM7N499DdL1GFaJgidQnk/jAb9gnAJa6Ox5JI+11hSWWqur+7Bt0esGQAjYAeAc8BlWFChvRpMOEBEwYNr+aEoQlQby7TBnoKLKEymHCdyn2n/LUQ5NXDFEuicSd/jAyeElTtlhQwpAFlyUYLSrHTdKtcXuw0QpQlFS1RHY9zTDyvPgmR/v6HTAltJB0DoZJxEwhBMOKkpiYE1JHxjoMsx9fJTM2YOiyg5SbXyUz9r+fzH/1zfRNgANDBXQHER7G8AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1825,
            "name": "Auckland"
          },
          {
            "id": 1826,
            "name": "Bay of Plenty"
          },
          {
            "id": 1827,
            "name": "Canterbury"
          },
          {
            "id": 1828,
            "name": "Chatham Islands"
          },
          {
            "id": 1829,
            "name": "Gisborne"
          },
          {
            "id": 1830,
            "name": "Hawke's Bay"
          },
          {
            "id": 1831,
            "name": "Manawatu-Wanganui"
          },
          {
            "id": 1832,
            "name": "Marlborough"
          },
          {
            "id": 1833,
            "name": "Nelson"
          },
          {
            "id": 1834,
            "name": "Northland"
          },
          {
            "id": 1835,
            "name": "Otago"
          },
          {
            "id": 1836,
            "name": "Southland"
          },
          {
            "id": 1837,
            "name": "Taranaki"
          },
          {
            "id": 1838,
            "name": "Tasman"
          },
          {
            "id": 1839,
            "name": "Waikato"
          },
          {
            "id": 1840,
            "name": "Wellington"
          },
          {
            "id": 1841,
            "name": "West Coast"
          }
        ]
      },
      {
        "id": 108,
        "name": "Nicaragua",
        "prefixNumber": "+505",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzg5RTkyODE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjI4OEFCQTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3ODlFOTI2MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE3ODlFOTI3MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KfyaKgAAALBJREFUeNpiDG7/8p9hAAATwwCBUYtHLaYZYPwPBANhMQsQfwFiHuK1vGFg+PWD4d/rBwwM//4yMIkrMzCwcQLFhUmx9wsoqEny8ZdX74AW8TDEPbjBEPrgHsN/NkGGb+++kOrh/yyk6uDiE2Y4de0Jw+VbXxn+MTIxHBN8wGCtJklWUDOSlBo5WBjkud8wnHQMB2v8zHwbGAIkW8w4cIkrpOPraAEyavGoxVQBAAEGAHrPMKYO1i6mAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1842,
            "name": "Atlantico Norte"
          },
          {
            "id": 1843,
            "name": "Atlantico Sur"
          },
          {
            "id": 1844,
            "name": "Boaco"
          },
          {
            "id": 1845,
            "name": "Carazo"
          },
          {
            "id": 1846,
            "name": "Chinandega"
          },
          {
            "id": 1847,
            "name": "Chontales"
          },
          {
            "id": 1848,
            "name": "Esteli"
          },
          {
            "id": 1849,
            "name": "Granada"
          },
          {
            "id": 1850,
            "name": "Jinotega"
          },
          {
            "id": 1851,
            "name": "Leon"
          },
          {
            "id": 1852,
            "name": "Madriz"
          },
          {
            "id": 1853,
            "name": "Managua"
          },
          {
            "id": 1854,
            "name": "Masaya"
          },
          {
            "id": 1855,
            "name": "Matagalpa"
          },
          {
            "id": 1856,
            "name": "Nueva Segovia"
          },
          {
            "id": 1857,
            "name": "Rio San Juan"
          },
          {
            "id": 1858,
            "name": "Rivas"
          }
        ]
      },
      {
        "id": 109,
        "name": "Niger",
        "prefixNumber": "+227",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjI4OEFCRDE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjI4OEFCRTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGMjg4QUJCMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGMjg4QUJDMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+d5ixUwAAAKxJREFUeNpifBDExkAbwMRAMzBqNP2MZvz//z+NjGYhUt2HZV0/b1xmU9EUjKsi1uz/RIBnpWbXFRjuWDFcV2J4mqfz/+8fYnQRDusfl/Z92XuKw4CRRZKNU5/p68Er385spVI0/vvLAI8ORgYQ+98/6hjNoevEZ6v76/z//y9//Tz/j8dSmcvYk3opBKhkaj3DrSsMShoMOa1Exj0tEx/fRp3RjD5qNG4AEGAANauB5CbwRkAAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1859,
            "name": "Agadez"
          },
          {
            "id": 1860,
            "name": "Diffa"
          },
          {
            "id": 1861,
            "name": "Dosso"
          },
          {
            "id": 1862,
            "name": "Maradi"
          },
          {
            "id": 1863,
            "name": "Niamey"
          },
          {
            "id": 1864,
            "name": "Tahoua"
          },
          {
            "id": 1865,
            "name": "Tillaberi"
          },
          {
            "id": 1866,
            "name": "Zinder"
          }
        ]
      },
      {
        "id": 110,
        "name": "Nigeria",
        "prefixNumber": "+234",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjI4OEFDMTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjI4OEFDMjE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGMjg4QUJGMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGMjg4QUMwMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qCpo0QAAADBJREFUeNpiZGgPZMAN/leswyPL2BGER5aJgWZg1OhRo0eNHjV61OhRo2lnNECAAQBu1gQALTkVbAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1867,
            "name": "Abia"
          },
          {
            "id": 1868,
            "name": "Abuja Federal Capital"
          },
          {
            "id": 1869,
            "name": "Adamawa"
          },
          {
            "id": 1870,
            "name": "Akwa Ibom"
          },
          {
            "id": 1871,
            "name": "Anambra"
          },
          {
            "id": 1872,
            "name": "Bauchi"
          },
          {
            "id": 1873,
            "name": "Bayelsa"
          },
          {
            "id": 1874,
            "name": "Benue"
          },
          {
            "id": 1875,
            "name": "Borno"
          },
          {
            "id": 1876,
            "name": "Cross River"
          },
          {
            "id": 1877,
            "name": "Delta"
          },
          {
            "id": 1878,
            "name": "Ebonyi"
          },
          {
            "id": 1879,
            "name": "Edo"
          },
          {
            "id": 1880,
            "name": "Ekiti"
          },
          {
            "id": 1881,
            "name": "Enugu"
          },
          {
            "id": 1882,
            "name": "Gombe"
          },
          {
            "id": 1883,
            "name": "Imo"
          },
          {
            "id": 1884,
            "name": "Jigawa"
          },
          {
            "id": 1885,
            "name": "Kaduna"
          },
          {
            "id": 1886,
            "name": "Kano"
          },
          {
            "id": 1887,
            "name": "Katsina"
          },
          {
            "id": 1888,
            "name": "Kebbi"
          },
          {
            "id": 1889,
            "name": "Kogi"
          },
          {
            "id": 1890,
            "name": "Kwara"
          },
          {
            "id": 1891,
            "name": "Lagos"
          },
          {
            "id": 1892,
            "name": "Nassarawa"
          },
          {
            "id": 1893,
            "name": "Niger"
          },
          {
            "id": 1894,
            "name": "Ogun"
          },
          {
            "id": 1895,
            "name": "Ondo"
          },
          {
            "id": 1896,
            "name": "Osun"
          },
          {
            "id": 1897,
            "name": "Oyo"
          },
          {
            "id": 1898,
            "name": "Plateau"
          },
          {
            "id": 1899,
            "name": "Rivers"
          },
          {
            "id": 1900,
            "name": "Sokoto"
          },
          {
            "id": 1901,
            "name": "Taraba"
          },
          {
            "id": 1902,
            "name": "Yobe"
          },
          {
            "id": 1903,
            "name": "Zamfara"
          }
        ]
      },
      {
        "id": 111,
        "name": "North Korea",
        "prefixNumber": "+850",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzJDQkU3MzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzJDQkU3NDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MkNCRTcxMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MkNCRTcyMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uqrYYwAAAdNJREFUeNrUVc9LVFEU/s69982bH82QzUjOiDjpNoSgraNIuGhR2apVG6GNJEJBLtxIiP4jA26CLCFwM/4KESlaWLTIhVIKJjX2Zkbfu+/d2xsJsnHz1N7Cs7hwDvd+97uc7zuXcGsa4QRDaCF4VIL0/wfWJLwDERbrxz1Jk5+gTf61gCvrq2H8SQOHv932NJULhSScfw4KgUoFW1+RvQrG8G0Hba1IJuG6waEtRMSv9U1P2cf6yrS1r2Q18eSZ6ClAK3dltTY1QSxKTVfgeQHRq8wU2qejIn9rnlI/tlMvXpr379ozs6hW45PPjb7ecn8/NyKIB22M9qEbSur7rjnwgF/LV4ZG5PwSlJJvV6KPBqMPB+1ikeVaz65rLS3RdZ2aLntfNuSn9/LzB3f9I11KiJs3tFc7l2WIxeTiMs+3x8dGCQaBx4aHeGeHLC34/T0XNGvJOaWSM/OaDCP9czdTs1hzxnkz57ya5S1tp9M1LEsfVwjnxMX+vTuJ8QmzOaNB7tq7ytMRIKalg8ODwJwdKnd3+7pGo64tbO8gna6ne3vIZZFKQbrBKdd1PXV71BQnhwhBa9hHrzFN0OnsWHejqym8oRrq5Ds0Lt5XECL0bwEGAHp0quOMFme/AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 1904,
            "name": "Pyongyang"
          },
          {
            "id": 1905,
            "name": "Kanggye"
          },
          {
            "id": 1906,
            "name": "Chongjin"
          },
          {
            "id": 1907,
            "name": "Hamhung"
          },
          {
            "id": 1908,
            "name": "Sariwon"
          },
          {
            "id": 1909,
            "name": "Haeju"
          },
          {
            "id": 1910,
            "name": "Wonsan"
          },
          {
            "id": 1911,
            "name": "Sinuiju"
          },
          {
            "id": 1912,
            "name": "Hyesan"
          }
        ]
      },
      {
        "id": 112,
        "name": "Norway",
        "prefixNumber": "+47",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDZFOEY0MzE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDZFOEY0NDE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMEZBRTM0MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NkU4RjQyMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9564bgAAAchJREFUeNrslc9LG0EUxz872Wm226baJKKHSNNTwVbJQRC9xmsvvfgHePEmiH9Jj14KCgrtzUtBsIdcpLRioVINliIKkkMTxehisma3M/lBG9hoXUEP+mDZmfnOmy/v+97jGYcvB32CrFrFdxye/tzg7VqJ6ewMPLJY3nzHaydPaSSLSKVACMKY9ipz81YW3JLdPWKT8/NgRJ+3MMP4e67XvqpH123gIYvL9IrFYKRSwT89VSRe++ORCNRcvDMHtG9Y4vjWl2BEE9bU97CHXreg9ipCV5KqnsDgKMn9PFhRLUE44qWCFYxoSQ2B93Wdj6vr0NUFUcn8wgo/Rl4h0v1wpFPhhyI2sN4cq3/swltPbOjrBk+RHJTAqVy7j1Vx1S6/5nlNBfyG/P/jc1nEc5/3giNuSf1rl9XcNz4s5uCBZGpynMzwAOJZf7PqQ0ldNvxiB2KvWVy9z3n/aZOJ7KzKsc3G9hyZdFJJvqP20fZWu4rUpRfDF7ZT4uSAgqlybEiQEfblYzLf1/g9NIaIJ8O3k0gk6DidbLsudz36ltVUfiMSYdnUfcMSY5qdC6qF+f/kUa+1vFI28GuMxfvpdGPEsVvgjf0RYAA4FZnydWrl6wAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1913,
            "name": "Akershus"
          },
          {
            "id": 1914,
            "name": "Aust-Agder"
          },
          {
            "id": 1915,
            "name": "Buskerud"
          },
          {
            "id": 1916,
            "name": "Finnmark"
          },
          {
            "id": 1917,
            "name": "Hedmark"
          },
          {
            "id": 1918,
            "name": "Hordaland"
          },
          {
            "id": 1919,
            "name": "More og Romsdal"
          },
          {
            "id": 1920,
            "name": "Nordland"
          },
          {
            "id": 1921,
            "name": "Nord-Trondelag"
          },
          {
            "id": 1922,
            "name": "Oppland"
          },
          {
            "id": 1923,
            "name": "Oslo"
          },
          {
            "id": 1924,
            "name": "Ostfold"
          },
          {
            "id": 1925,
            "name": "Rogaland"
          },
          {
            "id": 1926,
            "name": "Sogn og Fjordane"
          },
          {
            "id": 1927,
            "name": "Sor-Trondelag"
          },
          {
            "id": 1928,
            "name": "Telemark"
          },
          {
            "id": 1929,
            "name": "Troms"
          },
          {
            "id": 1930,
            "name": "Vest-Agder"
          },
          {
            "id": 1931,
            "name": "Vestfold"
          }
        ]
      },
      {
        "id": 113,
        "name": "Oman",
        "prefixNumber": "+968",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDZFOEY0NzE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDZFOEY0ODE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NkU4RjQ1MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NkU4RjQ2MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oZcAewAAAahJREFUeNrUlbtKA0EUhr/ZS7yu5iIWIoKN2FioYCPBS2NloRaKlY/hY/gSVhFUlGChWATEQhFLK61EEhW8JMRks+OZbDotLDYJHhhmlx32O2f+/8woPz11B/SitaZUhP44WDa8vkB3F5RKmkTSsveyPWYmonBkjPFVhpFRUPLmxgQs//c86BTwzRUCJOoQsPog1uFxew3La5LGOOgAHu7hICOJuLJERQ62CGpQqcDKOvT1w/QMLC6hh4ZhcyuEVqtNAJtiip8QF23nFtFeH/ryAnWahfwT2KK31YyKjZE6OuFoHyWVqcwuKncGs/OQOzfmEkHcyHV2CILQTOkF9OEemGF0TaZgdQMkEbPV+uRYvC+GQ0cCVn568h3b9erb+VxotJMVtlNC4DFJoiyuL+SpJxkR2Kn3UM0Xg/mhuUwYQDwBfjV0uDFYaiDqdmqE7fz8aoz123Mk5mpTOH/OULcaLPIqgaqiaB3o8FhtBdiqaiquYjvdw1u3Lb0etAas5EStyb2xMyEXRkqWl4IWbrVMg+818qbXy8H/dnVbwV67+vixHfBvAQYAQ9x1aPT3zwwAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1932,
            "name": "Ad Dakhiliyah"
          },
          {
            "id": 1933,
            "name": "Al Batinah"
          },
          {
            "id": 1934,
            "name": "Al Wusta"
          },
          {
            "id": 1935,
            "name": "Ash Sharqiyah"
          },
          {
            "id": 1936,
            "name": "Az Zahirah"
          },
          {
            "id": 1937,
            "name": "Masqat"
          },
          {
            "id": 1938,
            "name": "Musandam"
          },
          {
            "id": 1939,
            "name": "Dhofar"
          }
        ]
      },
      {
        "id": 114,
        "name": "Pakistan",
        "prefixNumber": "+92",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDZFOEY0QjE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDZFOEY0QzE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NkU4RjQ5MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NkU4RjRBMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+95KRfwAAAndJREFUeNrElj9IW1EUxn8vRqpNrS8xoKnW0qBQzOTgpHZQoXTp5OBUOogIlcbQTScHpVAdhEKGDI4OUsSp4CLS0rFdirqorTXSanxIbXwxMXm9793bJhUpSB72wOG+c+6f751zvnO5mmVZSeCW0GPOydSbKcZfjUMTbkqN0D2v+qBkvAqp8fCfxFPWzh+gmRqaV7sCYE3t2oHOe530dvRi/bTAUv6c0IxaW1DrXQG2d3yB/gf9zI3Msb67DnkFIEB1XSfoCaKlNKp8VXKubGD78H1oibSw8GyBmcUZkh9FU9xU8ycQrguzPLHM2OMxcpmcS8AFGVX8SdwxE+8SEEIefiZU9EhXSxftze0MdQ+Rt/LSf4F4LwWcBv9dP32RPrb2tiiYhWITVsgwEm8T1FbXsp3aplFvJJlJugBsQmtDazHtXpWFCmULzZ5lnRKcGCLvdcLn48J0ey5PaknTcChMW6gNjL9PyRfynGgCtEEYlbhUY0HSzf1NzKzpmLFHMaeX7Uz8OUlTgPZ4SpHxZQHfgNRWiqUPS445eH+Q4aFh+GzfvkKzimRp2XLNgWYC/oDs7bKAPbKeE4sTorQFxxUfiDP/cp6mtqYi6HWYfj5N9GEU49BwgVz27VQPG5826JnsYWV8xan5QMeAo0fmEZWeSnzXfKx9W6N7stvpbXS1t6ybyw70Nqy+X6V+pJ7Z1Vl2jB1nSq/WMXMm0ddRIk8jGN8NyWyr3Ih/R22T5Q4cHBww+mKUWChGIBggk82Q3k3LKBskGd25QErBbbb6ZRqtU4vDr4cyf3ZagyVrcBO49Adsuab0vJ9/Ax+r18fxVb0+bKxfAgwAbIbG6d67HZUAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1940,
            "name": "Balochistan"
          },
          {
            "id": 1941,
            "name": "North-West Frontier Province"
          },
          {
            "id": 1942,
            "name": "Punjab"
          },
          {
            "id": 1943,
            "name": "Sindh"
          },
          {
            "id": 1944,
            "name": "Islamabad Capital Territory"
          },
          {
            "id": 1945,
            "name": "Federally Administered Tribal Areas"
          }
        ]
      },
      {
        "id": 115,
        "name": "Panama",
        "prefixNumber": "+507",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDdFNkQ1NjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzM3RkFEODE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI0N0U2RDU0MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI0N0U2RDU1MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IRlRqwAAAbFJREFUeNq8lksvA1EUx//3TqcPtCpSz5BYioUNESxJvGJBmlhZS3wCH8CChYhY+QhsfQQJCemiC+xKUDSNKtOhNXPnOvWKhZFcOj3JyZ3JzcnvvO65l0kp0wDaSA0oiFMwcdo9BesqDS0aVTENk177Pj7wba2GhLnbjiTNmTaEIz0hu4ILRYHl3UtkDevLEc/BRxcmxjdOsL5zjunNU+yfFcCqAe7vrEV7OcTDLJop1UNddRVPtc9tY3S4CTMjrSiUBCQ5wVgVwJaQmB+IIeTnKFoObIpa15j34DLkExTUuWvbi4cH2MgDeXWnfM8Ukapo5IxlUxZaYpQeG1pDvTq4YymhbJR7EuiM6kjubaOeVkH/yuC722f1AtHZzllB8EgECGjQAn+pcVhXtyq3eB3Z/VJakX+EFqZjqHG1yfVnoaZzDBOZ1S3Y2Tu4jb2Kg58Sx0hNL+BmZQ2p2UWYB8kfM1NxcE1fD1hrCPfIgDUFUDvYqza5/iMNY5NojMfpzqbGLd9unHkPli8WonMT4KEgnGIJUthgXPcezPw6lfQdxIOBX0em8fH6MFAdeWO9CjAAKGmKMiin+isAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1946,
            "name": "Bocas del Toro"
          },
          {
            "id": 1947,
            "name": "Chiriqui"
          },
          {
            "id": 1948,
            "name": "Cocle"
          },
          {
            "id": 1949,
            "name": "Colon"
          },
          {
            "id": 1950,
            "name": "Darien"
          },
          {
            "id": 1951,
            "name": "Herrera"
          },
          {
            "id": 1952,
            "name": "Los Santos"
          },
          {
            "id": 1953,
            "name": "Panama"
          },
          {
            "id": 1954,
            "name": "San Blas"
          },
          {
            "id": 1955,
            "name": "Veraguas"
          }
        ]
      },
      {
        "id": 116,
        "name": "Papua New Guinea",
        "prefixNumber": "+675",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzM3RkFEQjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzM3RkFEQzE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMzdGQUQ5MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMzdGQURBMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+A8tj8QAAA/9JREFUeNqcVUtoXGUU/u5z5t7x9s5MpjNgbLEzNYyEJkwqCBJTG5AiLUJXCbgRpBBSQrPpQhSSjeuARVG0rq24UOJCu5AuJAsfCRFja5OGpLE2tslknjdzn7/n3ljJZGbMJAd+uPd/fed83znn5wCwrBDCp9oxvCipWHBqcGiSx8GNEwB7gwNHh8U4A3Nb7/XvL99xTZwpLOF6LY9uMYwY3eCAHQyUbrIINNzpQe1x4Brc/20v/xeY79xI+U+MVh5AJ+A0sdAuuB+ZU+YgdjBkvysift6CYVD4/nGudcR19sn2Jl4rLuO+a6FXUII5ryXiDr28DFQsCUdesCF1m3CK5AQtOiUOrXxvKuVPjoGXifobZgG9RL1GPDZE799JU8aGgPAJF+lLFYSf88DWJCTfMJH7IQ+1y4W5JQQyNEhDo0RDaxXUmKjjvehxGMzDqmdBesIdgVoFAR2vmtDOWtBOOVBPu3D/5iDotPisi+2bMhYu6gFlgsqaa7zXRFHE0+kTuMaV8DpRv+k56BHCAe3+FWaBR+J8DSdv5pF6uwy124X3iAP5B2bRhg0eyrkaOscMWCbfQHlL4KGhITy4t4yxy1dwy64G1H9rlZEj6hWKmoUYBI0h/5mKtdEoqr+K4LMuhCiDuSZg68sQaj/K4DhigFDZHmCxFfDi4iLm5+dx9/bt4D9PqXuxtIJJNYWrahJR3cXKFzLWP1dgkf/F701kuxyIzzvgH/O4O6rh6AUTCO0g8gLqwPfVuJldkI/gmtaJDvL7jmNC5Hy9eYRiHrQzNtLvV7B6NYK/bijIvFPBw+sKvAqBSW1ovNdCoRAEQQi+v7FKeKVwD7+4BvpkBSLv17ALe4vD+lcKFgajMB8KiPdbCFGSKWkXToVvrnEkEsHk5CSmpqaQSqXqNvn/c3NzmJmZQSwWC+ZWqc7PEvgH2xvwW26ckWoUsRpzUF2izkdOiJTJhVsypKNeQznXuTEyMoLx8XHIsly3ybIs0oeB5/nge7ddoU53iTpehIr1JL/T7STdg7nCw/iD0opkri6IEBXWuo4zmQwSiQRmZ2dh23bLMnMcp2G+V1Tw8VPP4LSk4DebHhrCUY97sB9zsDd5iHrdo1HeN7kGBwcDGaanp/fPAyqdDwn8zXAcy/TwbBoeJIFeKz+zGdprIE9M13Ukk8m2EtAkOd4qr2Gc6O/gRGQiEhzZa9qvD1VO7dhLUgQfUfRdlHi/u7Wg4/HtRJzL5TAxMYH+/v5DAc9QtxsoLuFrq4ge0t9PPndX6C2B+/r6gvIaGBg4dNQFz8VQaRXvVtdxjJfQScPeBV76t+/XDU3T2PDwMKMsZ83WDzrOyRpbjGdZNXGK/RzrKv0jwACqn6gx8GMIaAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1956,
            "name": "Bougainville"
          },
          {
            "id": 1957,
            "name": "Central"
          },
          {
            "id": 1958,
            "name": "Chimbu"
          },
          {
            "id": 1959,
            "name": "Eastern Highlands"
          },
          {
            "id": 1960,
            "name": "East New Britain"
          },
          {
            "id": 1961,
            "name": "East Sepik"
          },
          {
            "id": 1962,
            "name": "Enga"
          },
          {
            "id": 1963,
            "name": "Gulf"
          },
          {
            "id": 1964,
            "name": "Madang"
          },
          {
            "id": 1965,
            "name": "Manus"
          },
          {
            "id": 1966,
            "name": "Milne Bay"
          },
          {
            "id": 1967,
            "name": "Morobe"
          },
          {
            "id": 1968,
            "name": "National Capital"
          },
          {
            "id": 1969,
            "name": "New Ireland"
          },
          {
            "id": 1970,
            "name": "Northern"
          },
          {
            "id": 1971,
            "name": "Sandaun"
          },
          {
            "id": 1972,
            "name": "Southern Highlands"
          },
          {
            "id": 1973,
            "name": "Western"
          },
          {
            "id": 1974,
            "name": "Western Highlands"
          },
          {
            "id": 1975,
            "name": "West New Britain"
          }
        ]
      },
      {
        "id": 117,
        "name": "Paraguay",
        "prefixNumber": "+595",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzM3RkFERjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzM3RkFFMDE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMzdGQUREMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMzdGQURFMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8tTVLQAAAOtJREFUeNpiPCeo9p9hAAATwwCBUYtHLaYZYPzz+csnIM1LtEsZGRj+cHMzfL10ieHn928MAmYWDOxA+u8/knLlZxZmHm6SXPoXiJ8d3s7w/OAJBl5uPobv314yyDj6M7DQPKhfvmQ4MLebYfqfNwyb5UQYLqxbwvDz6jXax/G/X78Z2L7yMjAKcDPc+v6I4ddbUHyRXvgx/v//n6Q4BoFPGzYy3Nm7k+Hn/98MqrZODCLhkaTa+5nx09dfJCYuJoafnMwMXw5fYGD8/ZeBy8mYgePHP4Z///6SZjGDxYrRSmLU4lGLqQIAAgwAPdxSxGn7ZuUAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 1976,
            "name": "Alto Paraguay"
          },
          {
            "id": 1977,
            "name": "Alto Parana"
          },
          {
            "id": 1978,
            "name": "Amambay"
          },
          {
            "id": 1979,
            "name": "Asuncion"
          },
          {
            "id": 1980,
            "name": "Boqueron"
          },
          {
            "id": 1981,
            "name": "Caaguazu"
          },
          {
            "id": 1982,
            "name": "Caazapa"
          },
          {
            "id": 1983,
            "name": "Canindeyu"
          },
          {
            "id": 1984,
            "name": "Central"
          },
          {
            "id": 1985,
            "name": "Concepcion"
          },
          {
            "id": 1986,
            "name": "Cordillera"
          },
          {
            "id": 1987,
            "name": "Guaira"
          },
          {
            "id": 1988,
            "name": "Itapua"
          },
          {
            "id": 1989,
            "name": "Misiones"
          },
          {
            "id": 1990,
            "name": "Neembucu"
          },
          {
            "id": 1991,
            "name": "Paraguari"
          },
          {
            "id": 1992,
            "name": "Presidente Hayes"
          },
          {
            "id": 1993,
            "name": "San Pedro"
          }
        ]
      },
      {
        "id": 118,
        "name": "Peru",
        "prefixNumber": "+51",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QjRGQkQxQTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QjRGQkQxQjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMzdGQUUxMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMzdGQUUyMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b8OOOwAAAGlJREFUeNpiPMPA8JSBgUEKiD8zYAF/gJiNi4tB7/FjBmYhIQZ84N+PHwyXZWUZvr95w8CKWxkvED9jgTIYkGh6AF4mhgECoxaPWjxq8ajFoxaPWjxq8cBbzAJt8vDiavrQovUBsgsgwABVWxD3afjyOwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 1994,
            "name": "Amazonas"
          },
          {
            "id": 1995,
            "name": "Ancash"
          },
          {
            "id": 1996,
            "name": "Apurimac"
          },
          {
            "id": 1997,
            "name": "Arequipa"
          },
          {
            "id": 1998,
            "name": "Ayacucho"
          },
          {
            "id": 1999,
            "name": "Cajamarca"
          },
          {
            "id": 2000,
            "name": "Callao"
          },
          {
            "id": 2001,
            "name": "Cusco"
          },
          {
            "id": 2002,
            "name": "Huancavelica"
          },
          {
            "id": 2003,
            "name": "Huanuco"
          },
          {
            "id": 2004,
            "name": "Ica"
          },
          {
            "id": 2005,
            "name": "Junin"
          },
          {
            "id": 2006,
            "name": "La Libertad"
          },
          {
            "id": 2007,
            "name": "Lambayeque"
          },
          {
            "id": 2008,
            "name": "Lima"
          },
          {
            "id": 2009,
            "name": "Loreto"
          },
          {
            "id": 2010,
            "name": "Madre de Dios"
          },
          {
            "id": 2011,
            "name": "Moquegua"
          },
          {
            "id": 2012,
            "name": "Pasco"
          },
          {
            "id": 2013,
            "name": "Piura"
          },
          {
            "id": 2014,
            "name": "Puno"
          },
          {
            "id": 2015,
            "name": "San Martin"
          },
          {
            "id": 2016,
            "name": "Tacna"
          },
          {
            "id": 2017,
            "name": "Tumbes"
          },
          {
            "id": 2018,
            "name": "Ucayali"
          }
        ]
      },
      {
        "id": 119,
        "name": "Philippines",
        "prefixNumber": "+63",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QjRGQkQxRTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QjRGQkQxRjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNEZCRDFDMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdCNEZCRDFEMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RLn3GgAAAxpJREFUeNq0VUtME1EUPTOt0JYpnwJCVBQh0agLZWsgMXErGze60R0uNDGiK6IICiqkAgFjRFjgl5AQDX5CMEDih0QSNBiDIJRfpOVTSqG00EKZ97ydwWKEhXx6k5np3PfmnXPP/VRo+Dhmy7k7YOz50APEi0CiEZAZwBFSEzgZYEfZEzvy7vfB3T0OpEQBxm1EIHToInw/3ehPQ/ZZD3rfncS5S2mAZxHocarAGiFEEfsnZ5mr2Sga04GwJMXZ0TWF/IpvaGwYIB/JvydSlZ7zLZV6lp7GtRbrGodxvbwTlnaSP8GgXksshMDcTyvawLLyWlTVhYKH3zFvmQFSKf8Rm8//CjCbp4wbFCcbuQDoj0CMywputE16ca3kKx7V9VEN+FUCWkoD4xssrj9BLgxB7s0A99HBsosoieDOWrCh04FV7IzXo6YoHZ9fZeJ4Ziow6AFG3HQCqSIIm5OaT5jBHNUETAcKeiB8N8Qd+RCkY6s+rG2WcbX4DYY7xqj94oFI2i/L6wT2WYzMUakIwO0l5A2nIvIB0mGIUSfAtTEQt2cvC0TSOosBkwcMhShr9cJc0MScjikmSvr/Dl2rRApZjRKBitWo0gWO4Ax8yakS+dvkOboZFBpXlt4iw1rMZ20urpGkDUo9eQ9sopTwvQonQZcKMalcKbR/baalG7aci3B9aUWcGA1dVCT4uqUmYO7tBhs+A01yDZidwKSjJDcV2VwbxJSXwQ98vRZYc+/AXv9UEUUXnaoWGF9ff2uDDMJ2QbP/03JLMQhsEULCZfp9Xm2xOS+seYWYqKjCot8BfcReiDod4ckbmmhrDxCZBoVGCvKyVz/GaKEZnl8/oBMToY0xEeDSpgaIdk2vJlp5uJpaYLtRjOn2FtooQYo9SMHJmwZVgf2jlNNKCKZT1LqH1Dz2D8KWfxv25zXKuyFqH5ERtwRwBZjNQVh4TaBZYD4G280CjJc+wOLCBPSGZIh6/XIe2Rb/LXK1MhzPXsCWdwvuwU7ohARoTbFbGuGqiN1tHaPWXLNx+n09jQ4DJNMBGigspKAB+y3AAHmPY4VHbneXAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2019,
            "name": "Abra"
          },
          {
            "id": 2020,
            "name": "Agusan del Norte"
          },
          {
            "id": 2021,
            "name": "Agusan del Sur"
          },
          {
            "id": 2022,
            "name": "Aklan"
          },
          {
            "id": 2023,
            "name": "Albay"
          },
          {
            "id": 2024,
            "name": "Antique"
          },
          {
            "id": 2025,
            "name": "Apayao"
          },
          {
            "id": 2026,
            "name": "Aurora"
          },
          {
            "id": 2027,
            "name": "Basilan"
          },
          {
            "id": 2028,
            "name": "Bataan"
          },
          {
            "id": 2029,
            "name": "Batanes"
          },
          {
            "id": 2030,
            "name": "Batangas"
          },
          {
            "id": 2031,
            "name": "Biliran"
          },
          {
            "id": 2032,
            "name": "Benguet"
          },
          {
            "id": 2033,
            "name": "Bohol"
          },
          {
            "id": 2034,
            "name": "Bukidnon"
          },
          {
            "id": 2035,
            "name": "Bulacan"
          },
          {
            "id": 2036,
            "name": "Cagayan"
          },
          {
            "id": 2037,
            "name": "Camarines Norte"
          },
          {
            "id": 2038,
            "name": "Camarines Sur"
          },
          {
            "id": 2039,
            "name": "Camiguin"
          },
          {
            "id": 2040,
            "name": "Capiz"
          },
          {
            "id": 2041,
            "name": "Catanduanes"
          },
          {
            "id": 2042,
            "name": "Cavite"
          },
          {
            "id": 2043,
            "name": "Cebu"
          },
          {
            "id": 2044,
            "name": "Compostela"
          },
          {
            "id": 2045,
            "name": "Davao del Norte"
          },
          {
            "id": 2046,
            "name": "Davao del Sur"
          },
          {
            "id": 2047,
            "name": "Davao Oriental"
          },
          {
            "id": 2048,
            "name": "Eastern Samar"
          },
          {
            "id": 2049,
            "name": "Guimaras"
          },
          {
            "id": 2050,
            "name": "Ifugao"
          },
          {
            "id": 2051,
            "name": "Ilocos Norte"
          },
          {
            "id": 2052,
            "name": "Ilocos Sur"
          },
          {
            "id": 2053,
            "name": "Iloilo"
          },
          {
            "id": 2054,
            "name": "Isabela"
          },
          {
            "id": 2055,
            "name": "Kalinga"
          },
          {
            "id": 2056,
            "name": "Laguna"
          },
          {
            "id": 2057,
            "name": "Lanao del Norte"
          },
          {
            "id": 2058,
            "name": "Lanao del Sur"
          },
          {
            "id": 2059,
            "name": "La Union"
          },
          {
            "id": 2060,
            "name": "Leyte"
          },
          {
            "id": 2061,
            "name": "Maguindanao"
          },
          {
            "id": 2062,
            "name": "Marinduque"
          },
          {
            "id": 2063,
            "name": "Masbate"
          },
          {
            "id": 2064,
            "name": "Mindoro Occidental"
          },
          {
            "id": 2065,
            "name": "Mindoro Oriental"
          },
          {
            "id": 2066,
            "name": "Misamis Occidental"
          },
          {
            "id": 2067,
            "name": "Misamis Oriental"
          },
          {
            "id": 2068,
            "name": "Mountain Province"
          },
          {
            "id": 2069,
            "name": "Negros Occidental"
          },
          {
            "id": 2070,
            "name": "Negros Oriental"
          },
          {
            "id": 2071,
            "name": "North Cotabato"
          },
          {
            "id": 2072,
            "name": "Northern Samar"
          },
          {
            "id": 2073,
            "name": "Nueva Ecija"
          },
          {
            "id": 2074,
            "name": "Nueva Vizcaya"
          },
          {
            "id": 2075,
            "name": "Palawan"
          },
          {
            "id": 2076,
            "name": "Pampanga"
          },
          {
            "id": 2077,
            "name": "Pangasinan"
          },
          {
            "id": 2078,
            "name": "Quezon"
          },
          {
            "id": 2079,
            "name": "Quirino"
          },
          {
            "id": 2080,
            "name": "Rizal"
          },
          {
            "id": 2081,
            "name": "Romblon"
          },
          {
            "id": 2082,
            "name": "Samar"
          },
          {
            "id": 2083,
            "name": "Sarangani"
          },
          {
            "id": 2084,
            "name": "Siquijor"
          },
          {
            "id": 2085,
            "name": "Sorsogon"
          },
          {
            "id": 2086,
            "name": "South Cotabato"
          },
          {
            "id": 2087,
            "name": "Southern Leyte"
          },
          {
            "id": 2088,
            "name": "Sultan Kudarat"
          },
          {
            "id": 2089,
            "name": "Sulu"
          },
          {
            "id": 2090,
            "name": "Surigao del Norte"
          },
          {
            "id": 2091,
            "name": "Surigao del Sur"
          },
          {
            "id": 2092,
            "name": "Tarlac"
          },
          {
            "id": 2093,
            "name": "Tawi-Tawi"
          },
          {
            "id": 2094,
            "name": "Zambales"
          },
          {
            "id": 2095,
            "name": "Zamboanga del Norte"
          },
          {
            "id": 2096,
            "name": "Zamboanga del Sur"
          },
          {
            "id": 2097,
            "name": "Zamboanga Sibugay"
          }
        ]
      },
      {
        "id": 120,
        "name": "Poland",
        "prefixNumber": "+48",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCODVEM0U5RjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCODVEM0VBMDE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNEZCRDI0MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4NUQzRTlFMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2uLYNgAAACtJREFUeNpi/P//PwNtABMDzcCo0aNGD0ejWe6K2o4GyKjRo0YPBqMBAgwACfQEVtJhm9QAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2098,
            "name": "Greater Poland (Wielkopolskie)"
          },
          {
            "id": 2099,
            "name": "Kuyavian-Pomeranian (Kujawsko-Pomorskie)"
          },
          {
            "id": 2100,
            "name": "Lesser Poland (Malopolskie)"
          },
          {
            "id": 2101,
            "name": "Lodz (Lodzkie)"
          },
          {
            "id": 2102,
            "name": "Lower Silesian (Dolnoslaskie)"
          },
          {
            "id": 2103,
            "name": "Lublin (Lubelskie)"
          },
          {
            "id": 2104,
            "name": "Lubusz (Lubuskie)"
          },
          {
            "id": 2105,
            "name": "Masovian (Mazowieckie)"
          },
          {
            "id": 2106,
            "name": "Opole (Opolskie)"
          },
          {
            "id": 2107,
            "name": "Podlasie (Podlaskie)"
          },
          {
            "id": 2108,
            "name": "Pomeranian (Pomorskie)"
          },
          {
            "id": 2109,
            "name": "Silesian (Slaskie)"
          },
          {
            "id": 2110,
            "name": "Subcarpathian (Podkarpackie)"
          },
          {
            "id": 2111,
            "name": "Swietokrzyskie (Swietokrzyskie)"
          },
          {
            "id": 2112,
            "name": "Warmian-Masurian (Warminsko-Mazurskie)"
          },
          {
            "id": 2113,
            "name": "West Pomeranian (Zachodniopomorskie)"
          }
        ]
      },
      {
        "id": 121,
        "name": "Portugal",
        "prefixNumber": "+351",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCODVEM0VBMzE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCODVEM0VBNDE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NUQzRUExMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4NUQzRUEyMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bRhArwAAAq9JREFUeNrElslPU1EUxn9voo+W2jIUKjiEIYpaNQRMVDYuHBIT3JqwIU5/gDsS18SlJG78A3TDBldiDEFNZHDHQjTBGMCWUQZpSynv9b3rrcXEBaCFoie5ue++m5fvne98Z1C43TwNVMuVYCczVHxph6GRZQ7JfUWed2l+uWb0zQd+2/+F+VX+k/09sADF1lDSKoorz8p+Aisit8c9IMEqA+vYNRaOoqDO6rnrXXKm7wiakdcplabILL4qm9MVKcpr1/g+6UGT8lAGAihBcEw3x0JhPJZcxlXaIws8OqtTM1DJen8Ja699JN9W8aWjjOTdNcSyQHUKSfWSSdu5aZ51zLHWB92jLl1OA/FjTaD5SfRpJG9tkLyxLL038o65vp2QMFxawkkocWkcmCHc1cPgtevYNpxv60drv4lDEC20RCYsXzr5xXtrYEcjUJYiXJzm8fMQja3fiFlTDL5bRQgX24qiX7IJWbDRso4ynMEbK8LxunukWmQLlYumC17NBfGO+ilfMLA8DrbpYEYNDk95SJQI+SOSZXWTpT3HWHdZTJm8j5aSCWaIJi1OuaNcbS3jSmsFJ+0xVsqS1N6LY370YUwbUtmiADHOplLCZHG1mCdtn+h+0MDxF0+50DtPrKSYNwdeEu4sRzszjZ6sQIlJcTVYeXm9fR4H0/SOhTkaSHG5+SsP6yLULw9zZzLFichBMtZnJu/7CfYcQK2zcfOkWpHdKb5lg8h6LUskaYOLdYsUSbHVR1J0Tkilj3iwl7yYg/Izv/NTVHkWkMT2HguZmIbMEU0wNB6S9TLNUixF/EMxR6IqiRkPojKDMETeVWtnqn+BZz0vTctarTEx78cYt9CQ1FbbuZi6+9mdRI56YUoPfQ5CspBv+uy+LRbY9M2Rx//H0aeA00cW64cAAwDqlwCQvzogDAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2114,
            "name": "Aveiro"
          },
          {
            "id": 2115,
            "name": "Acores"
          },
          {
            "id": 2116,
            "name": "Beja"
          },
          {
            "id": 2117,
            "name": "Braga"
          },
          {
            "id": 2118,
            "name": "Braganca"
          },
          {
            "id": 2119,
            "name": "Castelo Branco"
          },
          {
            "id": 2120,
            "name": "Coimbra"
          },
          {
            "id": 2121,
            "name": "Evora"
          },
          {
            "id": 2122,
            "name": "Faro"
          },
          {
            "id": 2123,
            "name": "Guarda"
          },
          {
            "id": 2124,
            "name": "Leiria"
          },
          {
            "id": 2125,
            "name": "Lisboa"
          },
          {
            "id": 2126,
            "name": "Madeira"
          },
          {
            "id": 2127,
            "name": "Portalegre"
          },
          {
            "id": 2128,
            "name": "Porto"
          },
          {
            "id": 2129,
            "name": "Santarem"
          },
          {
            "id": 2130,
            "name": "Setubal"
          },
          {
            "id": 2131,
            "name": "Viana do Castelo"
          },
          {
            "id": 2132,
            "name": "Vila Real"
          },
          {
            "id": 2133,
            "name": "Viseu"
          }
        ]
      },
      {
        "id": 122,
        "name": "Qatar",
        "prefixNumber": "+974",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGN0NFMTgzRTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGN0NFMTgzRjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY3Q0UxODNDMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3Q0UxODNEMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iEFoawAAAcBJREFUeNq8Vs0vA0Ecfbs7uy1toyIiIvFxIiTiIOFIxN3VwdUf4eLiRBwcfJYEoU1VNUpCGjS+Qor0UPER0lJNQxUJJYLumm45UEezv8wmM3uYt+/93rxZTlGUR3wVnSN0cIjI8Tn8i16cbO5BEAl4QcB/F6GP6XvBcRxKaipTExx5d9UPoYNJkd8vfLNL8AxOI34ZhZSlBytkTlEyd36IxrAybIV3zKECE53EnvH6uBMLPRbEw1GY8sxqfxUGrP9k/Jp4gaOzD1tTLhBJUg3GnPHKkA1b1nncXkQg6nTgiaBNj18Tz7g+u8Ta2Ax8zmUIhGjD+GzHD9+cB8H9AAUUwfM8E8YZu2bnmFBYXob80qJ0qMiyNsDGvFyYC/KhM2SnUEEjRJsAuQqcYtvmpn2+AEdl5rSSuralGW29HahsqMPH2zvkjyR7xnJShmdgCpuTLtwEw9AbDenjpFWAJO4eMNfVTyVfAKHO1uQ4rY3a4e4ewWPsHgazSdvIjFGZVy12bEy4qLk4Gpsie8YpebetbtyGIvRWEsGqMlxd1ViPpvZWFFdXqK5WkjIzVz/9dHYSol5SfwLU1BLYXBKfAgwAZJi4vg1/oSQAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2134,
            "name": "Ad Dawhah"
          },
          {
            "id": 2135,
            "name": "Al Ghuwayriyah"
          },
          {
            "id": 2136,
            "name": "Al Jumayliyah"
          },
          {
            "id": 2137,
            "name": "Al Khawr"
          },
          {
            "id": 2138,
            "name": "Al Wakrah"
          },
          {
            "id": 2139,
            "name": "Ar Rayyan"
          },
          {
            "id": 2140,
            "name": "Jarayan al Batinah"
          },
          {
            "id": 2141,
            "name": "Madinat ash Shamal"
          },
          {
            "id": 2142,
            "name": "Umm Sa'id"
          },
          {
            "id": 2143,
            "name": "Umm Salal"
          }
        ]
      },
      {
        "id": 123,
        "name": "Romania",
        "prefixNumber": "+40",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGN0NFMTg0NjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDNGODE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY3Q0UxODQ0MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3Q0UxODQ1MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vo6AZQAAADBJREFUeNpiZNCuZ8AN/iybjkf2koMAHlkmBpqBUaNHjR41etToUaNHjaad0QABBgCcdAQtf60IKgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2144,
            "name": "Alba"
          },
          {
            "id": 2145,
            "name": "Arad"
          },
          {
            "id": 2146,
            "name": "Arges"
          },
          {
            "id": 2147,
            "name": "Bacau"
          },
          {
            "id": 2148,
            "name": "Bihor"
          },
          {
            "id": 2149,
            "name": "Bistrita-Nasaud"
          },
          {
            "id": 2150,
            "name": "Botosani"
          },
          {
            "id": 2151,
            "name": "Braila"
          },
          {
            "id": 2152,
            "name": "Brasov"
          },
          {
            "id": 2153,
            "name": "Bucuresti"
          },
          {
            "id": 2154,
            "name": "Buzau"
          },
          {
            "id": 2155,
            "name": "Calarasi"
          },
          {
            "id": 2156,
            "name": "Caras-Severin"
          },
          {
            "id": 2157,
            "name": "Cluj"
          },
          {
            "id": 2158,
            "name": "Constanta"
          },
          {
            "id": 2159,
            "name": "Covasna"
          },
          {
            "id": 2160,
            "name": "Dimbovita"
          },
          {
            "id": 2161,
            "name": "Dolj"
          },
          {
            "id": 2162,
            "name": "Galati"
          },
          {
            "id": 2163,
            "name": "Gorj"
          },
          {
            "id": 2164,
            "name": "Giurgiu"
          },
          {
            "id": 2165,
            "name": "Harghita"
          },
          {
            "id": 2166,
            "name": "Hunedoara"
          },
          {
            "id": 2167,
            "name": "Ialomita"
          },
          {
            "id": 2168,
            "name": "Iasi"
          },
          {
            "id": 2169,
            "name": "Ilfov"
          },
          {
            "id": 2170,
            "name": "Maramures"
          },
          {
            "id": 2171,
            "name": "Mehedinti"
          },
          {
            "id": 2172,
            "name": "Mures"
          },
          {
            "id": 2173,
            "name": "Neamt"
          },
          {
            "id": 2174,
            "name": "Olt"
          },
          {
            "id": 2175,
            "name": "Prahova"
          },
          {
            "id": 2176,
            "name": "Salaj"
          },
          {
            "id": 2177,
            "name": "Satu Mare"
          },
          {
            "id": 2178,
            "name": "Sibiu"
          },
          {
            "id": 2179,
            "name": "Suceava"
          },
          {
            "id": 2180,
            "name": "Teleorman"
          },
          {
            "id": 2181,
            "name": "Timis"
          },
          {
            "id": 2182,
            "name": "Tulcea"
          },
          {
            "id": 2183,
            "name": "Vaslui"
          },
          {
            "id": 2184,
            "name": "Vilcea"
          },
          {
            "id": 2185,
            "name": "Vrancea"
          }
        ]
      },
      {
        "id": 124,
        "name": "Russia",
        "prefixNumber": "+7",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQTJGMDNGQjE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDNGQzE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMkYwM0Y5MTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBMkYwM0ZBMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I9CATwAAAEhJREFUeNpi/P///1MGBgYpIP7MQB/AC8TPWKAMBiSaLpYzMQwQGLWYboCRgeH//9GgHrV41GKqZCdgXhrNTqMWj1pMFQAQYAD5egotBoZoiQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2186,
            "name": "Amur"
          },
          {
            "id": 2187,
            "name": "Arkhangel'sk"
          },
          {
            "id": 2188,
            "name": "Astrakhan'"
          },
          {
            "id": 2189,
            "name": "Belgorod"
          },
          {
            "id": 2190,
            "name": "Bryansk"
          },
          {
            "id": 2191,
            "name": "Chelyabinsk"
          },
          {
            "id": 2192,
            "name": "Chita"
          },
          {
            "id": 2193,
            "name": "Irkutsk"
          },
          {
            "id": 2194,
            "name": "Ivanovo"
          },
          {
            "id": 2195,
            "name": "Kaliningrad"
          },
          {
            "id": 2196,
            "name": "Kaluga"
          },
          {
            "id": 2197,
            "name": "Kamchatka"
          },
          {
            "id": 2198,
            "name": "Kemerovo"
          },
          {
            "id": 2199,
            "name": "Kirov"
          },
          {
            "id": 2200,
            "name": "Kostroma"
          },
          {
            "id": 2201,
            "name": "Kurgan"
          },
          {
            "id": 2202,
            "name": "Kursk"
          },
          {
            "id": 2203,
            "name": "Leningrad"
          },
          {
            "id": 2204,
            "name": "Lipetsk"
          },
          {
            "id": 2205,
            "name": "Magadan"
          },
          {
            "id": 2206,
            "name": "Moscow"
          },
          {
            "id": 2207,
            "name": "Murmansk"
          },
          {
            "id": 2208,
            "name": "Nizhniy Novgorod"
          },
          {
            "id": 2209,
            "name": "Novgorod"
          },
          {
            "id": 2210,
            "name": "Novosibirsk"
          },
          {
            "id": 2211,
            "name": "Omsk"
          },
          {
            "id": 2212,
            "name": "Orenburg"
          },
          {
            "id": 2213,
            "name": "Orel"
          },
          {
            "id": 2214,
            "name": "Penza"
          },
          {
            "id": 2215,
            "name": "Perm'"
          },
          {
            "id": 2216,
            "name": "Pskov"
          },
          {
            "id": 2217,
            "name": "Rostov"
          },
          {
            "id": 2218,
            "name": "Ryazan'"
          },
          {
            "id": 2219,
            "name": "Sakhalin"
          },
          {
            "id": 2220,
            "name": "Samara"
          },
          {
            "id": 2221,
            "name": "Saratov"
          },
          {
            "id": 2222,
            "name": "Smolensk"
          },
          {
            "id": 2223,
            "name": "Sverdlovsk"
          },
          {
            "id": 2224,
            "name": "Tambov"
          },
          {
            "id": 2225,
            "name": "Tomsk"
          },
          {
            "id": 2226,
            "name": "Tula"
          },
          {
            "id": 2227,
            "name": "Tver'"
          },
          {
            "id": 2228,
            "name": "Tyumen'"
          },
          {
            "id": 2229,
            "name": "Ul'yanovsk"
          },
          {
            "id": 2230,
            "name": "Vladimir"
          },
          {
            "id": 2231,
            "name": "Volgograd"
          },
          {
            "id": 2232,
            "name": "Vologda"
          },
          {
            "id": 2233,
            "name": "Voronezh"
          },
          {
            "id": 2234,
            "name": "Yaroslavl'"
          },
          {
            "id": 2235,
            "name": "Adygeya"
          },
          {
            "id": 2236,
            "name": "Altay"
          },
          {
            "id": 2237,
            "name": "Bashkortostan"
          },
          {
            "id": 2238,
            "name": "Buryatiya"
          },
          {
            "id": 2239,
            "name": "Chechnya"
          },
          {
            "id": 2240,
            "name": "Chuvashiya"
          },
          {
            "id": 2241,
            "name": "Dagestan"
          },
          {
            "id": 2242,
            "name": "Ingushetiya"
          },
          {
            "id": 2243,
            "name": "Kabardino-Balkariya"
          },
          {
            "id": 2244,
            "name": "Kalmykiya"
          },
          {
            "id": 2245,
            "name": "Karachayevo-Cherkesiya"
          },
          {
            "id": 2246,
            "name": "Kareliya"
          },
          {
            "id": 2247,
            "name": "Khakasiya"
          },
          {
            "id": 2248,
            "name": "Komi"
          },
          {
            "id": 2249,
            "name": "Mariy-El"
          },
          {
            "id": 2250,
            "name": "Mordoviya"
          },
          {
            "id": 2251,
            "name": "Sakha"
          },
          {
            "id": 2252,
            "name": "North Ossetia"
          },
          {
            "id": 2253,
            "name": "Tatarstan"
          },
          {
            "id": 2254,
            "name": "Tyva"
          },
          {
            "id": 2255,
            "name": "Udmurtiya"
          },
          {
            "id": 2256,
            "name": "Aga Buryat"
          },
          {
            "id": 2257,
            "name": "Chukotka"
          },
          {
            "id": 2258,
            "name": "Evenk"
          },
          {
            "id": 2259,
            "name": "Khanty-Mansi"
          },
          {
            "id": 2260,
            "name": "Komi-Permyak"
          },
          {
            "id": 2261,
            "name": "Koryak"
          },
          {
            "id": 2262,
            "name": "Nenets"
          },
          {
            "id": 2263,
            "name": "Taymyr"
          },
          {
            "id": 2264,
            "name": "Ust'-Orda Buryat"
          },
          {
            "id": 2265,
            "name": "Yamalo-Nenets"
          },
          {
            "id": 2266,
            "name": "Altay"
          },
          {
            "id": 2267,
            "name": "Khabarovsk"
          },
          {
            "id": 2268,
            "name": "Krasnodar"
          },
          {
            "id": 2269,
            "name": "Krasnoyarsk"
          },
          {
            "id": 2270,
            "name": "Primorskiy"
          },
          {
            "id": 2271,
            "name": "Stavropol'"
          },
          {
            "id": 2272,
            "name": "Moscow"
          },
          {
            "id": 2273,
            "name": "St. Petersburg"
          },
          {
            "id": 2274,
            "name": "Yevrey"
          }
        ]
      },
      {
        "id": 125,
        "name": "Rwanda",
        "prefixNumber": "+250",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQTJGMDNGRjE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDQwMDE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMkYwM0ZEMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBMkYwM0ZFMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2RPnbwAAAbJJREFUeNrEVstKw0AUPZNMm0QN1hZq8QE+FoILdSeCoHt3bty680f6B/6BH6AbN4Lg1iqC4EZRQcH6wNLGvmxeM96OFdzoKmlOuJnkznDPzL3nwjAUS2UAY2QNRAZJpkGTKWWM/rtPwHyABTZNPnN62b3VdnTEOnHrGNQbWDAfkNXquHKn8eAVyJ8ics/miAMiDZtXsZPbx2bmhLYR4s6dwG5lC6etJUUePbGkkExgfegC29lD5LiDtjAxazzRaOHGnULNz1MhIiemNFMtF61bCAof0kZmzBc0wwFMpt+Q0x1axGIgZlIN9944BRfgLMBjZxSDWgfvQQYdaaj5GIhJucLAUWMFBx9rqATD+KRUn7XnsVfbwJNf6IqLzlws1aNVdO88lPIREtiydY08r+H8cw7XVF+pVO02ODw7BllL1VKOO4zj1qzqY9H1kuhURmCAD1gV8dME0dMTpdSUmHQiNb4pug7BXi9navSRIQvRH5Ds4fBRu6z/cvQLOveoDkmApw0/GeJqy4xNXH/3GgSfPliVv3qgX5C83rSSERcSqrGGhMB7Vx472qvPv1BcXwIMAIuEkzMvcwIMAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2275,
            "name": "Butare"
          },
          {
            "id": 2276,
            "name": "Byumba"
          },
          {
            "id": 2277,
            "name": "Cyangugu"
          },
          {
            "id": 2278,
            "name": "Gikongoro"
          },
          {
            "id": 2279,
            "name": "Gisenyi"
          },
          {
            "id": 2280,
            "name": "Gitarama"
          },
          {
            "id": 2281,
            "name": "Kibungo"
          },
          {
            "id": 2282,
            "name": "Kibuye"
          },
          {
            "id": 2283,
            "name": "Kigali Rurale"
          },
          {
            "id": 2284,
            "name": "Kigali-ville"
          },
          {
            "id": 2285,
            "name": "Umutara"
          },
          {
            "id": 2286,
            "name": "Ruhengeri"
          }
        ]
      },
      {
        "id": 126,
        "name": "Samoa",
        "prefixNumber": "+685",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQTVCMUQ2MzE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQTVCMUQ2NDE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBNUIxRDYxMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBNUIxRDYyMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mJryLAAAAXxJREFUeNrskEtLAlEUx8+9M97rjOMMGPaGHvQgWkW0MKI27iJo0ap2QVB9ABH8Rm2jhVAQ1CYisIU7kTLsoYk6ckWdmTs5pCVBMCnt/HEWh/v4nT8HBZeiVSzCFw1T1uTwytRV4qmYKwHxgIDABhCIbFRPHy9HjGpZIOACnBe9DItOEcqYybK67ZPW1xawKjPdYCYwkXw+aCZojkDgFuzjZqstVEKrs4eRzfdM4Sh6krlJx2Jbe9vL8FyCruhYhcFVhY4P+p1kVAwEg7fJ7EtOB4X2rB5W4+fJ+FkCVAne9LnQzMXdg/VahiENTKs3tclBpiDgQEDZCC9e32esSg0GlO68zq6B+oGqrfKqYNLy2OhBZKcxOQF18n1FNUb8HJBg2y7V6Hh6t4Fwx4kNCGk+WmZ14E7fziAQy9gvplRu1JDgSl2V5jF0BMHIMrler/sJET2CY2+P5AiniWIg7DK4mGou5AceAAnyv3xwvxAM/0Zf3Vf31X/iQ4ABAIPdhjTlJ084AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2287,
            "name": "A'ana"
          },
          {
            "id": 2288,
            "name": "Aiga-i-le-Tai"
          },
          {
            "id": 2289,
            "name": "Atua"
          },
          {
            "id": 2290,
            "name": "Fa'asaleleaga"
          },
          {
            "id": 2291,
            "name": "Gaga'emauga"
          },
          {
            "id": 2292,
            "name": "Gagaifomauga"
          },
          {
            "id": 2293,
            "name": "Palauli"
          },
          {
            "id": 2294,
            "name": "Satupa'itea"
          },
          {
            "id": 2295,
            "name": "Tuamasaga"
          },
          {
            "id": 2296,
            "name": "Va'a-o-Fonoti"
          },
          {
            "id": 2297,
            "name": "Vaisigano"
          }
        ]
      },
      {
        "id": 127,
        "name": "San Marino",
        "prefixNumber": "+378",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzM1RkUxMDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMzM1RkUxMTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMzVGRTBFMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMzVGRTBGMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pmAcAgAAAlxJREFUeNrUVU1PE1EUPW86hGk7tbVAoaDpByGG1EBMVEyMceHGnQtNXLjTH+BKf4BxZ1g10Z0LY1ITjW6MCwPBqCHBFghpLTRAS0EoQqX0ezrTzniBLm0thtpwkzsvk7n3nbnn3Xse08jQAuPIsy3AzXJokR1HYLXq/xk4PPsWQf+rfwbmD5sgFVJYXFrAejQAoa2CcNgFx+kBGE2dzQXmdWYUtz7CZppEdK2A5K8SBvtHm0v158UZTO9u46Syg+zyF4jZaZwxSgiVJDwY8yJdzBx9xTllA775T7iq+DEfD+K9NAqLWYcriZfgx+8iEBeQv3AbZv2JxoCfTG6Xaa2Q11AwHfGi4uvKBJuYGmceV5zzi48xlr6M9mQFCasD9/AMdsWheQNPtQ79TVVjA7RbTV1i5GX+oS+mq0s5M9DUJMkjgKwiJnbRGUdxKiOjT1TgNpQRyRvh+1ZmWF2n+JAOmkCJqXoF63jYBFb9ixrA9KnSC07OgVttw+aSAfazL/D6h4Tv0SLO9QKzK3ZA3w9YrzHwF6sqLNQDZlxDbUBUa9wynLZ2BEPDkGIenHf/xJAzj0yiG1O7fehyfoDAZihebKhnG2guOn6tBE25Dt7ejTs3hjCSXoPbb4Bn0AVTxyXIOxa8i7yBzHooVqZ6tCMA1hTaiNrAdAsLqSK8cyoyhgx8GyMYZkb0SMDzzU5i5D7F5ajYLcr5+7YMj+b2hs/U8NTL9ChQitlMMkaoCjEiEr1sjxnWqH5n+UPfCzwBWKwHLwJ1vKAdsLIPqjVPMvcHQJX/MJrH5D7+LcAAowvZ8JHN4kgAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2298,
            "name": "Acquaviva"
          },
          {
            "id": 2299,
            "name": "Borgo Maggiore"
          },
          {
            "id": 2300,
            "name": "Chiesanuova"
          },
          {
            "id": 2301,
            "name": "Domagnano"
          },
          {
            "id": 2302,
            "name": "Faetano"
          },
          {
            "id": 2303,
            "name": "Fiorentino"
          },
          {
            "id": 2304,
            "name": "Montegiardino"
          },
          {
            "id": 2305,
            "name": "San Marino Citta"
          },
          {
            "id": 2306,
            "name": "Serravalle"
          }
        ]
      },
      {
        "id": 128,
        "name": "Saudi Arabia",
        "prefixNumber": "+966",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzM1RkUxODE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMEE2MkM3MDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMzVGRTE2MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMzVGRTE3MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VDw2aQAAAwhJREFUeNrEVttOE1EUXdNO72ALvQqIQYSIxIA+GCMvPJEYLzH+gN/hZ/jAL2jiB/jkgw+YeEkkgsRE4w0UrLTFdnqbzrTj2jNtANMpwgOc5uScM3PmrL3X2nufKlic/QlgiF3D8bR+9k21PcGe8VjAPTihprq/UgCrxd505h7aaFm771qGM/WoznOl8017v8L9Hu+eb/a3Hh5btMpCgABqUwcaZfg9Ps4b8BpVhAOnEPH64eNaFfCWCbXVhMfUoXBUXAAP9pgHRoJR3Bu7jbA/grWdLyjUS0jzWc2oYDw6iunkFFa2P6CglxBUQ9DNOm6dncPH4g+8+LWC19+eA+HEIT02ahiLnsGNsXlcy8wgrgbxieDJSBLzo3McU1gmqBCr09tUMIYdsjLcfxpR7m1aZk+PvbiZecAx0O1lhbTlawUk6eVkfBJb5SyGQgMo8blFzWPU8XtxHWkaoelFvM2uYSSSQCw4gDfZVfyu5YnQ9eiGu8fUrUFP8vUixPY4NVWocZ36DYfjWBi+iqnUNLZqO8hW8gj7wrgzsYD10iY+k5nxwXOUyzyCxtQrfWoE9y/eRZJePnz3CDOJCVyKn8er7HtkqN3S1jIKZg0+o4y52BV4yMCzjZcwabBXIlpReuTM4mypa/FgWvhJk3gnducqOVtfP5nIlTaQolGbpD5AT0MEqdE7g9RqzIQ0dS5UttFQvG64mjuw5CEtR0Nz8tnfb7Ng5y9ph87nDCJ7n53vlpO3AiZ7mGr2HF3TSnPXWA6TQxko8Pc5oLKWYDEbzihgYpwcLmCyR+Zkwd4L6yiVq6O1jkFG6mhfBnXOmzTIah+oyI86tmhAjMaVzSq+Mrh0Fhi7oh2tZLZbi4WElF5nLkuFMuiZAEmXIJL1H+bvODW/nLiAp+tLeLL6GAgNol1HDxlce7UWD4RG0a1TqxXsats0oNC4EAPRSwY00V/pef9oB3ssh0sQSf+3/nYuBoJZjOpqNedQrAZcL4f/p3ofkAt1nYj2hHfXB7QTvY+1tsbH+ddH+yvAAIKJO5Z5g0J2AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2307,
            "name": "Al Bahah"
          },
          {
            "id": 2308,
            "name": "Al Hudud ash Shamaliyah"
          },
          {
            "id": 2309,
            "name": "Al Jawf"
          },
          {
            "id": 2310,
            "name": "Al Madinah"
          },
          {
            "id": 2311,
            "name": "Al Qasim"
          },
          {
            "id": 2312,
            "name": "Ar Riyad"
          },
          {
            "id": 2313,
            "name": "Ash Sharqiyah"
          },
          {
            "id": 2314,
            "name": "'Asir"
          },
          {
            "id": 2315,
            "name": "Ha'il"
          },
          {
            "id": 2316,
            "name": "Jizan"
          },
          {
            "id": 2317,
            "name": "Makkah"
          },
          {
            "id": 2318,
            "name": "Najran"
          },
          {
            "id": 2319,
            "name": "Tabuk"
          }
        ]
      },
      {
        "id": 129,
        "name": "Senegal",
        "prefixNumber": "+221",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMEE2MkM3MzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMEE2MkM3NDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwQTYyQzcxMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMwQTYyQzcyMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MP7aXAAAAYNJREFUeNrkVjFLw1AQ/u7loRUMtS6Ck7v+AcGiIrjo4i/wH7j6C1xcBAf/gJM4irvgoiLqIAgOHUpbqCgKWm1pX85L8opFYptAgogH93K8fLkvd7m7PMLWfBXApOgroqQJGnVhyusOF/LQ3gc4CqbyisyDMfWlCjqltqPGnUiciCta09ZAzzVKvK5/9Be2OgjnDgJ8d5oGJlYEmckfI5aEkhNq/OSmQKwIaAlhy9rZEtvIVE6WMeDgnrF/x4Ed7CFZ9LGJtQqb6qzMQccf3grxdWify15H7jlOBsTkp3SEcFEXe9fguMQ4rTJox+BERpB2Mkp12/gLY6NI2CvKYzWJtsLYnlXYXAzdGBOfWMdG0tf8unxiLMwpDEuUVy92WDGFmNSJLXnjEVibIizPEIY04ejGw7OkvzCRLNXJiCXinES5Mk0gv5eajFV5Ae8teT/rpP3nFxm/9/A0bOFlOkDot0fmfyGmND+Gtkce98ejT+jM2LrVfeq3i/Ol338r4PoUYABXBXI3FKW/6wAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2320,
            "name": "Dakar"
          },
          {
            "id": 2321,
            "name": "Diourbel"
          },
          {
            "id": 2322,
            "name": "Fatick"
          },
          {
            "id": 2323,
            "name": "Kaolack"
          },
          {
            "id": 2324,
            "name": "Kolda"
          },
          {
            "id": 2325,
            "name": "Louga"
          },
          {
            "id": 2326,
            "name": "Matam"
          },
          {
            "id": 2327,
            "name": "Saint-Louis"
          },
          {
            "id": 2328,
            "name": "Tambacounda"
          },
          {
            "id": 2329,
            "name": "Thies"
          },
          {
            "id": 2330,
            "name": "Ziguinchor"
          }
        ]
      },
      {
        "id": 130,
        "name": "Serbia",
        "prefixNumber": "+381",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzBBNjJDNzgxNzg3MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzBBNjJDNzcxNzg3MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMTZGRkE1MTE3NTQ4QTZGRTFCQTUwQTQzRDk3NDNGMkUiIHN0UmVmOmRvY3VtZW50SUQ9IjE2RkZBNTExNzU0OEE2RkUxQkE1MEE0M0Q5NzQzRjJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6RpbdwAAAFFJREFUeNpilJffzEAbwPL3719aGc3IyEgjo5kYaAZoaDTL48dfaWV0TKwkjYxm/P///2g0jhqNJ/G9aJxEq8R3jWYOZ+FgUB+NxiFvNECAAQD7cg2p1+zRzwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2331,
            "name": "Kosovo"
          },
          {
            "id": 2332,
            "name": "Montenegro"
          },
          {
            "id": 2333,
            "name": "Serbia"
          },
          {
            "id": 2334,
            "name": "Vojvodina"
          }
        ]
      },
      {
        "id": 131,
        "name": "Singapore",
        "prefixNumber": "+65",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzkxOEIzQzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzkxOEIzRDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3OTE4QjNBMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3OTE4QjNCMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k5fIFwAAAflJREFUeNrslk1rE1EUhp97Z5Jp0dTEL7S0GEFcKK4CLgouunARQcEK4kKqtTsVi8WFFUS6EDdiUXDvX9CFgkJXirjQoggiKoqSGIuYtpOk6SRzxzMTK/0BlwrSA5d5mYF5zrnnPXdG1fYMloBeHO3TDjEfv0CXh96Vh6AFLVmOA0phKTKyym4itIb6YsZ8LZEeG8U9WiS4fodw5m0CVZl1Hbgx1uA6uYRSaWUWb+oa3s2rmDfvaD16gNq2la57t1D5fsz7T7C01EnAQiRgU6qQOnyQ9PkRwulnNMcnSZ86g9qUJXw4DY1FUieHUH3bE20NTL2BPrA/ke37j1Ebs6TODic9DqbuEs3+JHX6OFrAkV+3AnaXhVo2T896onKZ5vCYtMCg9+6TLQ5ojl6ClIvanLNYcXc34fOXnUwGBzBUcAYKeLcnJYkfeDcu4544gvn23Zq7nStbdk6Ia73wxQxazOQOFVGu9PbJU6jVBVYmdn0kjo9+VVHptA1uoPzewoK8OENdIFWp7uIF3GOHaJ6bIHz9Cr1jN1Gl0gHmZJvbbRtgX9UKxTkRG2RMDEGA+fBZ3JxD5/uIag2bB8fK9s4rM79QFZGNp/nvIzEVMS+e2SiyDY4PgjlX9WScFTdWKxzNP4o18Br4/wPHXyf/z++Iv0rMhPVbgAEAAN6l96444okAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2335,
            "name": "Pulau Ujong"
          }
        ]
      },
      {
        "id": 132,
        "name": "Slovakia",
        "prefixNumber": "+421",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkIxODFBMzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkIxODFBNDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3OTE4QjNFMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQjE4MUEyMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YhjhIwAAApRJREFUeNrclktME0EYgL9l221LW/oAIlWBg4oXUUPkZGLwhIpBIDFBjeFoOPg6GfXqTSPxqDdNDEZJwMDBgB5MTJQLCWoPBhrwwSNAC7TUdvvYcQoESuRiq2icZLL//+/MfjOz/2MUIcQEsF32CFvTnLJPmlYFsp5bAi/gL7V/CyySSURcX5b1wDj6yNiKXdpEIvnnwIHWCwy59zCo2JnuuM/Mg0fL8pC3ipGmtt8CNvW+mVxTYiYr5W6VYv8HEvpXbNv24Wk+gaJphDq7iU0MY3y0M/h+hs+6BZsezR3ceP7FuhYU1DeW0el1yNhyUHatHVvVbkQ6je/mRSauXsdX7ODGnXd0Pw+CV+QOprRwXTMXYHZrGKEg9gOHSIcixEcDoKokp+aw19RiTI1gdpnBJ6OvKJUHWFXWNVUQFQUkYgm0ihI8p+rRXE6UAgVT0zGS/k+kxvxyjCq9Q+42e+4vgze4WpovKTtL+2so6eskNtDFwu0OsFjRLrXLw5d+cLyFb4aUxFxmpfmAs1ZtVQjMqMzu2MuYdRcvi2vp6naiq2Zad56jbvot5fLdcNACtsy83HescKQ/vJYuM98JGTQ1eIkuCgZef5eAWbk7aY+XUHfYRqnPzLMe6VgeZcWeW4sotypPh7PzdCqeoFBT8LW1cGX6IMFXfjAMHEeruVfhZ/7hUyKxNJrNkgdXghcL3RvAqqKwFA1T5HEweuYyZ23NJKQzPU72Uv3kLguz8zjsLtJC5JM/IsqQpyr8U2WS4aOHI1Qm57A0nETIf5zq62FccaO5PZBO5Zu4IqZNzTJhWBx2Jg07Wl9/JkuTcFWgZUbnD90knDZUCoEMX1KestWkLo/W+A/Komn1yuPc4qtP5IcAAwBoBOOwBg9d5gAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2336,
            "name": "Banskobystricky"
          },
          {
            "id": 2337,
            "name": "Bratislavsky"
          },
          {
            "id": 2338,
            "name": "Kosicky"
          },
          {
            "id": 2339,
            "name": "Nitriansky"
          },
          {
            "id": 2340,
            "name": "Presovsky"
          },
          {
            "id": 2341,
            "name": "Trenciansky"
          },
          {
            "id": 2342,
            "name": "Trnavsky"
          },
          {
            "id": 2343,
            "name": "Zilinsky"
          }
        ]
      },
      {
        "id": 133,
        "name": "Slovenia",
        "prefixNumber": "+386",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkIxODFBNzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkIxODFBODE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyQjE4MUE1MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQjE4MUE2MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ioEsVAAAAYNJREFUeNpi/P///1MGBgZeBjoDRqDF/xkGADAB8eeBsJgFn+STp78Z1h/4wHDnzi8GULgoKrMw+NkKMSgrMEPdTAEAhvSn/zjA9IZTQOtu/GcQ2f+fQXQ3kP3gf03+OaDMr/+UArzOtlT/DST/MgjpqDBIG6qCnMlgrgYSY6U8qLcd/ok91TExMZw48JfByYuZYdYsGQYONgaGlIx7DHuP/WBg0fvF8I/CNMnIIPr4E9bs9IeHgeHbaYbnV/QY+BXFGf78Bcbq+9cMihonGV7/t2ZgYPtKYeISZcYV+wycb8QYpjScYwju9GT4D1S2u+E8ww82CQYGEVAMMVPoY71n2H0MtBjka/531xkWlfxg4GJnZIjrYmF4zqXFwMD+DayVRhZDPfWHm4Hh7l2gO4BhraQGtPQ7UOwfNfIxnoT9F+Q0oO9UlaCBAGT/YaQ8D4MtZhMnQTk/9UquhS+jB6LEBFYSbAyfBqJ2Agb1gHiYCqlkKFrMOxAWg+rjZwNhOUCAAQDa9c0WhSA2hQAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2344,
            "name": "Ajdovscina"
          },
          {
            "id": 2345,
            "name": "Beltinci"
          },
          {
            "id": 2346,
            "name": "Benedikt"
          },
          {
            "id": 2347,
            "name": "Bistrica ob Sotli"
          },
          {
            "id": 2348,
            "name": "Bled"
          },
          {
            "id": 2349,
            "name": "Bloke"
          },
          {
            "id": 2350,
            "name": "Bohinj"
          },
          {
            "id": 2351,
            "name": "Borovnica"
          },
          {
            "id": 2352,
            "name": "Bovec"
          },
          {
            "id": 2353,
            "name": "Braslovce"
          },
          {
            "id": 2354,
            "name": "Brda"
          },
          {
            "id": 2355,
            "name": "Brezice"
          },
          {
            "id": 2356,
            "name": "Brezovica"
          },
          {
            "id": 2357,
            "name": "Cankova"
          },
          {
            "id": 2358,
            "name": "Celje"
          },
          {
            "id": 2359,
            "name": "Cerklje na Gorenjskem"
          },
          {
            "id": 2360,
            "name": "Cerknica"
          },
          {
            "id": 2361,
            "name": "Cerkno"
          },
          {
            "id": 2362,
            "name": "Cerkvenjak"
          },
          {
            "id": 2363,
            "name": "Crensovci"
          },
          {
            "id": 2364,
            "name": "Crna na Koroskem"
          },
          {
            "id": 2365,
            "name": "Crnomelj"
          },
          {
            "id": 2366,
            "name": "Destrnik"
          },
          {
            "id": 2367,
            "name": "Divaca"
          },
          {
            "id": 2368,
            "name": "Dobje"
          },
          {
            "id": 2369,
            "name": "Dobrepolje"
          },
          {
            "id": 2370,
            "name": "Dobrna"
          },
          {
            "id": 2371,
            "name": "Dobrova-Horjul-Polhov Gradec"
          },
          {
            "id": 2372,
            "name": "Dobrovnik-Dobronak"
          },
          {
            "id": 2373,
            "name": "Dolenjske Toplice"
          },
          {
            "id": 2374,
            "name": "Dol pri Ljubljani"
          },
          {
            "id": 2375,
            "name": "Domzale"
          },
          {
            "id": 2376,
            "name": "Dornava"
          },
          {
            "id": 2377,
            "name": "Dravograd"
          },
          {
            "id": 2378,
            "name": "Duplek"
          },
          {
            "id": 2379,
            "name": "Gorenja Vas-Poljane"
          },
          {
            "id": 2380,
            "name": "Gorisnica"
          },
          {
            "id": 2381,
            "name": "Gornja Radgona"
          },
          {
            "id": 2382,
            "name": "Gornji Grad"
          },
          {
            "id": 2383,
            "name": "Gornji Petrovci"
          },
          {
            "id": 2384,
            "name": "Grad"
          },
          {
            "id": 2385,
            "name": "Grosuplje"
          },
          {
            "id": 2386,
            "name": "Hajdina"
          },
          {
            "id": 2387,
            "name": "Hoce-Slivnica"
          },
          {
            "id": 2388,
            "name": "Hodos-Hodos"
          },
          {
            "id": 2389,
            "name": "Horjul"
          },
          {
            "id": 2390,
            "name": "Hrastnik"
          },
          {
            "id": 2391,
            "name": "Hrpelje-Kozina"
          },
          {
            "id": 2392,
            "name": "Idrija"
          },
          {
            "id": 2393,
            "name": "Ig"
          },
          {
            "id": 2394,
            "name": "Ilirska Bistrica"
          },
          {
            "id": 2395,
            "name": "Ivancna Gorica"
          },
          {
            "id": 2396,
            "name": "Izola-Isola"
          },
          {
            "id": 2397,
            "name": "Jesenice"
          },
          {
            "id": 2398,
            "name": "Jezersko"
          },
          {
            "id": 2399,
            "name": "Jursinci"
          },
          {
            "id": 2400,
            "name": "Kamnik"
          },
          {
            "id": 2401,
            "name": "Kanal"
          },
          {
            "id": 2402,
            "name": "Kidricevo"
          },
          {
            "id": 2403,
            "name": "Kobarid"
          },
          {
            "id": 2404,
            "name": "Kobilje"
          },
          {
            "id": 2405,
            "name": "Kocevje"
          },
          {
            "id": 2406,
            "name": "Komen"
          },
          {
            "id": 2407,
            "name": "Komenda"
          },
          {
            "id": 2408,
            "name": "Koper-Capodistria"
          },
          {
            "id": 2409,
            "name": "Kostel"
          },
          {
            "id": 2410,
            "name": "Kozje"
          },
          {
            "id": 2411,
            "name": "Kranj"
          },
          {
            "id": 2412,
            "name": "Kranjska Gora"
          },
          {
            "id": 2413,
            "name": "Krizevci"
          },
          {
            "id": 2414,
            "name": "Krsko"
          },
          {
            "id": 2415,
            "name": "Kungota"
          },
          {
            "id": 2416,
            "name": "Kuzma"
          },
          {
            "id": 2417,
            "name": "Lasko"
          },
          {
            "id": 2418,
            "name": "Lenart"
          },
          {
            "id": 2419,
            "name": "Lendava-Lendva"
          },
          {
            "id": 2420,
            "name": "Litija"
          },
          {
            "id": 2421,
            "name": "Ljubljana"
          },
          {
            "id": 2422,
            "name": "Ljubno"
          },
          {
            "id": 2423,
            "name": "Ljutomer"
          },
          {
            "id": 2424,
            "name": "Logatec"
          },
          {
            "id": 2425,
            "name": "Loska Dolina"
          },
          {
            "id": 2426,
            "name": "Loski Potok"
          },
          {
            "id": 2427,
            "name": "Lovrenc na Pohorju"
          },
          {
            "id": 2428,
            "name": "Luce"
          },
          {
            "id": 2429,
            "name": "Lukovica"
          },
          {
            "id": 2430,
            "name": "Majsperk"
          },
          {
            "id": 2431,
            "name": "Maribor"
          },
          {
            "id": 2432,
            "name": "Markovci"
          },
          {
            "id": 2433,
            "name": "Medvode"
          },
          {
            "id": 2434,
            "name": "Menges"
          },
          {
            "id": 2435,
            "name": "Metlika"
          },
          {
            "id": 2436,
            "name": "Mezica"
          },
          {
            "id": 2437,
            "name": "Miklavz na Dravskem Polju"
          },
          {
            "id": 2438,
            "name": "Miren-Kostanjevica"
          },
          {
            "id": 2439,
            "name": "Mirna Pec"
          },
          {
            "id": 2440,
            "name": "Mislinja"
          },
          {
            "id": 2441,
            "name": "Moravce"
          },
          {
            "id": 2442,
            "name": "Moravske Toplice"
          },
          {
            "id": 2443,
            "name": "Mozirje"
          },
          {
            "id": 2444,
            "name": "Murska Sobota"
          },
          {
            "id": 2445,
            "name": "Muta"
          },
          {
            "id": 2446,
            "name": "Naklo"
          },
          {
            "id": 2447,
            "name": "Nazarje"
          },
          {
            "id": 2448,
            "name": "Nova Gorica"
          },
          {
            "id": 2449,
            "name": "Novo Mesto"
          },
          {
            "id": 2450,
            "name": "Odranci"
          },
          {
            "id": 2451,
            "name": "Oplotnica"
          },
          {
            "id": 2452,
            "name": "Ormoz"
          },
          {
            "id": 2453,
            "name": "Osilnica"
          },
          {
            "id": 2454,
            "name": "Pesnica"
          },
          {
            "id": 2455,
            "name": "Piran-Pirano"
          },
          {
            "id": 2456,
            "name": "Pivka"
          },
          {
            "id": 2457,
            "name": "Podcetrtek"
          },
          {
            "id": 2458,
            "name": "Podlehnik"
          },
          {
            "id": 2459,
            "name": "Podvelka"
          },
          {
            "id": 2460,
            "name": "Polzela"
          },
          {
            "id": 2461,
            "name": "Postojna"
          },
          {
            "id": 2462,
            "name": "Prebold"
          },
          {
            "id": 2463,
            "name": "Preddvor"
          },
          {
            "id": 2464,
            "name": "Prevalje"
          },
          {
            "id": 2465,
            "name": "Ptuj"
          },
          {
            "id": 2466,
            "name": "Puconci"
          },
          {
            "id": 2467,
            "name": "Race-Fram"
          },
          {
            "id": 2468,
            "name": "Radece"
          },
          {
            "id": 2469,
            "name": "Radenci"
          },
          {
            "id": 2470,
            "name": "Radlje ob Dravi"
          },
          {
            "id": 2471,
            "name": "Radovljica"
          },
          {
            "id": 2472,
            "name": "Ravne na Koroskem"
          },
          {
            "id": 2473,
            "name": "Razkrizje"
          },
          {
            "id": 2474,
            "name": "Ribnica"
          },
          {
            "id": 2475,
            "name": "Ribnica na Pohorju"
          },
          {
            "id": 2476,
            "name": "Rogasovci"
          },
          {
            "id": 2477,
            "name": "Rogaska Slatina"
          },
          {
            "id": 2478,
            "name": "Rogatec"
          },
          {
            "id": 2479,
            "name": "Ruse"
          },
          {
            "id": 2480,
            "name": "Salovci"
          },
          {
            "id": 2481,
            "name": "Selnica ob Dravi"
          },
          {
            "id": 2482,
            "name": "Semic"
          },
          {
            "id": 2483,
            "name": "Sempeter-Vrtojba"
          },
          {
            "id": 2484,
            "name": "Sencur"
          },
          {
            "id": 2485,
            "name": "Sentilj"
          },
          {
            "id": 2486,
            "name": "Sentjernej"
          },
          {
            "id": 2487,
            "name": "Sentjur pri Celju"
          },
          {
            "id": 2488,
            "name": "Sevnica"
          },
          {
            "id": 2489,
            "name": "Sezana"
          },
          {
            "id": 2490,
            "name": "Skocjan"
          },
          {
            "id": 2491,
            "name": "Skofja Loka"
          },
          {
            "id": 2492,
            "name": "Skofljica"
          },
          {
            "id": 2493,
            "name": "Slovenj Gradec"
          },
          {
            "id": 2494,
            "name": "Slovenska Bistrica"
          },
          {
            "id": 2495,
            "name": "Slovenske Konjice"
          },
          {
            "id": 2496,
            "name": "Smarje pri Jelsah"
          },
          {
            "id": 2497,
            "name": "Smartno ob Paki"
          },
          {
            "id": 2498,
            "name": "Smartno pri Litiji"
          },
          {
            "id": 2499,
            "name": "Sodrazica"
          },
          {
            "id": 2500,
            "name": "Solcava"
          },
          {
            "id": 2501,
            "name": "Sostanj"
          },
          {
            "id": 2502,
            "name": "Starse"
          },
          {
            "id": 2503,
            "name": "Store"
          },
          {
            "id": 2504,
            "name": "Sveta Ana"
          },
          {
            "id": 2505,
            "name": "Sveti Andraz v Slovenskih Goricah"
          },
          {
            "id": 2506,
            "name": "Sveti Jurij"
          },
          {
            "id": 2507,
            "name": "Tabor"
          },
          {
            "id": 2508,
            "name": "Tisina"
          },
          {
            "id": 2509,
            "name": "Tolmin"
          },
          {
            "id": 2510,
            "name": "Trbovlje"
          },
          {
            "id": 2511,
            "name": "Trebnje"
          },
          {
            "id": 2512,
            "name": "Trnovska Vas"
          },
          {
            "id": 2513,
            "name": "Trzic"
          },
          {
            "id": 2514,
            "name": "Trzin"
          },
          {
            "id": 2515,
            "name": "Turnisce"
          },
          {
            "id": 2516,
            "name": "Velenje"
          },
          {
            "id": 2517,
            "name": "Velika Polana"
          },
          {
            "id": 2518,
            "name": "Velike Lasce"
          },
          {
            "id": 2519,
            "name": "Verzej"
          },
          {
            "id": 2520,
            "name": "Videm"
          },
          {
            "id": 2521,
            "name": "Vipava"
          },
          {
            "id": 2522,
            "name": "Vitanje"
          },
          {
            "id": 2523,
            "name": "Vodice"
          },
          {
            "id": 2524,
            "name": "Vojnik"
          },
          {
            "id": 2525,
            "name": "Vransko"
          },
          {
            "id": 2526,
            "name": "Vrhnika"
          },
          {
            "id": 2527,
            "name": "Vuzenica"
          },
          {
            "id": 2528,
            "name": "Zagorje ob Savi"
          },
          {
            "id": 2529,
            "name": "Zalec"
          },
          {
            "id": 2530,
            "name": "Zavrc"
          },
          {
            "id": 2531,
            "name": "Zelezniki"
          },
          {
            "id": 2532,
            "name": "Zetale"
          },
          {
            "id": 2533,
            "name": "Ziri"
          },
          {
            "id": 2534,
            "name": "Zirovnica"
          },
          {
            "id": 2535,
            "name": "Zuzemberk"
          },
          {
            "id": 2536,
            "name": "Zrece"
          }
        ]
      },
      {
        "id": 134,
        "name": "Solomon Islands",
        "prefixNumber": "+677",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkIxODFBQjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkIxODFBQzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyQjE4MUE5MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQjE4MUFBMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3IS9UAAAA4NJREFUeNqslV9sU3UUxz+99+52bVe37i90bMbIDGFCiBjiZDGaDGEwBYXwYGJ8JD7og0+GxBB8kswnX0x88wVdsOqDIWRMFDXTkUzkj2iQZLCwrltHh2u3/r33cn53g6YPdmvnSZrm3tN7Pr9zvt9z6+HI+SmS+SAFG19zLemJJLQHQPOA4+DGZIq6rnpSiSxYci9kQmElV2V42HvWaW/z8fYrj7N7SwOffTfJN+NxMhlLsh5qDA8Htzdy7PUnuD6Z5JPIbSaiSxAw1gXWBJ3MxtIc7mnlxadDPNvdgBVbWkk72DNpureG6BP40ec3kJ7LqOOug2iDrWEQqGFOih379C9e6A7x9W8z5HVteaS2g+XVOX1xmnze5tKtf4mlC1BvqjNVOFsFlCnFNrnPenhteEEz9aA9L/rdl09HHdzLsFm6NGXMNy7fA5GCOyloMDGaaim4MlQC1CHeLkAPPdtGOf7yl7hC2Tkp5JOkzw9ygF6Bnj65k1pT440T44xcS0DY79ZZM1QBLSk/t8kd7e4dP3F8zxn27zsvHCh1iBqvGCoqxTvE4Sqi7shZdrEuRJ3yY1YaFqRsvMO97Nn+C+/3RXj1wDmQkn9ebOHjC20CVmsj+qG6VgVlhe7L9ZZ3RuXSIZHMr/hMknnHHRem7upfTsNe1WHfGfr3jbgdXvmhlcHv24hc8ZNJK3NlLR6T1dghrn3uqXqGLkS5I7DE7eRyQem8M+zj6J4OWacUY9cTzC+JwWq0Ug1nO0s0HDggI/WqDlv5aKSVod8D5HMaG5vyBEIFAUt3gbTFqTe7XLCqN/j5P+SUc9VkF3Ic6n+Swbe6uHF3kb3vjjKvpmNSVsNrP7ZxaqSFyB8BMlmNsAD9ZgFLSW8rjaXbaSn47aVZGutquDyRIqcc3hl0xbSk+6uS/3tqkcivM9yNL0KT5GLtZTX8YjxANiMdNkuHjUVg8c11aHjB8GpBQ3TJLBYIy+pE1UtC9zwy3MZmL9MzAvRJ5Xkxjfyu95mfy2roAk2nBFb6ypQ9lu+g0vqRW/1G0TzqRErueNjVcNfOMT7oH2Jg//B/a1gG+DCK6+TVi3cV9OEeRsPLGu6qTMPVwqh2D1fTcO3gCvewWmARXOUeVgssgmdlpJZe8R6uN4yerWPB9176iiMDZ6Hu/9Nw1f8Q55ZvipZ08ObVFj48t2HNe7jeeCDAAKYZ9xEESrmkAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2537,
            "name": "Central"
          },
          {
            "id": 2538,
            "name": "Choiseul"
          },
          {
            "id": 2539,
            "name": "Guadalcanal"
          },
          {
            "id": 2540,
            "name": "Honiara"
          },
          {
            "id": 2541,
            "name": "Isabel"
          },
          {
            "id": 2542,
            "name": "Makira"
          },
          {
            "id": 2543,
            "name": "Malaita"
          },
          {
            "id": 2544,
            "name": "Rennell and Bellona"
          },
          {
            "id": 2545,
            "name": "Temotu"
          },
          {
            "id": 2546,
            "name": "Western"
          }
        ]
      },
      {
        "id": 135,
        "name": "Somalia",
        "prefixNumber": "+252",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzVGOTkxRTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzVGOTkxRjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3NUY5OTFDMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3NUY5OTFEMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aPgnNwAAAXBJREFUeNrslr9Lw0AUx7+XXBLbJB0ULLi4+QsR3F1UEAUR/CecXRwcxal/gbOL4OCgo0v/AcFFcKpooS0SWmmitqbXxLujYsactHHpg0ceL5d87uX9yJH1UqUGYIZrgGzE5VqnAwOJayZwDf8kY3C6hwjQ68dShZ0ZOIoBkrBHChagmEMYJ1VbITaXHGwvu3huhtIXJzYzVDD/qsiZBIQQ1N8Ytjh0b7UAz2cSmjc1uSat0LQLO2EEk+o43S9ivmihkNOh8W1XSgt48kKcXL/KNbalDTdi8cLWB8NZuYngK5LRW5Sgy2Lp8wKGvKWNprgmbYqbex+3D7/Ttfz4jqu7trynkmOqAvY7fWwsOlibs3FwXsMnj/x4dxo7Ky5emj04ChErgQ2dIGdoOLpsyLyKojq8qPNodZi6WkMrgUVOG+0eQp7X2SlD+oJuXxbVhEGUepqqDg4RtdAfiGijvwyS8U8iM6GDI4+b8dEn+BZgAN1qgUfVZqa9AAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2547,
            "name": "Awdal"
          },
          {
            "id": 2548,
            "name": "Bakool"
          },
          {
            "id": 2549,
            "name": "Banaadir"
          },
          {
            "id": 2550,
            "name": "Bari"
          },
          {
            "id": 2551,
            "name": "Bay"
          },
          {
            "id": 2552,
            "name": "Galguduud"
          },
          {
            "id": 2553,
            "name": "Gedo"
          },
          {
            "id": 2554,
            "name": "Hiiraan"
          },
          {
            "id": 2555,
            "name": "Jubbada Dhexe"
          },
          {
            "id": 2556,
            "name": "Jubbada Hoose"
          },
          {
            "id": 2557,
            "name": "Mudug"
          },
          {
            "id": 2558,
            "name": "Nugaal"
          },
          {
            "id": 2559,
            "name": "Sanaag"
          },
          {
            "id": 2560,
            "name": "Shabeellaha Dhexe"
          },
          {
            "id": 2561,
            "name": "Shabeellaha Hoose"
          },
          {
            "id": 2562,
            "name": "Sool"
          },
          {
            "id": 2563,
            "name": "Togdheer"
          },
          {
            "id": 2564,
            "name": "Woqooyi Galbeed"
          }
        ]
      },
      {
        "id": 136,
        "name": "South Africa",
        "prefixNumber": "+27",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzVGOTkyMjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzVGOTkyMzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3NUY5OTIwMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3NUY5OTIxMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CE4TZgAAA8tJREFUeNqsln9MlHUcx1/Pj/vJ3WEMPBERMrDagkVba4I5BzihtCyZzsoxurVm65fVwgp1/eGMmrLlP7VYFvzjDJS00T8dUUmba9NqqDAwMDpQzBz3CHdwcPS5O9yOudbu4Lt992x3z/O8P6/P+/P5fB+Fuh0+YDlTQQPdROPWXXgeWg8Xu/F5thDovYz5vjwUiwVmZliE5ZQ9rPCWx491womugTEGN65SWlrFiZ1vkyp33DrwDiMNH6CnOTGtyGE2Ij47u1BxQ63MGpKLCyZ0cEgwWavo6GhhyZtP0HSlB8d7B8nvOIc5w03wt24IhUDVFoyttlf8TEvZLxAWijEJQJGX5twL0yGq656h9FgDRmERWV19uHfXEuzpZ3r4TxRdAlWUpIUVT4nub6yXvC/NpPxUAd4rK8EWlD0p4mHwDaCkZ/LlywfZmXM//H4e365tBC71L8R7IxKy32FRnR37FR6uttF6fjVVnQ+IqE1Sb4Cmws3r8M8oZZurObHtNVxR7/dw9Ug9iiRKsZqSE56rNGqKNT4/JD+lLaP8dGEc/ZR4K1TDA/Kfm6ZX62P0Z7uY+apJAnQk6vt84ciymVS8Qr/meRtt5/J5qrNQ6K1x9H/LHmV95bO07XgjWvlJNNmdwreXZ61G4yGVcIqbdacK6bqWDfYJMIvMtOxRH/b05SxZukLqcHLxhG+vY6+rbPeY+P5CLhsvFEk3iZ/6tBgr9IFxZPBImtWEhfX/u2MsILFpYVwiphIZHHEtFBGMeJu4MP8pvLVIo6VBRNwZPP5NAe2+XLAKnVkGiHQZo0OYXHeRkplNODS1GMIq7XsUKl+x0Hkpj/KjhcxMStU6xBFdAvHL9foIxaWb+K7mXWxYkhog84S3PKhx8rC8PDeDqtYCWvvvBovQpI7FKIeknexOmvd+zHOrS/j17A0+a+qSbjKhaUriwpp49G2twoaXLHh78qj4tIDpoNSb04jd4Rfh0RHWbXiSH6rrIk9QW3eGDw+cnmsmc+LEUS8/kmhXCeVJoewTSms85aCkOZXmfUeilL3dBmVPH8XXN4A5fRnWFDPhmXDis3r2ot3vHcpzbvTGeylV6r8plMOUlG3mTM2+OcqfhPJrecqGIztNHg4ne0Ia+nbvGo5fvgdMoTlKedPQH+Kli+b9QpkfofQL5RdCORg9Hq32GOVCTmX9+KCkNuVWrGInAnDtLx5ZW8GPL+wV58xzXrZFhimOldlRymRSe2dx2caN6OQKyqePpnP4xffZXfwYA73jPLrpE3z9871c8LdHbEoa/wowALUrYLIw4iaVAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2565,
            "name": "Eastern Cape"
          },
          {
            "id": 2566,
            "name": "Free State"
          },
          {
            "id": 2567,
            "name": "Gauteng"
          },
          {
            "id": 2568,
            "name": "KwaZulu-Natal"
          },
          {
            "id": 2569,
            "name": "Limpopo"
          },
          {
            "id": 2570,
            "name": "Mpumalanga"
          },
          {
            "id": 2571,
            "name": "North-West"
          },
          {
            "id": 2572,
            "name": "Northern Cape"
          },
          {
            "id": 2573,
            "name": "Western Cape"
          }
        ]
      },
      {
        "id": 137,
        "name": "South Korea",
        "prefixNumber": "+82",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUZGOTk4QTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUZGOTk4QjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MkNCRTc1MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MkNCRTc2MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kIg3fgAAA81JREFUeNrEVl1IW2cYfvJjMPGvIbhhJZ2tZaWFlqZgKEOHGtGZqtALcVR703mhRGk7dTBEhsz/UmVsYOl2IXOghYpFWmnNxYyKOkMXfy4EZTil/katTZqaH0/efefYZbgYPN5sL7wJ3/ne873f87x/R0JEywBOMnXiv5EopisS5tjxfhEkbrcbYWFhkMlkxzrZ7/fD6/UiPDw8lIlTGmpnfHwcRUVFsFqt8Hg8op3ytlNTUygsLITZbA5tyCOmQyQ/P5+0Wi3l5ORQY2Mjra2t0VGys7NDra2tlJmZSXFxcVRWVhbK1HEo1c3Nzejp6YFer8fExAQUCgVGRkYOXpjj2A8gkR8MQ1paGra2tpCcnCxQnZiYCJPJdDTVPE1dXV1Qq9VYWVmBUqlEW1tbYP/tyG+Yz72JmUQ90yTMffY5nL/+cymGGIwlcOxiQ0NDwnpsbCyI6SDHKpUKeXl5iIyMFOJsMBiQlJQk7G3c/xGTKVex8fQXeBb/hGdpCZsvHmEqPQWr334n2Oh0OgHlwMAAEhISUFBQgJiYGHEx9vl81NfXR4wiYhkqPNt8YaFhZm6VxJJNc55eqs/R7+qPaTEmgRYRTaNsb7PnaeCM8vJy6u7uZhHhxMf437LLdOJGKaK7HoA0F+AnDuF+DvFeJ2ZUsXgrV+LimhXSDCPizc/EJL9TLsZqgenjPzjUs3+77x3CaN/p16dScU+bwgImx3VZPO7bJoEtO6CJPfJMqRjHWq8fP39wGVUaA6I4D+Tkx+2PDLh39hogU/Apjt7TmXjwoY4V8htR9S4KcZRCiuQzGjycuYrn5/TgSIrlKNZl3TsA52XOWUm92sDrTxj6k2dFOQ6JmM/KioqKwPrW9UvAOweWSIPl6DiGjLV2v2/fqYt1ttdvkHojNWBfVVWF3t5e8Z1rYWGBmpqaiJUUsdKilpaWwN5XP1kIahMh/i5B9w3hClPtl4QTpWT63hyw6+joIFZClJubS/X19TQ/Px+U1UGIt7e30dnZCalUisrKSvT392N6enq/o33xKfqe3cEV4yXI1SrITqhwMeMCHj+5jR/KMgSb2dlZzM3Noa6uDg6HA+3t7VhfXw8CfGg5VVdXw2azobi4GA0NDUL3Gh4ePvCiy+3j2UKkUnHgeXp6Oux2O2pra8GQClOqpqYmqJxCDgl+OPB0ZWVlEXuRVldXRQ0JnlrmXAhTSUlJyCER0rHFYiGj0UiDg4O0u7tLYoXNcBodHaXs7Gyh+x1rOv0tDAEiIiKEj4HjyN7eHlwu1+E9+j3Vkv/r0+cvAQYAGzcZMFujiqgAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2574,
            "name": "seoul"
          }
        ]
      },
      {
        "id": 138,
        "name": "Spain",
        "prefixNumber": "+34",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUU3QzUwNTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUU3QzUwNjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNTAzMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNTA0MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hN0M3QAAAeBJREFUeNrElk2L00AYx3+TTCw1adndLlS2KLv4Ug+CeBCk4s1v4cWLn8WLNz+B38GbXrysKOxBVFwRXRXStbiktcFmW5IZn5qCwgYRUpqBITPPPOT/vP5n1K5/LgS2ZMasZjRk9vViwV/flYA7VDR0+rMabH1qLasEWM0eO+N/5Ve7FqXztU0hzdQycGPt7ZjiIzs3S+YGRFENK/vW5hQvkoVZnJUJNcMC6Tz66zCdOTx/EDA4qpElE9rNjN49Qz0Q5CPRccsAF40AwvfimGeoZSkfXkoAOgHtbo1RGBEJbmdb9I6XDSyF/v30NpOPdYb9dzSCLa7dvs+ZXsynw0fo7CsdPSgV6pO9NM/dDPzxBeyry7wRz/eabQ5HG0y/XWXy+Qr+8LzkoVyedSGwmBMLIGdnXBcj9t9anr1+yCX3AJ8uyXHjT/HZZQHPfyQ5NBcNU0+RSLPdaod44QGD8Q/8uzs4616uZ8t43CyQ1mG01hfPXHo34UW3ixvVudF6wm7rC9YRezdFLylBINlTdZJAxBPl5iFXvpIeFg8dIRI3xY7lMFUYI3tVgkD27nSKq07lLJFZB+2kv2WpcXFVHmNjy3G8Tgb6P9TcpXO19nxTySVR3X28ePI0Vvz0iX8JMADE1p16B3U5CwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2575,
            "name": "Andalucia"
          },
          {
            "id": 2576,
            "name": "Aragon"
          },
          {
            "id": 2577,
            "name": "Asturias"
          },
          {
            "id": 2578,
            "name": "Baleares"
          },
          {
            "id": 2579,
            "name": "Ceuta"
          },
          {
            "id": 2580,
            "name": "Canarias"
          },
          {
            "id": 2581,
            "name": "Cantabria"
          },
          {
            "id": 2582,
            "name": "Castilla-La Mancha"
          },
          {
            "id": 2583,
            "name": "Castilla y Leon"
          },
          {
            "id": 2584,
            "name": "Cataluna"
          },
          {
            "id": 2585,
            "name": "Comunidad Valenciana"
          },
          {
            "id": 2586,
            "name": "Extremadura"
          },
          {
            "id": 2587,
            "name": "Galicia"
          },
          {
            "id": 2588,
            "name": "La Rioja"
          },
          {
            "id": 2589,
            "name": "Madrid"
          },
          {
            "id": 2590,
            "name": "Melilla"
          },
          {
            "id": 2591,
            "name": "Murcia"
          },
          {
            "id": 2592,
            "name": "Navarra"
          },
          {
            "id": 2593,
            "name": "Pais Vasco"
          }
        ]
      },
      {
        "id": 139,
        "name": "Sri Lanka",
        "prefixNumber": "+94",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUU3QzUwOTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUU3QzUwQTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNTA3MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNTA4MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ynHuxQAABGdJREFUeNqklttvVFUUxn/7XOYO03Zm2g6XDhbE1ghEMURRY2IUwpuX8OSbiW8++KwvmhhN/A+M0USJygOJMSYEH1CUBGICUgpUCW3ppNDaMlPauZ3OmXNxndML470tO1mz55yz91r7W+tba23lX+Qmm+jGwMXnn4cmYovURbaIGCL/tva/RqBnEZ0pZpV7mfrPU4lEsWFi6p7oU8TwOKxqmCvKXZGkyFa4caoXa84kXWjguWpNB1BqaS7fTJHbVaHv2bmG0YxjvXc+nzg51gEpgeUbxFWLKTVCh+/JLtlRFRmE+Xic4lAnrbrByQ/2EDUdlLYGy37gMIP9r0xQvR0j81TdMnR5GYk7YlQk6YaLUspBU8vuXJlj4DU10n0WDzxdYuJsNkSiGR5aoES12ZFH31Ph+2CNXdfJdNd4/LUi107k8Wwlx1hRrvwlkReaalOkWP2/Kb/I8FfbufRpgXiXjWPp6KaEx1ehcutuBDPhrlp3bJ1krokZd8M1nx09yJY98zyRHQ9psvYhng8U12ejaEKAAG2mv8b4uRzJTptHXy0yO7KZTdss+p+7w9T5TkZ/6EaLeHIwA6eiY2puiGRdhv1lopgJJ3yIJCUkgvjhw1PsPjRDZneNymQ8nH872Ut+34Kscbn67RY04UK4Ty2FwmCDwxP0yYyN72jEuiwyO2vMDKWpzMQY/zGLbypGTnXSf6BEz2CF6eGOv2XWukfIN08T9EKegFi+xi1hezLbpFaKcv74TloNnR0HS3QN1IkKcZ2W+pOODSH2Q+755PcssFgxufRlHy+8ew2z02Hg0DRPvjGGmZNYZmVtE26ezoiL2ljKfbjatTVSwvJI2uGhI9MMvj6NKvn3/Bjk/oKY6obOvkaYXu0ptzFXiwK3qVO+kWLb3rs8//4IqipG55eYT0oq47RkagKalsnomZ6QhO3FRtsoYmUEiqAlB2jNGDTGIpLoYqhscP2LXqG+YlJcXLkSoy75HeT7fZMr3Cik8gXB5KUuPnnpGc59tIvaTJSv33yM428doFqNM/TNdhYnTAoHyzhywPa6bqyXzcFPEN9ousXETznshrS1hkbhSImqFP6JoSyFQhnDcNj38iTd+ytcOLEDT9LOXWa2WrdhQRgYciSVUlEvZHTLMshJni78muC61OFE0iYtlWvo8wKxtE3xYpbyWIp03mKhFMf29DANjdUm0CZ+e6lqm635CL2DC+x9e5Lv3nkkRBHvsMXFMc58OIAhzaajx+L3q2nGz+ZW3RRNtsg+WOXFj3/hyrGt1OaiGI58aAoKKpElRkpbrAptvfbuFKRGAykCGobU6prU6lIphW556PPmUsyFbJ58n7uVXPXOyrBrBsUrOS4f245Tl8JjSOFxh6l/X0wlRmuR1YtAQnkcpYK5AlVKLJvlHFsVo6e7aZQjgrR1r2X+b4z8sOjMyUWgZ6BC/+E7DeVfkKvPZrn6ROSe4f21I7Rxv7l89clvhB3LewI9llx9bjP7hwADADpQzQBjYpxJAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2594,
            "name": "Central"
          },
          {
            "id": 2595,
            "name": "North Central"
          },
          {
            "id": 2596,
            "name": "North Eastern"
          },
          {
            "id": 2597,
            "name": "North Western"
          },
          {
            "id": 2598,
            "name": "Sabaragamuwa"
          },
          {
            "id": 2599,
            "name": "Southern"
          },
          {
            "id": 2600,
            "name": "Uva"
          },
          {
            "id": 2601,
            "name": "Western"
          }
        ]
      },
      {
        "id": 140,
        "name": "Sudan",
        "prefixNumber": "+249",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjc2Q0MxMjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjc2Q0MxMzE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNTBCMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNTBDMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dsEThQAAAfVJREFUeNq8lT9oE1Ecxz/v3ZmkMae2xdbuiqRiqaugKDo5WFGQOiiimy5aR6dOOrhYHRx0qQoVaQOCbgpO/oHatTrVhCYNtIlJbWJJ7p6/C7aiVhfv5Qf3jrt33Of9vt/f7z118sTe+TvPE15XQzHbGaABZbAeihu7zc6sw71MB0cWXGY9n28uOJbhDgM910q9QXx8oEFnVXMsu6mVcSVuF64lZ1jUrYcrp2sMD9XwBbinpPFlzihb4LVxRQhlzdP9qxy6sMKbHT6DZYdYk9YCovd4JF2Vu7f+JpS3O4BVuPUiydXpBPMUKLLc+tweOAzhkpIVxJsMv1bm/rZTfrK7y2QrBWUi8t39qwGh9HWHiX1l9bF/znl8/rpJk1LReryxFiK7I0MPMy8nVf+lXfrhh2fqx8x/X/rf6xJdfR/60tAMOHdziMNjZyguL1rM+I+OF1caUKpXpd2MJY9/BxY/QSzJ3ZFxLh84a7G41toq3MJ0haMHj5tHFx+Y3giLa2NwIMDNMpWSje1V0WzJav/2zKjJfVlQgQksgUPo9oT4KYBMHvO+rKaYcKPeuX7+MCwYR2qtrwPmvsJUDgp1a4eE+4u0W2PwVlplMmv9PHbXpZU+5clnmF6iHeGKtB65mkgrWebrtCtc3i3lyeQ8jKGd8V2AAQDj9qv7QrTRKwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2602,
            "name": "A'ali an Nil"
          },
          {
            "id": 2603,
            "name": "Al Bahr al Ahmar"
          },
          {
            "id": 2604,
            "name": "Al Buhayrat"
          },
          {
            "id": 2605,
            "name": "Al Jazirah"
          },
          {
            "id": 2606,
            "name": "Al Khartum"
          },
          {
            "id": 2607,
            "name": "Al Qadarif"
          },
          {
            "id": 2608,
            "name": "Al Wahdah"
          },
          {
            "id": 2609,
            "name": "An Nil al Abyad"
          },
          {
            "id": 2610,
            "name": "An Nil al Azraq"
          },
          {
            "id": 2611,
            "name": "Ash Shamaliyah"
          },
          {
            "id": 2612,
            "name": "Bahr al Jabal"
          },
          {
            "id": 2613,
            "name": "Gharb al Istiwa'iyah"
          },
          {
            "id": 2614,
            "name": "Gharb Bahr al Ghazal"
          },
          {
            "id": 2615,
            "name": "Gharb Darfur"
          },
          {
            "id": 2616,
            "name": "Gharb Kurdufan"
          },
          {
            "id": 2617,
            "name": "Janub Darfur"
          },
          {
            "id": 2618,
            "name": "Janub Kurdufan"
          },
          {
            "id": 2619,
            "name": "Junqali"
          },
          {
            "id": 2620,
            "name": "Kassala"
          },
          {
            "id": 2621,
            "name": "Nahr an Nil"
          },
          {
            "id": 2622,
            "name": "Shamal Bahr al Ghazal"
          },
          {
            "id": 2623,
            "name": "Shamal Darfur"
          },
          {
            "id": 2624,
            "name": "Shamal Kurdufan"
          },
          {
            "id": 2625,
            "name": "Sharq al Istiwa'iyah"
          },
          {
            "id": 2626,
            "name": "Sinnar"
          },
          {
            "id": 2627,
            "name": "Warab"
          }
        ]
      },
      {
        "id": 141,
        "name": "Suriname",
        "prefixNumber": "+597",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjc2Q0MxNjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjc2Q0MxNzE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NzZDQzE0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2NzZDQzE1MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZGHpRwAAAa9JREFUeNrsVbtKA1EQPXf3buIa17xMNCqKaGyECJZW9v6An2BroSD+g5W1v2KhKNjYGBAMPglJCslmY9TNPsYxJGClNyAK6oXDDrNz98zcmbNXYD1H+IGl4YfW3yMWDlGdnwlG8E2cOsOWFnWMnkMxXcZj1x5i9D+euixOr/S2KW8PnzVExt1OAu3yADSzr8N6S5ukd18W7xwfE/JIEIc9I4rZtTtoEcLl7jRMuOwlfhsqk0s9kfg8jM+CSMDMufAdCaoMIrnqQh8KYO5aiGYMGGkP7UpEsQRAqqYYMKFRaCK/X4SIcWUhf10Qls6OQa7A7fYcni5ikHHvC+XEHHLYh32UwvXGPIKWhJgIIcYIoafjZjOP+kEauuUrVdufjnWCYbVRO52AfZYCsuwbAxrnSVQPJ2HEPG6c+njLwG4qB3swkJotIblYw9VyFuGLhpm9KkYWSmgULRgtT51YZpLKchLc5+gUcLNTwMNJptMDsZWFkQsQKSWgcztU5STI8Rw2LLU0OTeHu/PEGO1qt8b/HZOHLc7whWrBTeET2WzEOzL9vvuhIf7v419P/CrAALDtiSyIepCqAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2628,
            "name": "Brokopondo"
          },
          {
            "id": 2629,
            "name": "Commewijne"
          },
          {
            "id": 2630,
            "name": "Coronie"
          },
          {
            "id": 2631,
            "name": "Marowijne"
          },
          {
            "id": 2632,
            "name": "Nickerie"
          },
          {
            "id": 2633,
            "name": "Para"
          },
          {
            "id": 2634,
            "name": "Paramaribo"
          },
          {
            "id": 2635,
            "name": "Saramacca"
          },
          {
            "id": 2636,
            "name": "Sipaliwini"
          },
          {
            "id": 2637,
            "name": "Wanica"
          }
        ]
      },
      {
        "id": 142,
        "name": "Swaziland",
        "prefixNumber": "+268",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkM2NTlENTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkM2NTlENjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NzZDQzFDMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyQzY1OUQ0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wwOMbAAAA4hJREFUeNrslV1sFGUUhp/52Znu7uy6u0DLFlYMaREDgaiRBFAJhlATa2JSNMQLuVBDYiTGK1PU6IWJF6a3XuAP0Sv/wdAmuoEKSpoULanahtaK2Cpt12Jpmf2bnd0Zz+5WS0wM5YpEnck788038533nPOd94yyqm3M5wYcKjfo+O8RK/4UV+Qeua5VhmBeMC6wBI2CBoG3ZAu28vnNoWsSV+2pisJqxSdr5+nLQzkZZ/vdW3F+ucDM6XNorhhJikcNBn7lmh7Y+vyE9k/JoFrulYWgUoJuinxg3clAYYBnH3mKra++QlEIM6e+Y+iFg1zo7yEqbmqywpdTk7GDLXddEJaZRYd00/Kv5kKRd15OQUlU8EOQkCCaFJVnztt8pie444HnuXXsLL9nZmpLGgKwZtcmQTfjH3/CyT0dxCNzGBGT3yYd1ux9lOLEz+T6+tAta5H4T0LfV9BsX7aqQLFJJd+is6zRI2woPJbOMdKyjv0PdWC5WexoKx8dfYuH90zRefAlfhgdxdd0Nu28n/v6j3Fi34MYsQrLnn6ZYGobdL0oVoWjLAEZfm3v6lVdloEqpJuLXLotjHdvgOaNLqq49cTJEv2XYV08Tsi1Gfz2EMNDbxMOBjhytIfh4WFC4TCFrM3syCCpLe3c88YRKjGTVGuO+UP7uHiuH2u7iZFw8QrKopxU3ydYzHJ8w2662t8k7XQQ+qaMOqpRytRroFwuUXDKLF+5ivUb1uKVy1iSOtM00XW9Bk2rf2s4TVhDOWYff42RcIyu547xzl0HJD4Xs+JepWOJTJeo7dM645fX4p73mBuQjHyvczgSZKN8MqmqKMEgAVWjkHewIhE6OztJJpNkpqdxPY9QayvTX33JqV3b8H4V46KXS2diZCYbmRhshikPNVSvKeVTy6rJyfAruFLCZ5o3s372J5Y7c+Q0gxUio4SQHsjn+cJ1F+tQ5k709rJzx46/5i6m0xxva5P6BTMalUL1MEp5vk7eTsyxxe4YWcOq6sVWPiRSI/bk0RDxJMhJR2mQq1mTQ1VON8m7lYJuSdXrIpCp2ixs2b2X9989zGqnRO+T+5lIv0fVbEBEVZWOVxtX5CknKwNiNyQp9uoNpGdFeEkNpLp7KYmyIJk6K9n5UQQ8bLu035KkJSf7OXOFaNRACZlLaiCKP36dLVP5G2YWvIovdJultsz//8f/euI/BBgABhdR5PJe/UIAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2638,
            "name": "Hhohho"
          },
          {
            "id": 2639,
            "name": "Lubombo"
          },
          {
            "id": 2640,
            "name": "Manzini"
          },
          {
            "id": 2641,
            "name": "Shiselweni"
          }
        ]
      },
      {
        "id": 143,
        "name": "Sweden",
        "prefixNumber": "+46",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkM2NTlEOTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkM2NTlEQTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyQzY1OUQ3MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyQzY1OUQ4MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cif6DQAAADdJREFUeNpi5A7oZMANvhSUQxg8E/ApwwqYGGgGRo0eNRo/YPx/YDRAUAJkNKOPGj1qNCkAIMAAQwkJrW14Lx4AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2642,
            "name": "Blekinge"
          },
          {
            "id": 2643,
            "name": "Dalarnas"
          },
          {
            "id": 2644,
            "name": "Gavleborgs"
          },
          {
            "id": 2645,
            "name": "Gotlands"
          },
          {
            "id": 2646,
            "name": "Hallands"
          },
          {
            "id": 2647,
            "name": "Jamtlands"
          },
          {
            "id": 2648,
            "name": "Jonkopings"
          },
          {
            "id": 2649,
            "name": "Kalmar"
          },
          {
            "id": 2650,
            "name": "Kronobergs"
          },
          {
            "id": 2651,
            "name": "Norrbottens"
          },
          {
            "id": 2652,
            "name": "Orebro"
          },
          {
            "id": 2653,
            "name": "Ostergotlands"
          },
          {
            "id": 2654,
            "name": "Skane"
          },
          {
            "id": 2655,
            "name": "Sodermanlands"
          },
          {
            "id": 2656,
            "name": "Stockholms"
          },
          {
            "id": 2657,
            "name": "Uppsala"
          },
          {
            "id": 2658,
            "name": "Varmlands"
          },
          {
            "id": 2659,
            "name": "Vasterbottens"
          },
          {
            "id": 2660,
            "name": "Vasternorrlands"
          },
          {
            "id": 2661,
            "name": "Vastmanlands"
          },
          {
            "id": 2662,
            "name": "Vastra Gotalands"
          }
        ]
      },
      {
        "id": 144,
        "name": "Switzerland",
        "prefixNumber": "+41",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkM2NTlERDE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkM2NTlERTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyQzY1OURCMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyQzY1OURDMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hqToNQAAAfxJREFUeNq0Vb1uE0EQnp87/4iE8w+BCIxFAWVegD5lJCoKXiRdel6CDiFKKKHnBWiQoECRCVbC2Tmc4LP3ZpdZO44jkvPZBFan0+7c7jd733wzg5/aISwz8MLcLXUigOWGM3buJaB/BM0IJjMHc+hSy0EYgLjrQSPaJONmdP/Vc44aapCkd7i3K3FC6wG4RehYwDWhdMfhw3uPPnbObZ+3WubLN94sgV0ETQtAPRX61h9zIsfx1OwnTrzxfMNqhBDYn2OXKtEgJ0BxH2x29slmEvfVCDgCASwDRSHY5aEzy40Iy2t6S+oPw7u3gXjmlcNWG+iQ61X17Ma/3HBw5d0vcY1eZ+a7tF+/WN956tIUJAMOOaprSCcydJL0QQwwY6V68u7t/pNnwR3CMv+h96tvrZHnWpMqN0CfS5rhWmN+vrGRJxOC/zaCHDV7Jdj0tJCQrHeEuJKurcXK2jSMMgnjg/cfuHZrIr4fX7cfm4PiMOYoJCDpJS5NvPgG6ikFKzOvYjr7pjuyg+SvxGeBbpYgmlADI27WL4pPl/a0yxtlH26NYU5O5teQ6QENs1EHPGXDFyudIHujbliY6EXlyQFW0Y2HgzcvKWp6j0msSzUWVm0sbgXKhCZR56yGKkFhiyEkkOvXa4UgCjbdrLtoSSrGXaHL+DxesYH9FmAAtnngpsgiSsEAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2663,
            "name": "Aargau"
          },
          {
            "id": 2664,
            "name": "Appenzell Ausser-Rhoden"
          },
          {
            "id": 2665,
            "name": "Appenzell Inner-Rhoden"
          },
          {
            "id": 2666,
            "name": "Basel-Landschaft"
          },
          {
            "id": 2667,
            "name": "Basel-Stadt"
          },
          {
            "id": 2668,
            "name": "Bern"
          },
          {
            "id": 2669,
            "name": "Fribourg"
          },
          {
            "id": 2670,
            "name": "Geneve"
          },
          {
            "id": 2671,
            "name": "Glarus"
          },
          {
            "id": 2672,
            "name": "Graubunden"
          },
          {
            "id": 2673,
            "name": "Jura"
          },
          {
            "id": 2674,
            "name": "Luzern"
          },
          {
            "id": 2675,
            "name": "Neuchatel"
          },
          {
            "id": 2676,
            "name": "Nidwalden"
          },
          {
            "id": 2677,
            "name": "Obwalden"
          },
          {
            "id": 2678,
            "name": "Sankt Gallen"
          },
          {
            "id": 2679,
            "name": "Schaffhausen"
          },
          {
            "id": 2680,
            "name": "Schwyz"
          },
          {
            "id": 2681,
            "name": "Solothurn"
          },
          {
            "id": 2682,
            "name": "Thurgau"
          },
          {
            "id": 2683,
            "name": "Ticino"
          },
          {
            "id": 2684,
            "name": "Uri"
          },
          {
            "id": 2685,
            "name": "Valais"
          },
          {
            "id": 2686,
            "name": "Vaud"
          },
          {
            "id": 2687,
            "name": "Zug"
          },
          {
            "id": 2688,
            "name": "Zurich"
          }
        ]
      },
      {
        "id": 145,
        "name": "Syria",
        "prefixNumber": "+963",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjMyNzg5MDE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjMyNzg5MTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzI3ODhFMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzI3ODhGMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bS4JXwAAAKdJREFUeNpiOSeo9p9hAAATwwCBUYtHLaYZYPz///8nIM2LSwEsrzESaSCR6j/j9PE/KL396WWGzU8uoIhRQz0DyMf/cYCdz2/8F5kT+19gVtT/jU+v/CcESFD/iQWfo5Q5eBje/vjE8P/3dwYFFg6CwUyKerxx/ODLG4Y3v74C4+0/gwArJ4Mqrzhew0hQ/5lg4qIR+MyIlBDpm51GLR61eNhZDBBgAHqosVFFWSaxAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2689,
            "name": "Al Hasakah"
          },
          {
            "id": 2690,
            "name": "Al Ladhiqiyah"
          },
          {
            "id": 2691,
            "name": "Al Qunaytirah"
          },
          {
            "id": 2692,
            "name": "Ar Raqqah"
          },
          {
            "id": 2693,
            "name": "As Suwayda'"
          },
          {
            "id": 2694,
            "name": "Dar'a"
          },
          {
            "id": 2695,
            "name": "Dayr az Zawr"
          },
          {
            "id": 2696,
            "name": "Dimashq"
          },
          {
            "id": 2697,
            "name": "Halab"
          },
          {
            "id": 2698,
            "name": "Hamah"
          },
          {
            "id": 2699,
            "name": "Hims"
          },
          {
            "id": 2700,
            "name": "Idlib"
          },
          {
            "id": 2701,
            "name": "Rif Dimashq"
          },
          {
            "id": 2702,
            "name": "Tartus"
          }
        ]
      },
      {
        "id": 146,
        "name": "Tajikistan",
        "prefixNumber": "+992",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjMyNzg5ODE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUIyQzc0RTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzI3ODk2MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzI3ODk3MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YTHlPgAAAVFJREFUeNrklT9OwzAUxr8mdpM2bVJ1QELqUsRAB3qALhyAuRyEAzBwCa7AwAh34AKILkgUKEJi6J8AberY5jWJmHHV4oEnPSn/7N+X58/PpRHvzWAhGGXdBtiBpbAGZqkY2gEHxyep2ZASpYbDatm1Sj+KR9psFq21WkexBAGh4CJc649XYCOpy+QB4vMR5do+tJIQiye4vAk/6G4PPB/fEkzA4RGUmOTuZA0oGWdlrzZ723G14wbglRb8sIvZ6ArT0SX8qItydY/eVYwbyK8iXbxBiim88DC7D1t9MlRuD+bvQsyfKV8yYRsFlxxOIEmsBEk8QPx6s1ooKnUEr94hU6f0TXl75kq/hngfnGExucvW1YsOsNM5B6u2/2Y7/YQutrZpA7m4P5WmDcTlDSqrm3NJt1yOCwUGsxxdG47YVMtsBW0b3P94LFLGNsDfAgwA/Id16/aLV8UAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2703,
            "name": "Dushanbe"
          }
        ]
      },
      {
        "id": 147,
        "name": "Thailand",
        "prefixNumber": "+66",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQUIyQzc1NTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUIyQzc1NjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBQjJDNzUzMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBQjJDNzU0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MpuROAAAADdJREFUeNpivMcrykAbwMRAMzA0jWb8////aIAgBwiDSu1ogIwaPZpliAYs9/nERgOEPkYDBBgAYAkIxbRv61QAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2704,
            "name": "Amnat Charoen"
          },
          {
            "id": 2705,
            "name": "Ang Thong"
          },
          {
            "id": 2706,
            "name": "Buriram"
          },
          {
            "id": 2707,
            "name": "Chachoengsao"
          },
          {
            "id": 2708,
            "name": "Chai Nat"
          },
          {
            "id": 2709,
            "name": "Chaiyaphum"
          },
          {
            "id": 2710,
            "name": "Chanthaburi"
          },
          {
            "id": 2711,
            "name": "Chiang Mai"
          },
          {
            "id": 2712,
            "name": "Chiang Rai"
          },
          {
            "id": 2713,
            "name": "Chon Buri"
          },
          {
            "id": 2714,
            "name": "Chumphon"
          },
          {
            "id": 2715,
            "name": "Kalasin"
          },
          {
            "id": 2716,
            "name": "Kamphaeng Phet"
          },
          {
            "id": 2717,
            "name": "Kanchanaburi"
          },
          {
            "id": 2718,
            "name": "Khon Kaen"
          },
          {
            "id": 2719,
            "name": "Krabi"
          },
          {
            "id": 2720,
            "name": "Krung Thep Mahanakhon"
          },
          {
            "id": 2721,
            "name": "Lampang"
          },
          {
            "id": 2722,
            "name": "Lamphun"
          },
          {
            "id": 2723,
            "name": "Loei"
          },
          {
            "id": 2724,
            "name": "Lop Buri"
          },
          {
            "id": 2725,
            "name": "Mae Hong Son"
          },
          {
            "id": 2726,
            "name": "Maha Sarakham"
          },
          {
            "id": 2727,
            "name": "Mukdahan"
          },
          {
            "id": 2728,
            "name": "Nakhon Nayok"
          },
          {
            "id": 2729,
            "name": "Nakhon Pathom"
          },
          {
            "id": 2730,
            "name": "Nakhon Phanom"
          },
          {
            "id": 2731,
            "name": "Nakhon Ratchasima"
          },
          {
            "id": 2732,
            "name": "Nakhon Sawan"
          },
          {
            "id": 2733,
            "name": "Nakhon Si Thammarat"
          },
          {
            "id": 2734,
            "name": "Nan"
          },
          {
            "id": 2735,
            "name": "Narathiwat"
          },
          {
            "id": 2736,
            "name": "Nong Bua Lamphu"
          },
          {
            "id": 2737,
            "name": "Nong Khai"
          },
          {
            "id": 2738,
            "name": "Nonthaburi"
          },
          {
            "id": 2739,
            "name": "Pathum Thani"
          },
          {
            "id": 2740,
            "name": "Pattani"
          },
          {
            "id": 2741,
            "name": "Phangnga"
          },
          {
            "id": 2742,
            "name": "Phatthalung"
          },
          {
            "id": 2743,
            "name": "Phayao"
          },
          {
            "id": 2744,
            "name": "Phetchabun"
          },
          {
            "id": 2745,
            "name": "Phetchaburi"
          },
          {
            "id": 2746,
            "name": "Phichit"
          },
          {
            "id": 2747,
            "name": "Phitsanulok"
          },
          {
            "id": 2748,
            "name": "Phra Nakhon Si Ayutthaya"
          },
          {
            "id": 2749,
            "name": "Phrae"
          },
          {
            "id": 2750,
            "name": "Phuket"
          },
          {
            "id": 2751,
            "name": "Prachin Buri"
          },
          {
            "id": 2752,
            "name": "Prachuap Khiri Khan"
          },
          {
            "id": 2753,
            "name": "Ranong"
          },
          {
            "id": 2754,
            "name": "Ratchaburi"
          },
          {
            "id": 2755,
            "name": "Rayong"
          },
          {
            "id": 2756,
            "name": "Roi Et"
          },
          {
            "id": 2757,
            "name": "Sa Kaeo"
          },
          {
            "id": 2758,
            "name": "Sakon Nakhon"
          },
          {
            "id": 2759,
            "name": "Samut Prakan"
          },
          {
            "id": 2760,
            "name": "Samut Sakhon"
          },
          {
            "id": 2761,
            "name": "Samut Songkhram"
          },
          {
            "id": 2762,
            "name": "Sara Buri"
          },
          {
            "id": 2763,
            "name": "Satun"
          },
          {
            "id": 2764,
            "name": "Sing Buri"
          },
          {
            "id": 2765,
            "name": "Sisaket"
          },
          {
            "id": 2766,
            "name": "Songkhla"
          },
          {
            "id": 2767,
            "name": "Sukhothai"
          },
          {
            "id": 2768,
            "name": "Suphan Buri"
          },
          {
            "id": 2769,
            "name": "Surat Thani"
          },
          {
            "id": 2770,
            "name": "Surin"
          },
          {
            "id": 2771,
            "name": "Tak"
          },
          {
            "id": 2772,
            "name": "Trang"
          },
          {
            "id": 2773,
            "name": "Trat"
          },
          {
            "id": 2774,
            "name": "Ubon Ratchathani"
          },
          {
            "id": 2775,
            "name": "Udon Thani"
          },
          {
            "id": 2776,
            "name": "Uthai Thani"
          },
          {
            "id": 2777,
            "name": "Uttaradit"
          },
          {
            "id": 2778,
            "name": "Yala"
          },
          {
            "id": 2779,
            "name": "Yasothon"
          }
        ]
      },
      {
        "id": 148,
        "name": "Togo",
        "prefixNumber": "+228",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQkUyNkYyMDE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQkUyNkYyMTE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCRTI2RjFFMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCRTI2RjFGMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DvPYywAAAaZJREFUeNrslM9LG0EUxz+zP2ISsxitmlTxIghCKVSx0EKP1pZAWuiltwQvKir6H3jw0D+iB/8DLwXx4KmHXnppEaSFEEwhAaFhS9JCks1mt7MrLPEmOPGUL7yZebxhvvO+8+aJ8/RKDbDoh++DEJGbcP1wXijM3tx3BxjSZiIvIJOkvUYTLZVCmMb1JQYATdrfG8k6XUafL0viJHS96D59AijLGKGbMssGbbeESZa5ow9cvt3mz9UXkizgWQ/wPRd/45Na4u6/OtaLZ2Rf76LFk8QX53l4uEf6cg3nW5X68Sm6YSmXWsqo0alVSCw9Ymq/GAbS73OM5/K0K+XwnQVCPbExOo5TqvLj1SpO9SoK/nySp/n1M/rIJN4giP2eKw/ukHm3Jd9bp1zYpFP6RfZgR0Z1TOEQ0z31xRVAj1t4rRbll+vYFye0zi5IPn1MLDVDgl5Y1uLjG2XE4nxspRk0kKCyXdvGxyU2kaVr/5brHubENPGOc91AirPqMm43En3udDi6djBmorUm5VYN4X9nMK3pNsU1JL4PGCq/yFDqIXE//gswALMxeaDVbAFMAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2780,
            "name": "Kara"
          },
          {
            "id": 2781,
            "name": "Plateaux"
          },
          {
            "id": 2782,
            "name": "Savanes"
          },
          {
            "id": 2783,
            "name": "Centrale"
          },
          {
            "id": 2784,
            "name": "Maritime"
          }
        ]
      },
      {
        "id": 149,
        "name": "Tunisia",
        "prefixNumber": "+216",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0I5RDdCRjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0I5RDdDMDE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjlEN0JEMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzQjlEN0JFMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2pqf5gAAAmNJREFUeNrkVktrE1EU/u7MNBk6mTws+IgiqRUpdFXUjaAiXYkbFyoSFSxiddMGsRUFsfgoYlcipYhIMAURQXDnT1BXSt3YlmJQ21iU5tHbvOfhmZtZuLKJjXHhgXOHy9w53znfPY9h39CxCCBMytEa0UlTjIBX3E0rhUv4R6I0/gkjrcLCqthJ0Gj1kNp/C9ghpwIDOQGteMPCCaOcIkibDAVo7yU167ZW1zEbRQGqHT6BcDqHTaVF0gVs/vIV2tEz4p0tWJCaCWxQHKsI3r6H0KvnqL6fxvKePuT6B2EtfUfo5RRC4/fpTEGw0iRgohMZaMdOwXf9CrKnzyPVdwBSZBu0qzEwvw47k4U2EoN28qyIvJYH6wauCjP62E1UXr9F+uljdNy6i9CLBMzZeTDVC4vXEk0b6BcGbZTXD2whD0XdCmVXF/ITkyJ/fbFBmDPzSEejWIpshzmXFGfb9u6GHOgkYN6MiKlMmEud6WasxGAXy7ArTln9wqzzZKw5dyzBB6O4ADP5Ge0XB0TqFB4+gtLbgw2JJ9jycRZyV6R2Ke+mYWY/Eb6vGRG3idbAR+/Ae+gggkeO48fIJeTODcGzfx8kXQcL+MXJQjwhGGBQ17QqD6P9mlv5v/HOg9KHN5CDGxF4MA61pxfF+DMYM3OQd0SgdO8kFuLIjY1CprbPaF1DKnUOCaeB5EWd6tELCExNkss1sqzlDPjlG+CJCYJTCdRfT/fiDUwnJ4oS1ekKuSFDCXYSpxKMTJLorVLLdADVelsm/4OxKAkHLLdknESq3WlDQ4L/n/OYuxG38teH/xRgALiVytS9zUFxAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2785,
            "name": "Tunis"
          }
        ]
      },
      {
        "id": 150,
        "name": "Turkey",
        "prefixNumber": "+90",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDRBRjkyRTE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDRBRjkyRjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNEFGOTJDMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIwNEFGOTJEMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZWWjjQAAAsJJREFUeNrEVktoE1EUPW/eTGaaZPpJ0w9N60K6ENxVRIhIUdz4wSJYEFy40EXpzoILcSWoCxFddFVc6KKr4qKC4kJt6aoqCOIHoehCbGsNrZq8NMnMvJnxZtKSVmuJNaRvGN68Tzj33HvuvWFfwm1zADroFajNMOmdV1c+sGauCbiCbRrqpqeMAbYDz8kGS0WNAHoI8P3/Bt6YscIB14VcXoB0lsDNOLSubvi8tAcpS3eqCswU+NYyHGsR4YPHkHj3AYnMLNreP0fL+H00DA6Rn1T42XTJI1UDJjbSSSN25RpaJx5C270L2ZG7SPUeQebqDTBNg967n2aDDMzDl1Zg7L8ORumUKSuawcktIHqiHy0PxoKd1OHjyDx7BC04VeDRo8V3kIHEVmHw3BxkOgWuhsH1Jgq/rARXrBOX79iBC8yB86XTkTsQBGqE4oCmBqJSyL2+KEBaKYT29qC+bxD5sXHw1mYUnk6A1UUqCoGyHjgHXt8BbU9PsLYmp0oXVkBLl3x4VhZaezcaBi6g4fJFtL+agptaJF/kKo77BsFh5d9ukjZMUYidUU47KbcuLkZxcjNzsF+/Cdb6gSSxKArOKzOhWTFM2PMz+HH7OsStYRLeUfDOBJlcV3GObygus/8M4mOjwc635CGI6UkSF6dTlQyxoDVRafdoHdLheZR6S19JXBESV2PF4uJDWvRSkdzqDoeB/NsXUM0Y9OQ+RM+dhaqb8D7NQ+3sQuTkKbD6RsiZj/DyZLMtwetiYLyoe69ST9u/MS6S5vALggqXQLTvNJqGb4J3JeBlBOzplyg8foLle6Pw0j/BIuZWy6f4E3i1ZDoFql7fSQQqtLadUOIxyNnPlLPk1lAjuTlMBN2tFq6/AK9pEn7Bgu8WW7VPzjDBDKMaTUJs3p0IgFE3Ymhet1eNsa39WKy4upZ/fcQvAQYAj5ICkAs+H68AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2786,
            "name": "Adana"
          },
          {
            "id": 2787,
            "name": "Adiyaman"
          },
          {
            "id": 2788,
            "name": "Afyonkarahisar"
          },
          {
            "id": 2789,
            "name": "Agri"
          },
          {
            "id": 2790,
            "name": "Aksaray"
          },
          {
            "id": 2791,
            "name": "Amasya"
          },
          {
            "id": 2792,
            "name": "Ankara"
          },
          {
            "id": 2793,
            "name": "Antalya"
          },
          {
            "id": 2794,
            "name": "Ardahan"
          },
          {
            "id": 2795,
            "name": "Artvin"
          },
          {
            "id": 2796,
            "name": "Aydin"
          },
          {
            "id": 2797,
            "name": "Balikesir"
          },
          {
            "id": 2798,
            "name": "Bartin"
          },
          {
            "id": 2799,
            "name": "Batman"
          },
          {
            "id": 2800,
            "name": "Bayburt"
          },
          {
            "id": 2801,
            "name": "Bilecik"
          },
          {
            "id": 2802,
            "name": "Bingol"
          },
          {
            "id": 2803,
            "name": "Bitlis"
          },
          {
            "id": 2804,
            "name": "Bolu"
          },
          {
            "id": 2805,
            "name": "Burdur"
          },
          {
            "id": 2806,
            "name": "Bursa"
          },
          {
            "id": 2807,
            "name": "Canakkale"
          },
          {
            "id": 2808,
            "name": "Cankiri"
          },
          {
            "id": 2809,
            "name": "Corum"
          },
          {
            "id": 2810,
            "name": "Denizli"
          },
          {
            "id": 2811,
            "name": "Diyarbakir"
          },
          {
            "id": 2812,
            "name": "Duzce"
          },
          {
            "id": 2813,
            "name": "Edirne"
          },
          {
            "id": 2814,
            "name": "Elazig"
          },
          {
            "id": 2815,
            "name": "Erzincan"
          },
          {
            "id": 2816,
            "name": "Erzurum"
          },
          {
            "id": 2817,
            "name": "Eskisehir"
          },
          {
            "id": 2818,
            "name": "Gaziantep"
          },
          {
            "id": 2819,
            "name": "Giresun"
          },
          {
            "id": 2820,
            "name": "Gumushane"
          },
          {
            "id": 2821,
            "name": "Hakkari"
          },
          {
            "id": 2822,
            "name": "Hatay"
          },
          {
            "id": 2823,
            "name": "Igdir"
          },
          {
            "id": 2824,
            "name": "Isparta"
          },
          {
            "id": 2825,
            "name": "Istanbul"
          },
          {
            "id": 2826,
            "name": "Izmir"
          },
          {
            "id": 2827,
            "name": "Kahramanmaras"
          },
          {
            "id": 2828,
            "name": "Karabuk"
          },
          {
            "id": 2829,
            "name": "Karaman"
          },
          {
            "id": 2830,
            "name": "Kars"
          },
          {
            "id": 2831,
            "name": "Kastamonu"
          },
          {
            "id": 2832,
            "name": "Kayseri"
          },
          {
            "id": 2833,
            "name": "Kilis"
          },
          {
            "id": 2834,
            "name": "Kirikkale"
          },
          {
            "id": 2835,
            "name": "Kirklareli"
          },
          {
            "id": 2836,
            "name": "Kirsehir"
          },
          {
            "id": 2837,
            "name": "Kocaeli"
          },
          {
            "id": 2838,
            "name": "Konya"
          },
          {
            "id": 2839,
            "name": "Kutahya"
          },
          {
            "id": 2840,
            "name": "Malatya"
          },
          {
            "id": 2841,
            "name": "Manisa"
          },
          {
            "id": 2842,
            "name": "Mardin"
          },
          {
            "id": 2843,
            "name": "Mersin"
          },
          {
            "id": 2844,
            "name": "Mugla"
          },
          {
            "id": 2845,
            "name": "Mus"
          },
          {
            "id": 2846,
            "name": "Nevsehir"
          },
          {
            "id": 2847,
            "name": "Nigde"
          },
          {
            "id": 2848,
            "name": "Ordu"
          },
          {
            "id": 2849,
            "name": "Osmaniye"
          },
          {
            "id": 2850,
            "name": "Rize"
          },
          {
            "id": 2851,
            "name": "Sakarya"
          },
          {
            "id": 2852,
            "name": "Samsun"
          },
          {
            "id": 2853,
            "name": "Sanliurfa"
          },
          {
            "id": 2854,
            "name": "Siirt"
          },
          {
            "id": 2855,
            "name": "Sinop"
          },
          {
            "id": 2856,
            "name": "Sirnak"
          },
          {
            "id": 2857,
            "name": "Sivas"
          },
          {
            "id": 2858,
            "name": "Tekirdag"
          },
          {
            "id": 2859,
            "name": "Tokat"
          },
          {
            "id": 2860,
            "name": "Trabzon"
          },
          {
            "id": 2861,
            "name": "Tunceli"
          },
          {
            "id": 2862,
            "name": "Usak"
          },
          {
            "id": 2863,
            "name": "Van"
          },
          {
            "id": 2864,
            "name": "Yalova"
          },
          {
            "id": 2865,
            "name": "Yozgat"
          },
          {
            "id": 2866,
            "name": "Zonguldak"
          }
        ]
      },
      {
        "id": 151,
        "name": "Turkmenistan",
        "prefixNumber": "+993",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDRBRjkzMjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDRBRjkzMzE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNEFGOTMwMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIwNEFGOTMxMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rBlHvAAAAuFJREFUeNqklEtIVFEYx79zzr137rzfvsFMExEqaVQyULLc9bKEWlU7DRfhql3bdm1atQqCqF27AqEQkRIsSMkHPlAZx5nRcZyZq6P3dc7pTthrEcw4H4dzdr/zPz++7yAYvg5WybYr6cTjjzvp6rN+1wad24rVuod6ahRmA0rB0EEQASEADoCguMJHp8jyy2pFQ5urv2esJaR0HwbzRFMIYI4QqgxXE11DpmnthWswLgYtHJ2IM+Z1Cusz+eg6Pd0beaBFx5mqglMCndZ4fPW+4Pa+EhCl+c111XoHQkWn1om3iSprm63vY4PZg+rReFZLCn4Osre+si6eSVNG15MbkYaW2119kEmVkpqD4DBspjOzGogfTvkXaWUHMTCSRKnWFxQl6dvyLKzM2Tt7m040F5yU4Fpi5pr81eXKD+Q8F/ji1cBsLuA7lHRl5/PidDSdyqUS+GTLw5v3LSGASSmpC7ot4QCmpRFhho7eIopcMzZ3kgOX+0cu3Xg7Nf7y3RsIVZWC1jGuV7vm92ZG/Qd15vkV4C27qtsHFAERKEZxJTP06tn89y8QCAMhwFjxHQJYJVkM82Bup3inkHdS6Si7IJjUnLSgVlXUFHqjCO7frilPOiY0WIlAU6Rqos5YTUviAQHCgf8cE4ersAqSeIkjQzF49WaMgjEaTSuNWVvYYVKJASt29v4vxEA0oLWJDC2RuE+J7KJUu2FYaAplo0XuSAifZOfrPgkEMpsirXuafIDydjg2/RcaczmHluy28VbZaxhxv1gxxURrMuy87NQ6Vk7RWx/S8tONLY+vXXe7z+Ty3kA5rvHv5mOamdWg487g8L2GsGsxs08QHJ/7T/Ntzxjha92hJxcn/fTc83bVXqMljELzlYvWiadOcvLp7Iu7UnX7nm8kVJXkjJaT+s9/je12Gl3IzHiROxaDRx53wpSbC39KuakFlt21xbfD9jBWF8YEIbmy1kgEs5zUPwQYADj4QuUGyU1HAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 2867,
            "name": "Ahal Welayaty (Ashgabat)"
          },
          {
            "id": 2868,
            "name": "Balkan Welayaty (Balkanabat)"
          },
          {
            "id": 2869,
            "name": "Dashoguz Welayaty"
          },
          {
            "id": 2870,
            "name": "Lebap Welayaty (Turkmenabat)"
          },
          {
            "id": 2871,
            "name": "Mary Welayaty"
          }
        ]
      },
      {
        "id": 152,
        "name": "Uganda",
        "prefixNumber": "+256",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUNCNDM5RDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUNCNDM5RTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQ0I0MzlCMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQ0I0MzlDMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TD5l0QAAAL5JREFUeNpiYBgFKIDx/39aGc1EO1cPTaNZbilz4lfx/9P3P6zsqnMOLTi0UEFL31nR/kaUCcu3L4wCnJS6mpeHQW7uIjYvs+t/BMT1bZht1SXmLOIVoEaAfNFS4PUMO3v99tnLJ/nYQelJ2D3wi7YydULtPxikFJUqcjHdCjH7/+Uj1SJk/fqNQKN37d43ceKU/zdP71i6hKgsQ1zG4umfsFpYiF9RQe7lT6YQbwOGn69Gc+OQyo0jLEAAAgwAGc1CiUqK1KwAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2872,
            "name": "Adjumani"
          },
          {
            "id": 2873,
            "name": "Apac"
          },
          {
            "id": 2874,
            "name": "Arua"
          },
          {
            "id": 2875,
            "name": "Bugiri"
          },
          {
            "id": 2876,
            "name": "Bundibugyo"
          },
          {
            "id": 2877,
            "name": "Bushenyi"
          },
          {
            "id": 2878,
            "name": "Busia"
          },
          {
            "id": 2879,
            "name": "Gulu"
          },
          {
            "id": 2880,
            "name": "Hoima"
          },
          {
            "id": 2881,
            "name": "Iganga"
          },
          {
            "id": 2882,
            "name": "Jinja"
          },
          {
            "id": 2883,
            "name": "Kabale"
          },
          {
            "id": 2884,
            "name": "Kabarole"
          },
          {
            "id": 2885,
            "name": "Kaberamaido"
          },
          {
            "id": 2886,
            "name": "Kalangala"
          },
          {
            "id": 2887,
            "name": "Kampala"
          },
          {
            "id": 2888,
            "name": "Kamuli"
          },
          {
            "id": 2889,
            "name": "Kamwenge"
          },
          {
            "id": 2890,
            "name": "Kanungu"
          },
          {
            "id": 2891,
            "name": "Kapchorwa"
          },
          {
            "id": 2892,
            "name": "Kasese"
          },
          {
            "id": 2893,
            "name": "Katakwi"
          },
          {
            "id": 2894,
            "name": "Kayunga"
          },
          {
            "id": 2895,
            "name": "Kibale"
          },
          {
            "id": 2896,
            "name": "Kiboga"
          },
          {
            "id": 2897,
            "name": "Kisoro"
          },
          {
            "id": 2898,
            "name": "Kitgum"
          },
          {
            "id": 2899,
            "name": "Kotido"
          },
          {
            "id": 2900,
            "name": "Kumi"
          },
          {
            "id": 2901,
            "name": "Kyenjojo"
          },
          {
            "id": 2902,
            "name": "Lira"
          },
          {
            "id": 2903,
            "name": "Luwero"
          },
          {
            "id": 2904,
            "name": "Masaka"
          },
          {
            "id": 2905,
            "name": "Masindi"
          },
          {
            "id": 2906,
            "name": "Mayuge"
          },
          {
            "id": 2907,
            "name": "Mbale"
          },
          {
            "id": 2908,
            "name": "Mbarara"
          },
          {
            "id": 2909,
            "name": "Moroto"
          },
          {
            "id": 2910,
            "name": "Moyo"
          },
          {
            "id": 2911,
            "name": "Mpigi"
          },
          {
            "id": 2912,
            "name": "Mubende"
          },
          {
            "id": 2913,
            "name": "Mukono"
          },
          {
            "id": 2914,
            "name": "Nakapiripirit"
          },
          {
            "id": 2915,
            "name": "Nakasongola"
          },
          {
            "id": 2916,
            "name": "Nebbi"
          },
          {
            "id": 2917,
            "name": "Ntungamo"
          },
          {
            "id": 2918,
            "name": "Pader"
          },
          {
            "id": 2919,
            "name": "Pallisa"
          },
          {
            "id": 2920,
            "name": "Rakai"
          },
          {
            "id": 2921,
            "name": "Rukungiri"
          },
          {
            "id": 2922,
            "name": "Sembabule"
          },
          {
            "id": 2923,
            "name": "Sironko"
          },
          {
            "id": 2924,
            "name": "Soroti"
          },
          {
            "id": 2925,
            "name": "Tororo"
          },
          {
            "id": 2926,
            "name": "Wakiso"
          },
          {
            "id": 2927,
            "name": "Yumbe"
          }
        ]
      },
      {
        "id": 153,
        "name": "Ukraine",
        "prefixNumber": "+380",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjExNEYxODE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjExNEYxOTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQ0I0MzlGMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQ0I0M0EwMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LuVcRwAAACtJREFUeNpitCo9wkAbwMRAMzBq9KjRw9Foxp93xUYDZNToUaMHg9EAAQYArtQDhtrhiMcAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2928,
            "name": "Cherkasy"
          },
          {
            "id": 2929,
            "name": "Chernihiv"
          },
          {
            "id": 2930,
            "name": "Chernivtsi"
          },
          {
            "id": 2931,
            "name": "Crimea"
          },
          {
            "id": 2932,
            "name": "Dnipropetrovs'k"
          },
          {
            "id": 2933,
            "name": "Donets'k"
          },
          {
            "id": 2934,
            "name": "Ivano-Frankivs'k"
          },
          {
            "id": 2935,
            "name": "Kharkiv"
          },
          {
            "id": 2936,
            "name": "Kherson"
          },
          {
            "id": 2937,
            "name": "Khmel'nyts'kyy"
          },
          {
            "id": 2938,
            "name": "Kirovohrad"
          },
          {
            "id": 2939,
            "name": "Kiev"
          },
          {
            "id": 2940,
            "name": "Kyyiv"
          },
          {
            "id": 2941,
            "name": "Luhans'k"
          },
          {
            "id": 2942,
            "name": "L'viv"
          },
          {
            "id": 2943,
            "name": "Mykolayiv"
          },
          {
            "id": 2944,
            "name": "Odesa"
          },
          {
            "id": 2945,
            "name": "Poltava"
          },
          {
            "id": 2946,
            "name": "Rivne"
          },
          {
            "id": 2947,
            "name": "Sevastopol'"
          },
          {
            "id": 2948,
            "name": "Sumy"
          },
          {
            "id": 2949,
            "name": "Ternopil'"
          },
          {
            "id": 2950,
            "name": "Vinnytsya"
          },
          {
            "id": 2951,
            "name": "Volyn'"
          },
          {
            "id": 2952,
            "name": "Zakarpattya"
          },
          {
            "id": 2953,
            "name": "Zaporizhzhya"
          },
          {
            "id": 2954,
            "name": "Zhytomyr"
          }
        ]
      },
      {
        "id": 154,
        "name": "United Arab Emirates",
        "prefixNumber": "+971",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjExNEYxQzE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjExNEYxRDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTE0RjFBMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMTE0RjFCMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VISheQAAAGRJREFUeNpiPCeo9p+BCGDUeYuBmoCJYYDAqMWjFtMMsBCr8H/c/98M7AzMQCYjfX38/QsjVD0jNTDRFv/592eEJS5mZuaBSVyM/LygMv0ftRIX8RYzMrKOFiCjFo9ajA8ABBgAlQMOS8Um6UkAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2955,
            "name": "Abu Dhabi"
          },
          {
            "id": 2956,
            "name": "'Ajman"
          },
          {
            "id": 2957,
            "name": "Al Fujayrah"
          },
          {
            "id": 2958,
            "name": "Sharjah"
          },
          {
            "id": 2959,
            "name": "Dubai"
          },
          {
            "id": 2960,
            "name": "Ra's al Khaymah"
          },
          {
            "id": 2961,
            "name": "Umm al Qaywayn"
          }
        ]
      },
      {
        "id": 155,
        "name": "United Kingdom",
        "prefixNumber": "+44",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjExNEYyMDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjExNEYyMTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTE0RjFFMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMTE0RjFGMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EXnauAAABW1JREFUeNrEVm1QVGUUfu7dXZBYvuRj1yATNT5FxCClTNLUFNBJrfxRZjOKkVLqGA2okGGDhA44ToqT1pigA9qAhkho4kiCqRhgCKwBg5IiLCDs8rEid0/vvVfWGD/K/nR27u7Ofc85z/Oe9znnXi52S4Eh49sy9DS1AE6OgJsdYDYDhOFWr8fi+Ej8kByBuoDX0FOtA6dUwVrrignNlxG1vQT7Yg8B492Gx3HsUvBAmxHoNEAdFoyYqDAoUzeF2322djbS0k9h53el6NXdAEY6Aa6PIfBvTQTkGaBeBOxmgCFYFz0Dy5z0GJe7FbzxdAlc1CokJ4SjoSoRsQkLoXawAXTNLKhHZss9JaAY085idbdgN9EbcQfWo2JTIJLOpoCbOw0VR8+BvzUrDFe8X4Th5Blo7K2RmjQfjZWJiE9aBHtnW5lAe69IH9wTCMhrDLCD+epuwiHIFwmHGGCcH5LPpYCfHYrKY2VwPJyHoNYGoKXwNAlvRVItK2qVTzAZi0toyNqNAxT7eT6px2xkBQ+nsI+OSPdrJ4TRJWipXPkc/e4xWbq3OKGI+USSOmwPxX1fQ01nLhB9+AHVs7y/uXpSR3auJa+JXYB/Gi1LKaXiXTlUExRKvzDHinGB1L430+LYqjfS8k8yacmmEyQMCg8BCwN3KSqthN5dtZ+u7s4iYekS+kPMM8qL2nPyLHkq6jto6apDBJuPCVOXHSSvyH0UnVVPOrbYf7Gc6uYtpLqIt6kzt4AeZdV+IrCGyhUeVOkeRGbpw6zpGvVGR1PtjHl0p/DnYTFX20y08ouT5D13D730/kHiSNo2s/4+GE1m2DmpLec2qO8Ap1KxtlGAFwWj4iEYTagJjcTdaw1SOyldRsL31+Ow0joDBna+Ls6WeBIEUL9J+t9nuge1rTVgYyNromb8VBqSI+MNQSBwCgXTCSe3khhMw3vK3Nsnt9p9VfG2z7Af5q9UyqoW/QeFYZ2oUDA/jsdQfyp7G5ufukWVjg7si5dzMJB7f7Y8RO6fjMf/ZEqbMR4PGpGxFszDmXPi9JGalKTyihuTSi08KLXKYxT+3uTc0NSCnJNYHM+OjruPIflYxMUSm7qMsGJCkhZUSnDW1g8YiGAsl8BEUsvEZRoSlysTV1k+E5eLRMZsloFEwrza1hJ+19gHazsrca/yjhfFF+B2UycCfLWIWfkqArQjLM791XW4uXUbnNlIdYpbC3j6QGEjKYXxNMsCEzU1ij0YrKyGnV33ybPQ7z8gbg2jN3wKvb8f0nOv43xeKVw1avB5KbkYYerFmzPHW0CNpRdRHTwDTQG+eL6tAb0+gVifcRkrvipmIjdLupIQWekUolJZ0dZ8XYaYuBx0G+X2cZg1BXYhITCeKcWlCf4whM7E67fK4f6CB37MY3OyubXH0uTGkjK6Mmka1bBUg/PfoJajJyg9V0djlxxmx7GQQpdnP3ZkLogvZD7zyNk7kRKTC6mzX7Dk7TpeRJWeE6VpZn7vHbp+oph4Dzdb9F24jOrJ03F9+svwfXYE3PILsSc6A1Myu7Bu0Q405rNBCi3cNXaPValGfKBgDDpuG5C04TDGTtyML7efgmGA4BAxB4GNVXA5Voiqs9Uwhc8ELwI2TQ2G32hbaAqKsGvFboRkGRATsQ03fjoPeLkC7k6S+J7Uq/IaO3M3e8B7NLraepAQmw3PgM1gFUD3gBmOC+Zi0o2r0OQXQemjscKd3HxkWPkjPfMSGrLT2FhTyYBSrqd8ExAJsOknvclo7NHZasCWjUew+8AFrF3xCtasmQ2HyDlQ7lr9jXFnVjkac1IZIJO6l9t/A3wUAbpPQGuPjpZuqQI79p7D6qhp+EuAAQB9e+n65ZcRTgAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 2962,
            "name": "London"
          },
          {
            "id": 2963,
            "name": "Birmingham"
          },
          {
            "id": 2964,
            "name": "Glasgow"
          },
          {
            "id": 2965,
            "name": "Liverpool"
          },
          {
            "id": 2966,
            "name": "Bristol"
          },
          {
            "id": 2967,
            "name": "Manchester"
          },
          {
            "id": 2968,
            "name": "Sheffield"
          },
          {
            "id": 2969,
            "name": "Leeds"
          },
          {
            "id": 2970,
            "name": "Edinburgh"
          },
          {
            "id": 2971,
            "name": "Leicester"
          }
        ]
      },
      {
        "id": 156,
        "name": "United States",
        "prefixNumber": "+1",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTc5MkI3RjE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTc5MkI4MDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTE0RjIyMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFNzkyQjdFMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+60cYSwAAAyhJREFUeNrElN1PU3cYxz/tOQUBD/aNymtbUAq2IOiUWXmZA40Iy2BzcW53y7JlyZLtZuE/8NaY7Gbe7WJbdJnTDOdQCbLKrERUotgCSodQ7AsFpK28yKT7rfsL2gv7JCcn+eV3zpPv5/l+H9X2xp65SqtJGfr1Fg3vNPD02SIhfwRniwP3pdvsOVxPaCHGs7+DOA/VJs8crXXEs3P48OfTfMIcU+SRaqlMzm8SNut2VuefIxvyydZIxFbWyX35iviLNZRiPZJaxdLyCkoiQUyc6cwFTPvC9FRkcbJMy7JaTrmxHIuvxaZm5xW7+Jl3NkKRaRt5OVlMjvuoqa9gwr9AgS4PvTYP78hjdtVVEAw9J+Kdxv7Td+hL8tGTeslGg8Jeexk3/riLs62O+cU441NBDjbZGbg+SlNbPYvRF9zzzHCoycFA/yhvCtRqnZbr5a1YEjGm5S2po1ZXfRHVaCTlWLODq24v1eWFGPVbuXH5Dh3vORm88xhziR5zoZ5rl9y0dx/ggS/EzGSQs5Ua3s39h7CUlbri0mKdUGzmijBXqzBXYH4Z931fsmlf7zBvd+wjIigMDI/TcbyRvt+GOSgUZ62uU3S2h8IdRgrTQK1S2T6PyhpZ+aB9LxcF2hpbCUUF27hy4S+Of/wWfUMeykuNVIin9/xNuj9qYWR8juknIc5szNC1voA/DdSypayAhlor57/vp/NEC7OBRfpveek+0cwvP/7JsfedhEWcLg8+pOtkMxfOuTjc5WSrSc+S6ymSQYtGyk5dsVT9/4zbhZmu3Z5IztggXOwSZjvSuZ+hUR9mEan/KAz+PkJb5z7GngSYdXu46T9Ho3EL6ZSKnZ9Fax0W5aFrDNuB6mROA6El7BYTnns+bPt3srK2gV+QcIjIPRLzrxL3ZkLLfB0c40udRCAd1EfFNioxaSG+Sl2NmchSnCKjwh6HBWlzk/rd1uTyMOTn8MbuctRiieyqLKbKbqXs4gSvQmFephOnRCIRFW+F11yyp/3TtD/eSKjYTM4rjcZh110yUZlDPfnVqcwovkppRhRnDrX/2x+UjKDuJXcuE4r/FWAAjBMttNdoYOEAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 2972,
            "name": "Alabama"
          },
          {
            "id": 2973,
            "name": "Alaska"
          },
          {
            "id": 2974,
            "name": "Arizona"
          },
          {
            "id": 2975,
            "name": "Arkansas"
          },
          {
            "id": 2976,
            "name": "California"
          },
          {
            "id": 2977,
            "name": "Colorado"
          },
          {
            "id": 2978,
            "name": "Connecticut"
          },
          {
            "id": 2979,
            "name": "Delaware"
          },
          {
            "id": 2980,
            "name": "District of Columbia"
          },
          {
            "id": 2981,
            "name": "Florida"
          },
          {
            "id": 2982,
            "name": "Georgia"
          },
          {
            "id": 2983,
            "name": "Hawaii"
          },
          {
            "id": 2984,
            "name": "Idaho"
          },
          {
            "id": 2985,
            "name": "Illinois"
          },
          {
            "id": 2986,
            "name": "Indiana"
          },
          {
            "id": 2987,
            "name": "Iowa"
          },
          {
            "id": 2988,
            "name": "Kansas"
          },
          {
            "id": 2989,
            "name": "Kentucky"
          },
          {
            "id": 2990,
            "name": "Louisiana"
          },
          {
            "id": 2991,
            "name": "Maine"
          },
          {
            "id": 2992,
            "name": "Maryland"
          },
          {
            "id": 2993,
            "name": "Massachusetts"
          },
          {
            "id": 2994,
            "name": "Michigan"
          },
          {
            "id": 2995,
            "name": "Minnesota"
          },
          {
            "id": 2996,
            "name": "Mississippi"
          },
          {
            "id": 2997,
            "name": "Missouri"
          },
          {
            "id": 2998,
            "name": "Montana"
          },
          {
            "id": 2999,
            "name": "Nebraska"
          },
          {
            "id": 3000,
            "name": "Nevada"
          },
          {
            "id": 3001,
            "name": "New Hampshire"
          },
          {
            "id": 3002,
            "name": "New Jersey"
          },
          {
            "id": 3003,
            "name": "New Mexico"
          },
          {
            "id": 3004,
            "name": "New York"
          },
          {
            "id": 3005,
            "name": "North Carolina"
          },
          {
            "id": 3006,
            "name": "North Dakota"
          },
          {
            "id": 3007,
            "name": "Ohio"
          },
          {
            "id": 3008,
            "name": "Oklahoma"
          },
          {
            "id": 3009,
            "name": "Oregon"
          },
          {
            "id": 3010,
            "name": "Pennsylvania"
          },
          {
            "id": 3011,
            "name": "Rhode Island"
          },
          {
            "id": 3012,
            "name": "South Carolina"
          },
          {
            "id": 3013,
            "name": "South Dakota"
          },
          {
            "id": 3014,
            "name": "Tennessee"
          },
          {
            "id": 3015,
            "name": "Texas"
          },
          {
            "id": 3016,
            "name": "Utah"
          },
          {
            "id": 3017,
            "name": "Vermont"
          },
          {
            "id": 3018,
            "name": "Virginia"
          },
          {
            "id": 3019,
            "name": "Washington"
          },
          {
            "id": 3020,
            "name": "West Virginia"
          },
          {
            "id": 3021,
            "name": "Wisconsin"
          },
          {
            "id": 3022,
            "name": "Wyoming"
          }
        ]
      },
      {
        "id": 157,
        "name": "Uruguay",
        "prefixNumber": "+598",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTc5MkI4NzE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTc5MkI4ODE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRFNzkyQjg1MTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFNzkyQjg2MTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+foYgAAAXJJREFUeNrsls9KAlEUxn93nCadUbISM03BWraofbRq07JV79GL5KZdqx6h1wjaBBkGQVCNWmo1M47jn7xdw4L2ji7qg3M5Bw5897sf53KElPIJyKpwmQ4SKmyhiJ1xgec6CE2jPxB0uwGWGSUet0Jh178TvxNwU74kqnuqEjTqt+SKu6zmN0nEzXCIh0NJq+XQ9yr41RM8547l1DrNh4CXxhs7u3uqS0OI0sSItdHheH1atQsM54ymfU3SUortMv3aKaZu0+tp4Sg25g26gUf98YpCPoKlfDVNQbV6z4IcMJCqR/VJeTRZxSMIITFiabr+B+22j+/6JJJ5Ws0HXpvP4SienxtlGaKZQ4bOOXajghVbwUgekCrsk8umx5crTZY4onQXN7Z5X87xVltHT/sMpWSgrVEoboUyTr/mOOi0CYLO1xwjA3Q9wuJSJgxed0QsmQE0ZgT1psd/TPG/x3/C458PZIpw9fHKk5jy6uN+CjAArpeUjQlCP/MAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 3023,
            "name": "Artigas"
          },
          {
            "id": 3024,
            "name": "Canelones"
          },
          {
            "id": 3025,
            "name": "Cerro Largo"
          },
          {
            "id": 3026,
            "name": "Colonia"
          },
          {
            "id": 3027,
            "name": "Durazno"
          },
          {
            "id": 3028,
            "name": "Flores"
          },
          {
            "id": 3029,
            "name": "Florida"
          },
          {
            "id": 3030,
            "name": "Lavalleja"
          },
          {
            "id": 3031,
            "name": "Maldonado"
          },
          {
            "id": 3032,
            "name": "Montevideo"
          },
          {
            "id": 3033,
            "name": "Paysandu"
          },
          {
            "id": 3034,
            "name": "Rio Negro"
          },
          {
            "id": 3035,
            "name": "Rivera"
          },
          {
            "id": 3036,
            "name": "Rocha"
          },
          {
            "id": 3037,
            "name": "Salto"
          },
          {
            "id": 3038,
            "name": "San Jose"
          },
          {
            "id": 3039,
            "name": "Soriano"
          },
          {
            "id": 3040,
            "name": "Tacuarembo"
          },
          {
            "id": 3041,
            "name": "Treinta y Tres"
          }
        ]
      },
      {
        "id": 158,
        "name": "Uzbekistan",
        "prefixNumber": "+998",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjFFMjIwNDE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjFFMjIwNTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MUUyMjAyMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MUUyMjAzMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5O2LbgAAAeRJREFUeNrkkz1rFEEYx3/7fhd3c+EE0XAE0UZrG/E7JGhjZWHnZ0jhd7ARsbS2sRGLFIrfQBBBMIJwigkhyb14+zI7Oz4zFwSxWpHbwgdmZ/YZZn7z/z8zHk9ffgUyAh8mP6Afs33lEvvzgg8HJxAGuGgMF84lTKuaNcktak0WhZxWCqUNeLSKUNqmG81yRsOMvdu3GC9Kdl+/czC3odJLcC+h0g3DJEIbw7AXMVM1ioa2ZAueYUxGqXixfZNrGynXn+2BKEPGiLIt6a2y8aKgEPCJzJWi8rhQ7gB4LeVK+O5rcJbeOL/O97yE45mY3xdo7cBpFBD5HoM4JJGS2D4OPDZEeWChFt4yAnbu7YpLCUXFkWxw9+om87UeH8dHrA9SPIFMKu0U1jKfi+W1OJuLcqt2Ib3D2gO0aCG5WvoUxzx+8563k5w7ly/SDDIOrN1WdRKDrikCuWi2pmGEqRVTyeuqdLm2docPDz/LKrRdWDcNn17t8yX0eZD2hanFYp9K8tZqJWrjs3/bF1q7Gx78RY09M5+cuue0rDS/au728n5L/8vwjDFyk0hZcVjw9Ezx/wPuyOqF+fNyrSDCJ4/um1VDl+/l+VYnVoejdLRytQ7sN3QSPnQHzjqxWtq3LuA/BRgAxkzb8HD3VjsAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 3042,
            "name": "Andijon Viloyati"
          },
          {
            "id": 3043,
            "name": "Buxoro Viloyati"
          },
          {
            "id": 3044,
            "name": "Farg'ona Viloyati"
          },
          {
            "id": 3045,
            "name": "Jizzax Viloyati"
          },
          {
            "id": 3046,
            "name": "Namangan Viloyati"
          },
          {
            "id": 3047,
            "name": "Navoiy Viloyati"
          },
          {
            "id": 3048,
            "name": "Qashqadaryo Viloyati"
          },
          {
            "id": 3049,
            "name": "Qaraqalpog'iston Respublikasi"
          },
          {
            "id": 3050,
            "name": "Samarqand Viloyati"
          },
          {
            "id": 3051,
            "name": "Sirdaryo Viloyati"
          },
          {
            "id": 3052,
            "name": "Surxondaryo Viloyati"
          },
          {
            "id": 3053,
            "name": "Toshkent Shahri"
          },
          {
            "id": 3054,
            "name": "Toshkent Viloyati"
          },
          {
            "id": 3055,
            "name": "Xorazm Viloyati"
          }
        ]
      },
      {
        "id": 159,
        "name": "Vanuatu",
        "prefixNumber": "+678",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjFFMjIwODE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjFFMjIwOTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MUUyMjA2MTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MUUyMjA3MTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q4FzLAAAA2xJREFUeNq0lX9o1HUYx1/f7/2au7vdbdMLl2KzmT+oTUaQVjAhFbYKQ6SRqF3gwLKLCkKNsKyhYv/4h2RETlAQRAZO/+gHVlrLAn/NBvkjHJOam7Rzeafb/fw+Pd+7TpT+kDu3B54P932+3++9n+f9vJ/na1RRMbDTNd3/ckUVaRH6rQRZBBODiTRj2Uqk6wDMpZptZTUs9QY1AUsTSCo8msDEmLl/A/GrZ6GmNcpLiV4WRC/w89gtHnd4mW56cuAyEcCVDdDZBUe3wvkfwdk8TMvYeZ6LXqI3Oco8RzlTTTeWwo9nAmZWj3e3QNVs6FbgX3ZDTzcMNg2x6PY5mqOX6UsnqHf6CJmucUvgTgsTGVj/AZQ9osCnoXcfHDsCF54cYkG8h5XDVxjMpHnC4aPacOYEKOMBbJuvzKByioPw2xB4DEauwZ+H4esjFt/O+4vG2DnWRPuIWRbzNYGgJmCr312C2zMTU/eHl3loW11GygmZm8KSV+M5Wc1WBj7bAc8+pVo4AeHNkOp3E6GGSDDEZKV/TKySqo8tbHDK4HdBeeVFjzxT75Tfjgblp70VBUHnvGEu8sMhRK4hX3ypsYAdd4uPgDjwiVmk5yreGin3T/LAJ7vHaGly030mTU9ngNqWfxiJ3VtL3QzY8T48vwQOfgMDN3QSStg1Tvs48FWSjo98LF6U5ftTaT58bRKWyj2V/v8LN0ZUiAmt1Q+zVCFTkrqFHKUJzO6xNM5xSvt75bJrk1ckHpK9W7z3UD1rBnK4A0n3I8f2II868lRDUN1ftN8RVyGLoROVnLycZXlbLHc9tRp2bYflzTrjOueRCJyJKlFNM6FVea9wQTJb/K6+G9il/2eYJqmUhc3e56rmcCv88Tu8tV7nuk8fb1SZr6lVngMQVc5HtR+mxg2j+B4XLJ2xT4udusnWrYa+i7DiBejq1XC9An6qPieoqab05s08mI2XldLEVdgkH29QKsMQV6W2rYL9JzVYOw3atcIG5fyWVnc1/t8LD/bZzAFv1k218U3dVMPwzuvQcVyD0x7WTGbmAe19WgAcp8+0cf1XYi4P/u3tOp+dGqkOwVoFfPohFY0Ff4+qpqXoHt4XeFMrsu2g/vJOhjfqYGEoP0BDtycE8C5VBwZYV+dncU2+b9e1woz1wD28n/0rwAB0+lOwpXHd2QAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 3056,
            "name": "Malampa"
          },
          {
            "id": 3057,
            "name": "Penama"
          },
          {
            "id": 3058,
            "name": "Sanma"
          },
          {
            "id": 3059,
            "name": "Shefa"
          },
          {
            "id": 3060,
            "name": "Tafea"
          },
          {
            "id": 3061,
            "name": "Torba"
          }
        ]
      },
      {
        "id": 160,
        "name": "Vatican",
        "prefixNumber": "+379",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUZDNzdDNzcxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUZDNzdDNzYxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iODY0MDczNUVBM0I5QTUyOTc2RUZFMTAzNDJBQjczRUMiIHN0UmVmOmRvY3VtZW50SUQ9Ijg2NDA3MzVFQTNCOUE1Mjk3NkVGRTEwMzQyQUI3M0VDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oPgNXQAAAghJREFUeNrkVL9v00AUvvNvO44dbFNBkjYllIWUASbEQAeQEBszjP0D+B9g4p9ghY2VlQEhIdQGRwyIItFUSUOSJnbqn3dnH05IUISEVEdCDLzh3d17T989fXrfg0n/HjizQev12YsZ8NfsP4GmMKN8es7ZhxTCFIIULOIQAoxRduPyQs8R4NSlCfFOByhyOUEq6hWG5X/G4cznhqY06wsmJIzjKHCP0Ml77B8yohlbNwtaVZJlVjiXJJTj8kO7w/bgqIkRUo2yLMaR84mMba5Q5tXK9xC4E5SmqXVhc2N9MzfX7R77rjn8aH9wRrZAfdI1nINt9/hqyhjIt6Ovz5RvjxTn+SqEAMgyUh2yZpCWhrjcr103as2yekAg1hhHO+9I2IdsNC3Mq8ZsQlAKEAIFCcSj/darx5/3WmL1wa2HT6q1dQgmAMgk4Vkmf9coCMPhWxq2sDai3omR4iJ/3yV32oPjfjwCHtZ1zTLXdL2UGzoJulHvTeJ/mRwOQrLlmk/rOyWR7w77nV6HUgBPXZZn8SrQTLHOrt0lndCdXAzINVkkPOdlw6YSL85oUouXNkzLklfhOhMMXDzD8dh++aK3t29uXbmxu6tY5mzw59n8klloMjNBUS7f3qk0tkVNE9XCb5Xcaqtn1hplBMFqNH6plNLlf1eFXtb9n1L51xNd3lT/aF//EGAA9B/iH5xEuF4AAAAASUVORK5CYII=",
        "states": [
          {
            "id": 3062,
            "name": "Vatican City"
          }
        ]
      },
      {
        "id": 161,
        "name": "Venezuela",
        "prefixNumber": "+58",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjFFMjIwQzE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODRDOUJGQTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MUUyMjBBMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MUUyMjBCMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+suiZXgAAATpJREFUeNpi/H5RnIE2gImBZmDUaPoZzcigsJdGRrMQ8hUjw/ufDO9/+VTov33x/cfPv/LKfBvaLzDwsjAIcjAw/AdCEl0t+IGBhZHh02+Gm+9rpzt8/vHnz+9/v379+/HrrxA/2++//2XEOCsT9jGoCjAIsDG85iPFaOF3DF9+yyrxOZuLs7Iyffz2Z9X0KwyinCBPPP8WmqktxMf648ffo+ff3LnxgeGXOCkBwsLE8OkXz/c/Ho5SmblH3j/5yqDEx/AP7HkV/tVzr3MIsM2f5XDl9GuGDz8ZuEgKEOYX5rZSif6KWVUn/v3/z8DDxvD/P7Imhm9/GX7+ndRuvnbv04M7f5PiambBd//57rMIMIuI//vwi4EZQxnrXwZe5kdsQm/+fWZgeEvvxMd4XkR7NKOPGo0bAAQYAF2fdeRLtEqSAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 3063,
            "name": "Amazonas"
          },
          {
            "id": 3064,
            "name": "Anzoategui"
          },
          {
            "id": 3065,
            "name": "Apure"
          },
          {
            "id": 3066,
            "name": "Aragua"
          },
          {
            "id": 3067,
            "name": "Barinas"
          },
          {
            "id": 3068,
            "name": "Bolivar"
          },
          {
            "id": 3069,
            "name": "Carabobo"
          },
          {
            "id": 3070,
            "name": "Cojedes"
          },
          {
            "id": 3071,
            "name": "Delta Amacuro"
          },
          {
            "id": 3072,
            "name": "Dependencias Federales"
          },
          {
            "id": 3073,
            "name": "Distrito Federal"
          },
          {
            "id": 3074,
            "name": "Falcon"
          },
          {
            "id": 3075,
            "name": "Guarico"
          },
          {
            "id": 3076,
            "name": "Lara"
          },
          {
            "id": 3077,
            "name": "Merida"
          },
          {
            "id": 3078,
            "name": "Miranda"
          },
          {
            "id": 3079,
            "name": "Monagas"
          },
          {
            "id": 3080,
            "name": "Nueva Esparta"
          },
          {
            "id": 3081,
            "name": "Portuguesa"
          },
          {
            "id": 3082,
            "name": "Sucre"
          },
          {
            "id": 3083,
            "name": "Tachira"
          },
          {
            "id": 3084,
            "name": "Trujillo"
          },
          {
            "id": 3085,
            "name": "Vargas"
          },
          {
            "id": 3086,
            "name": "Yaracuy"
          },
          {
            "id": 3087,
            "name": "Zulia"
          }
        ]
      },
      {
        "id": 162,
        "name": "Vietnam",
        "prefixNumber": "+84",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODRDOUJGRDE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODRDOUJGRTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4NEM5QkZCMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4NEM5QkZDMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MKjEOwAAAg1JREFUeNrMVTtrFVEQnvPae3fvPryPRLmInQn2WkhMIYggGEHs0gqC2FhraSE2grW9VgF/hZWPQmMqCZFAQhTxZu8jZ3fPjLPXRiSsm5iAU83Oznz7zTdzzop37Tk4HpNwbFYXWkjATKAVojYZXTPPTYSZRXbyHSkbdHSsBWRj2b1lZ5YtO/x4dNAlXUgu5+2rVgBB8S+C8BcLKHZLHOZYkGh2XDDnZIj+aTfa1Ebgr1c6phIDa7OmDKRPyaXcn3deH7m2s5TJHkJI7GggDvpnkRNki8geiDWK4ocIL9j+wzGMIVvXqoO4JZlp/97k5LL1zjhIcPtJkL4xzH3aXT3Wokmc/uVpsH47IgPeYianrWBWFngLOYS4cTfaeNxiTO7vIGNEkAE1Ytx65b+f76YvmqLLIRAK2BmueBzcfOmbCFWL9hW6ckOwVCtoF+lA735gj9QsqlPITrpm0m+6lThhgPBwy8drloq4k8/csBDT6K0ZvTYQY++ajXpFMdxX4dp7nRcyvpJ5F+3gub96Pfl4M/n+LDDn7Yklm7m/nJ0qaG5WAbUX851H4eqdhIGkorX7yfaDqL2QG4mUVx7hiku1hA5JJ5R+MiZwKiglwj2wIxWdy3EoioHgwR7meuIyHInJV+nxxJi/mwYb0NRu77NSAQkNFXLr6jGyCOV6wW8QVKr4Z/A//RUcwn4KMAD6MNV+pBmzeAAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 3088,
            "name": "An Giang"
          },
          {
            "id": 3089,
            "name": "Bac Giang"
          },
          {
            "id": 3090,
            "name": "Bac Kan"
          },
          {
            "id": 3091,
            "name": "Bac Lieu"
          },
          {
            "id": 3092,
            "name": "Bac Ninh"
          },
          {
            "id": 3093,
            "name": "Ba Ria-Vung Tau"
          },
          {
            "id": 3094,
            "name": "Ben Tre"
          },
          {
            "id": 3095,
            "name": "Binh Dinh"
          },
          {
            "id": 3096,
            "name": "Binh Duong"
          },
          {
            "id": 3097,
            "name": "Binh Phuoc"
          },
          {
            "id": 3098,
            "name": "Binh Thuan"
          },
          {
            "id": 3099,
            "name": "Ca Mau"
          },
          {
            "id": 3100,
            "name": "Cao Bang"
          },
          {
            "id": 3101,
            "name": "Dac Lak"
          },
          {
            "id": 3102,
            "name": "Dac Nong"
          },
          {
            "id": 3103,
            "name": "Dien Bien"
          },
          {
            "id": 3104,
            "name": "Dong Nai"
          },
          {
            "id": 3105,
            "name": "Dong Thap"
          },
          {
            "id": 3106,
            "name": "Gia Lai"
          },
          {
            "id": 3107,
            "name": "Ha Giang"
          },
          {
            "id": 3108,
            "name": "Hai Duong"
          },
          {
            "id": 3109,
            "name": "Ha Nam"
          },
          {
            "id": 3110,
            "name": "Ha Tay"
          },
          {
            "id": 3111,
            "name": "Ha Tinh"
          },
          {
            "id": 3112,
            "name": "Hau Giang"
          },
          {
            "id": 3113,
            "name": "Hoa Binh"
          },
          {
            "id": 3114,
            "name": "Hung Yen"
          },
          {
            "id": 3115,
            "name": "Khanh Hoa"
          },
          {
            "id": 3116,
            "name": "Kien Giang"
          },
          {
            "id": 3117,
            "name": "Kon Tum"
          },
          {
            "id": 3118,
            "name": "Lai Chau"
          },
          {
            "id": 3119,
            "name": "Lam Dong"
          },
          {
            "id": 3120,
            "name": "Lang Son"
          },
          {
            "id": 3121,
            "name": "Lao Cai"
          },
          {
            "id": 3122,
            "name": "Long An"
          },
          {
            "id": 3123,
            "name": "Nam Dinh"
          },
          {
            "id": 3124,
            "name": "Nghe An"
          },
          {
            "id": 3125,
            "name": "Ninh Binh"
          },
          {
            "id": 3126,
            "name": "Ninh Thuan"
          },
          {
            "id": 3127,
            "name": "Phu Tho"
          },
          {
            "id": 3128,
            "name": "Phu Yen"
          },
          {
            "id": 3129,
            "name": "Quang Binh"
          },
          {
            "id": 3130,
            "name": "Quang Nam"
          },
          {
            "id": 3131,
            "name": "Quang Ngai"
          },
          {
            "id": 3132,
            "name": "Quang Ninh"
          },
          {
            "id": 3133,
            "name": "Quang Tri"
          },
          {
            "id": 3134,
            "name": "Soc Trang"
          },
          {
            "id": 3135,
            "name": "Son La"
          },
          {
            "id": 3136,
            "name": "Tay Ninh"
          },
          {
            "id": 3137,
            "name": "Thai Binh"
          },
          {
            "id": 3138,
            "name": "Thai Nguyen"
          },
          {
            "id": 3139,
            "name": "Thanh Hoa"
          },
          {
            "id": 3140,
            "name": "Thua Thien-Hue"
          },
          {
            "id": 3141,
            "name": "Tien Giang"
          },
          {
            "id": 3142,
            "name": "Tra Vinh"
          },
          {
            "id": 3143,
            "name": "Tuyen Quang"
          },
          {
            "id": 3144,
            "name": "Vinh Long"
          },
          {
            "id": 3145,
            "name": "Vinh Phuc"
          },
          {
            "id": 3146,
            "name": "Yen Bai"
          },
          {
            "id": 3147,
            "name": "Can Tho"
          },
          {
            "id": 3148,
            "name": "Da Nang"
          },
          {
            "id": 3149,
            "name": "Hai Phong"
          },
          {
            "id": 3150,
            "name": "Hanoi"
          },
          {
            "id": 3151,
            "name": "Ho Chi Minh"
          }
        ]
      },
      {
        "id": 163,
        "name": "Yemen",
        "prefixNumber": "+967",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTkyRjREMzE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTkyRjRENDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1OTJGNEQxMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM1OTJGNEQyMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ACJHhgAAAE1JREFUeNpifK+t+59hAAATwwCBUYtHLaYZYPz///9HIM0HxPTKVoxA/IkFymBAouli+WjiohtgQUpU9Exc/xnpaOFoyTVq8TC3GCDAAFQ1DF5mtiLSAAAAAElFTkSuQmCC",
        "states": [
          {
            "id": 3152,
            "name": "Abyan"
          },
          {
            "id": 3153,
            "name": "'Adan"
          },
          {
            "id": 3154,
            "name": "Ad Dali'"
          },
          {
            "id": 3155,
            "name": "Al Bayda'"
          },
          {
            "id": 3156,
            "name": "Al Hudaydah"
          },
          {
            "id": 3157,
            "name": "Al Jawf"
          },
          {
            "id": 3158,
            "name": "Al Mahrah"
          },
          {
            "id": 3159,
            "name": "Al Mahwit"
          },
          {
            "id": 3160,
            "name": "'Amran"
          },
          {
            "id": 3161,
            "name": "Dhamar"
          },
          {
            "id": 3162,
            "name": "Hadramawt"
          },
          {
            "id": 3163,
            "name": "Hajjah"
          },
          {
            "id": 3164,
            "name": "Ibb"
          },
          {
            "id": 3165,
            "name": "Lahij"
          },
          {
            "id": 3166,
            "name": "Ma'rib"
          },
          {
            "id": 3167,
            "name": "Sa'dah"
          },
          {
            "id": 3168,
            "name": "San'a'"
          },
          {
            "id": 3169,
            "name": "Shabwah"
          },
          {
            "id": 3170,
            "name": "Ta'izz"
          }
        ]
      },
      {
        "id": 164,
        "name": "Zambia",
        "prefixNumber": "+260",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTY2NjI2QzE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTY2NjI2RDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNjY2MjZBMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxNjY2MjZCMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b9h8+AAAAXJJREFUeNrslLtKA0EUhr+ZzW7MbYkmMQoqVhZWilrb+Q4i2PgGPoCVlbVoY20r+AQigoKFlWDnhaAYMCYm0d3s7oyzwScYsBEPpzicA9/8/GdmxOQeFiE0sUMgySa4GgWRxFOI4TR00iKDVSQOhZCy4j5H5EGMH9F3CYa8fEAttkV3XGotDhrgc1CimmehzX6JCcFSl/V3jnK2aH/AY4U9wc4rh02KRaI6Kw3q79QLXPmc1RB2Xkvjr+TFZWTA8gfzfTZiyh+cCk5nufYpCFvVWpAIKgmhx8UUlyHVWx7GOZ7B7LQUpSu1RJsbEjnp0kyRj6gKTuZo5Sgq4oBEEtipNpKfS2yfZzdust1R/Rqrrebnkznkjc1Vdte4b/FliTbpMd/MLN5lGVNvStH5TLsw2WJaMx3RE0gbN0gNbeeMqapdVs++0uJnFBqeQ0emKfm1+Ef/o/8i2v57Gjj0PN139ZfUYgSRpP04Q2/44vvwLcAAr1qGyCgX8xUAAAAASUVORK5CYII=",
        "states": [
          {
            "id": 3171,
            "name": "Central"
          },
          {
            "id": 3172,
            "name": "Copperbelt"
          },
          {
            "id": 3173,
            "name": "Eastern"
          },
          {
            "id": 3174,
            "name": "Luapula"
          },
          {
            "id": 3175,
            "name": "Lusaka"
          },
          {
            "id": 3176,
            "name": "Northern"
          },
          {
            "id": 3177,
            "name": "North-Western"
          },
          {
            "id": 3178,
            "name": "Southern"
          },
          {
            "id": 3179,
            "name": "Western"
          }
        ]
      },
      {
        "id": 165,
        "name": "Zimbabwe",
        "prefixNumber": "+263",
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTY2NjI3MDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTY2NjI3MTE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNjY2MjZFMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxNjY2MjZGMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WOc8GAAAAtBJREFUeNq0lmtIk1EYx/+7b7pJ2LxfKv1QqZVBEERfEsKCyi5ghqldmEk1urAuUBGYSRCChMrQkqAsM8IuokVRUeAFBmVhsVa6OWeba7rNy9bedzudN9KK+ra9f3jOC88D7++c55zzPEfQ2NBkO3xLo5LnAzmZcvjGAAjBuwSEyvCkH2U1xfiwcAC5eSK4RqUIBrkov2Av/aoCowQ7daXo9N1ESRngD8gwNUEjIp7Bs47a6mtwWzU4UU4QvYg6LPzA/wFzau924JV+PTQF75G1gzqmqUU49X+Bpz1vIXZFQ2a2YiAnD/pLB5Dtb0TFMhqMkWEyEIJYEGGwj7EjOJiLQAeBVTeGFY6vYOMTcf7cdbir9uMIQkifp4aZJRAREjlwiA6M8SRC1ssY0gJy0UZk9DykETHajGZ0bivA9o/vsCVVCchk4YOD7nHvtzM6lffuY4jzY5BS6YJEIoK92gnv/QVQSGVIqzwKY3E59BoN/M1XkaoUQiSXh0cmLOud6nxAPsVnEstmEGYwmcz0JRH/SAKx6UCMq5PITPdrMiv90+cEsXFcrsMzLtXcD1lqjrYUMv1SSkx31GS4PZ74ekEmnGdJiPxWi+ENgTohbLB4buXUFEvT4DTYwEg89PqEYDUBCUnZP2/RMLX6Q1qMNdThVBS92rGKsDI9B2bNk2BeuKFcIoGSxNEt8CDoFiImvQhdQ3a0FG7FJkMfipIpNUoRuVPNWkfhHzFBvmoxnQ3tEhIp4BHjYs0jWC5ocRAuZCnn4wvLFTLCT+XiZB4H6uprkWg5Bl0GdagV8DDBiFXP/4I7uj7jWWspCtf1YE0JdQS4veC5VjdfuQdL/y6crmDoYeOW/qs/C/gC03HPcS1u2+uwdx/XkaTwOgV/HD8eHgKm3iGUVO1GX2w3cjYAEw4FmAC/LxFB6402W0VTmcq/1oeVy2X4bheCCAn41g8BBgCi8X7r2R04cwAAAABJRU5ErkJggg==",
        "states": [
          {
            "id": 3180,
            "name": "Bulawayo"
          },
          {
            "id": 3181,
            "name": "Harare"
          },
          {
            "id": 3182,
            "name": "Manicaland"
          },
          {
            "id": 3183,
            "name": "Mashonaland Central"
          },
          {
            "id": 3184,
            "name": "Mashonaland East"
          },
          {
            "id": 3185,
            "name": "Mashonaland West"
          },
          {
            "id": 3186,
            "name": "Masvingo"
          },
          {
            "id": 3187,
            "name": "Matabeleland North"
          },
          {
            "id": 3188,
            "name": "Matabeleland South"
          },
          {
            "id": 3189,
            "name": "Midlands"
          }
        ]
      }
    ]
  };

  getCountries(): CountryInterface {
    return this.countries;
  }

  getCity(countryId): Observable<CityInterface> {
    const url = `BaseData/country/${countryId}/city`;
    return this.as.get(url, true);
  }

  setUserInfo(userInfo: UserInfoInterface) {
    this._cacheObject.currentUserInfo = userInfo;
    localStorage.setItem('cache-object', JSON.stringify(this._cacheObject));
  }

  getCurrentUserInfo(): UserInfoInterface {
    return this._cacheObject.currentUserInfo;
  }

  checkUnique(payload): Observable<any> {
    const url = `User/isDuplicateValue?key=${payload.key}&value=${payload.value}`;
    return this.as.get(url, false);
  }

  fillCacheData() {
    const cacheJson = localStorage.getItem('cache-object');
    if (cacheJson) {
      this._cacheObject = JSON.parse(cacheJson) as CacheObject;
    } else {
      this._cacheObject = {
        currentUserInfo: null
      };
    }
  }
}
