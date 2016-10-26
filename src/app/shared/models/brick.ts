export class Brick {
  $key?: string; // ? is optional
  noteType: string = 'forever';
  loveCount: number = 0;
  isLoved: boolean = false ;
  shareCount: number = 0;
  isShared: boolean = false ;
  from: string = 'Không tên';
  to: string = 'Không tên';
  id: string;
  author: string = '';
  content: string;
}
