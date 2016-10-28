import { Injectable } from '@angular/core';
import { Brick } from '../models/brick'

const bricksPromise: Promise<Brick[]> = Promise.resolve (
  [
     {
       noteType: 'forever',
       loveCount: 1171,
       isLoved: false,
       shareCount: 182,
       isShared: false,
       from:'Hiệp Xanh',
       to: 'Cẩm Thương',
       id: "1508",
       author: 'hiepxanh',
       content: `1
        Tôi yêu em từ những cái nhìn đầu tiên.
        Tôi không thể nào không yêu em được.
        Tôi yêu em từ những cái nhìn đầu tiên.
        Tôi không thể nào không yêu em được. `

  },
     {
       noteType:'love',
       loveCount: 1171,
       isLoved: false,
       shareCount: 181,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1508",
       author: 'hiepxanh',
       content: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis excepturi blanditiis consectetur nihil cumque ad incidunt, amet harum, neque maxime perspiciatis, id iste recusandae omnis quo mollitia. Unde animi, amet deserunt impedit praesentium quos similique.'
   },
     {
       noteType:'thank',
       loveCount: 11722,
       isLoved: false,
       shareCount: 180,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1508",
       author: 'hiepxanh',
       content: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
   },
     {
       noteType:'sorry',
       loveCount: 11715,
       isLoved: false,
       shareCount: 182,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1508",
       author: 'hiepxanh',
       content: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, fuga, ab. Nesciunt, consequuntur eveniet. Ex harum sapiente illum fugit a.'
   },
     {
       noteType:'sorry',
       loveCount: 11727,
       isLoved: false,
       shareCount: 188,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "5",
       author: 'hiepxanh',
       content: '5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corrupti impedit dicta quibusdam eaque voluptates aut autem facilis quos explicabo?'
   },
     {
       noteType:'thank',
       loveCount: 1175,
       isLoved: false,
       shareCount: 187,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1",
       author: 'hiepxanh',
       content: '6 Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
   },
     {
       noteType:'love',
       loveCount: 11724,
       isLoved: false,
       shareCount: 186,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1508",
       author: 'hiepxanh',
       content: '7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis excepturi blanditiis consectetur nihil cumque ad incidunt, amet harum, neque maxime perspiciatis, id iste recusandae omnis quo mollitia. Unde animi, amet deserunt impedit praesentium quos similique.'
   },
     {
       noteType:'forever',
       loveCount: 1173,
       isLoved: false,
       shareCount: 185,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "18",
       author: 'hiepxanh',
       content: '8 Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
   },
     {
       noteType:'love',
       loveCount: 1170,
       isLoved: false,
       shareCount: 184,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1508",
       author: 'hiepxanh',
       content: '9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, fuga, ab. Nesciunt, consequuntur eveniet. Ex harum sapiente illum fugit a.'
   },
     {
       noteType:'thank',
       loveCount: 1176,
       isLoved: false,
       shareCount: 183,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "158",
       author: 'hiepxanh',
       content: '10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corrupti impedit dicta quibusdam eaque voluptates aut autem facilis quos explicabo?'
   },
     {
       noteType:'sorry',
       loveCount: 1,
       isLoved: false,
       shareCount: 182,
       isShared: false,
       from:'Không tên',
       to: 'Không tên',
       id: "1508",
       author: 'hiepxanh',
       content: '11 Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
   },
   ]
 )
@Injectable()
export class BrickService {
  bricks: any;
  getBricks(category:string = null) {
    if (category != null ) {
      return bricksPromise.then(bricks => bricks.filter( brick => brick.noteType === category));
    } else {
      return bricksPromise;
    }
  }

  searchBricks(term) {
    return bricksPromise.then( bricks => bricks.filter( brick => {
      // search with  id
      // console.log(brick.id.toString());
      // return brick.id.toString() == term;
      // search with  content or ID or author name or address
      return brick.content.toLowerCase().includes(term)  ||
                 brick.id.toString().toLowerCase() == term ||
                 brick.author.toLowerCase().includes(term) ||
                 brick['from'].toLowerCase().includes(term) ||
                 brick['to'].toLowerCase().includes(term) ;



      // console.log(arr.includes(true));

      // // console.log(term)
      // let keys = Object.keys(brick);
        // console.log(keys);
      // return  Object.keys(brick).map( key => {
      //   console.log(brick[key]);
      //   console.log(brick[key].toString().includes(term));
      //   return brick[key].toString().includes(term);
      // })

    })
  );
  }

}
