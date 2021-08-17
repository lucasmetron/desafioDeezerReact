import React from 'react'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from '@material-ui/core/styles';
import {
    ThumbNail,
    Container,
    TitleList,
    List,
    Item,
    Erro,
    Listcontainer,
} from './styled'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Load from '../Loading/Load';
import { addFavoriteList, removeFavoriteList } from '../../store/actions/favoriteListActions'
import { selectedMusic } from '../../store/actions/selectedMusic'

import Message from '../Message/Message';



const useStyle = makeStyles(() => ({
    play: {
        color: '#07D365',
        fontSize: 40,
        marginRight: 10
    },
    pause: {
        color: '#07D365',
        fontSize: 40,
        marginRight: 10
    },
    favorite: {
        color: '#FE1B2D',
        fontSize: 40,
        marginRight: 10
    },
    link: {
        color: '#07D365',
        fontSize: 40,
    }

}))


const objTeste = [
    {
        "id": 1245992732,
        "readable": true,
        "title": "Bonnie & Clyde",
        "title_short": "Bonnie & Clyde",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1245992732",
        "duration": 209,
        "rank": 702751,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-e.deezer.com\/stream\/c-e93913d1c27507a3a89c730224315d4d-4.mp3",
        "md5_image": "01b49301e24da379eb66ecbddfa85f1a",
        "artist": {
            "id": 10695573,
            "name": "Franglish",
            "link": "http:\/\/www.deezer.com\/artist\/10695573",
            "picture": "http:\/\/api.deezer.com\/artist\/10695573\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/10695573\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 208071762,
            "title": "Bonnie & Clyde",
            "cover": "http:\/\/api.deezer.com\/album\/208071762\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/01b49301e24da379eb66ecbddfa85f1a\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/01b49301e24da379eb66ecbddfa85f1a\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/01b49301e24da379eb66ecbddfa85f1a\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/01b49301e24da379eb66ecbddfa85f1a\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "01b49301e24da379eb66ecbddfa85f1a",
            "tracklist": "http:\/\/api.deezer.com\/album\/208071762\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1285255082,
        "readable": true,
        "title": "La Seleçao",
        "title_short": "La Seleçao",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1285255082",
        "duration": 197,
        "rank": 997297,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-f.deezer.com\/stream\/c-fc15994075b890ab3251bbde9edb3008-4.mp3",
        "md5_image": "dba868b199eaf09357a4d02c8bdf641f",
        "artist": {
            "id": 259729,
            "name": "Alonzo",
            "link": "http:\/\/www.deezer.com\/artist\/259729",
            "picture": "http:\/\/api.deezer.com\/artist\/259729\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/2fd32e1826adc0f411e38ab212a65d96\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/2fd32e1826adc0f411e38ab212a65d96\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/2fd32e1826adc0f411e38ab212a65d96\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/2fd32e1826adc0f411e38ab212a65d96\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/259729\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 217270492,
            "title": "Capo Dei Capi Vol. II & III",
            "cover": "http:\/\/api.deezer.com\/album\/217270492\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dba868b199eaf09357a4d02c8bdf641f\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dba868b199eaf09357a4d02c8bdf641f\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dba868b199eaf09357a4d02c8bdf641f\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dba868b199eaf09357a4d02c8bdf641f\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "dba868b199eaf09357a4d02c8bdf641f",
            "tracklist": "http:\/\/api.deezer.com\/album\/217270492\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1046369812,
        "readable": true,
        "title": "Lemonade",
        "title_short": "Lemonade",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1046369812",
        "duration": 195,
        "rank": 960668,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-a.deezer.com\/stream\/c-a869e85201256b77b9de85a2526e5f0f-4.mp3",
        "md5_image": "dbe8d91df31132add4079bd19b4ec24e",
        "artist": {
            "id": 15104399,
            "name": "Internet money",
            "link": "http:\/\/www.deezer.com\/artist\/15104399",
            "picture": "http:\/\/api.deezer.com\/artist\/15104399\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ac31c5e8323891887567be6338811938\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ac31c5e8323891887567be6338811938\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ac31c5e8323891887567be6338811938\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ac31c5e8323891887567be6338811938\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/15104399\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 165989312,
            "title": "Lemonade",
            "cover": "http:\/\/api.deezer.com\/album\/165989312\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dbe8d91df31132add4079bd19b4ec24e\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dbe8d91df31132add4079bd19b4ec24e\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dbe8d91df31132add4079bd19b4ec24e\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/dbe8d91df31132add4079bd19b4ec24e\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "dbe8d91df31132add4079bd19b4ec24e",
            "tracklist": "http:\/\/api.deezer.com\/album\/165989312\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1370560412,
        "readable": true,
        "title": "Sapapaya",
        "title_short": "Sapapaya",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1370560412",
        "duration": 215,
        "rank": 963051,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-c.deezer.com\/stream\/c-c047678200a63f81276e1f936c64fef9-4.mp3",
        "md5_image": "e9456c051067fcaabc1cada929ce482f",
        "artist": {
            "id": 13501,
            "name": "L'Algérino",
            "link": "http:\/\/www.deezer.com\/artist\/13501",
            "picture": "http:\/\/api.deezer.com\/artist\/13501\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/27b15de14ea857b2dda9db7dadd0d41e\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/27b15de14ea857b2dda9db7dadd0d41e\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/27b15de14ea857b2dda9db7dadd0d41e\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/27b15de14ea857b2dda9db7dadd0d41e\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/13501\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 229688212,
            "title": "Sapapaya",
            "cover": "http:\/\/api.deezer.com\/album\/229688212\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e9456c051067fcaabc1cada929ce482f\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e9456c051067fcaabc1cada929ce482f\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e9456c051067fcaabc1cada929ce482f\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e9456c051067fcaabc1cada929ce482f\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "e9456c051067fcaabc1cada929ce482f",
            "tracklist": "http:\/\/api.deezer.com\/album\/229688212\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1383879852,
        "readable": true,
        "title": "Essaie encore",
        "title_short": "Essaie encore",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1383879852",
        "duration": 219,
        "rank": 999162,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-b.deezer.com\/stream\/c-b8418f77be21d46de4873a005fca775a-4.mp3",
        "md5_image": "51843476b54b6e4d74b38a698e44dda6",
        "artist": {
            "id": 49569672,
            "name": "Imen Es",
            "link": "http:\/\/www.deezer.com\/artist\/49569672",
            "picture": "http:\/\/api.deezer.com\/artist\/49569672\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0d2fd468b699cb9b2fcc038e67c15847\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0d2fd468b699cb9b2fcc038e67c15847\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0d2fd468b699cb9b2fcc038e67c15847\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0d2fd468b699cb9b2fcc038e67c15847\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/49569672\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 232875402,
            "title": "Essaie encore",
            "cover": "http:\/\/api.deezer.com\/album\/232875402\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/51843476b54b6e4d74b38a698e44dda6\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/51843476b54b6e4d74b38a698e44dda6\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/51843476b54b6e4d74b38a698e44dda6\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/51843476b54b6e4d74b38a698e44dda6\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "51843476b54b6e4d74b38a698e44dda6",
            "tracklist": "http:\/\/api.deezer.com\/album\/232875402\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1144321542,
        "readable": true,
        "title": "Evidemment",
        "title_short": "Evidemment",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1144321542",
        "duration": 237,
        "rank": 487798,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 2,
        "preview": "http:\/\/cdn-preview-b.deezer.com\/stream\/c-b4f434d812ba678e544055a1e4351932-4.mp3",
        "md5_image": "d4cc9044018a8d8f5f44cb66552ffe43",
        "artist": {
            "id": 5947658,
            "name": "Kendji Girac",
            "link": "http:\/\/www.deezer.com\/artist\/5947658",
            "picture": "http:\/\/api.deezer.com\/artist\/5947658\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/93a792a0cd612148b7b5cf0b825be2ed\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/93a792a0cd612148b7b5cf0b825be2ed\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/93a792a0cd612148b7b5cf0b825be2ed\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/93a792a0cd612148b7b5cf0b825be2ed\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/5947658\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 186756262,
            "title": "Mi vida : Chansons d'amour",
            "cover": "http:\/\/api.deezer.com\/album\/186756262\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d4cc9044018a8d8f5f44cb66552ffe43\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d4cc9044018a8d8f5f44cb66552ffe43\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d4cc9044018a8d8f5f44cb66552ffe43\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d4cc9044018a8d8f5f44cb66552ffe43\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "d4cc9044018a8d8f5f44cb66552ffe43",
            "tracklist": "http:\/\/api.deezer.com\/album\/186756262\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1137703312,
        "readable": true,
        "title": "Plus Jamais (feat. Stormzy)",
        "title_short": "Plus Jamais (feat. Stormzy)",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1137703312",
        "duration": 175,
        "rank": 928780,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 6,
        "explicit_content_cover": 2,
        "preview": "http:\/\/cdn-preview-7.deezer.com\/stream\/c-7f6fb7ab12be67032aaf15fd73428aa1-7.mp3",
        "md5_image": "d3641092e29650cfa26cc53814823a70",
        "artist": {
            "id": 8909272,
            "name": "Aya Nakamura",
            "link": "http:\/\/www.deezer.com\/artist\/8909272",
            "picture": "http:\/\/api.deezer.com\/artist\/8909272\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/188fbcf0bf72faf5b1c8b1a786db0aa7\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/188fbcf0bf72faf5b1c8b1a786db0aa7\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/188fbcf0bf72faf5b1c8b1a786db0aa7\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/188fbcf0bf72faf5b1c8b1a786db0aa7\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/8909272\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 185386862,
            "title": "AYA",
            "cover": "http:\/\/api.deezer.com\/album\/185386862\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d3641092e29650cfa26cc53814823a70\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d3641092e29650cfa26cc53814823a70\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d3641092e29650cfa26cc53814823a70\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/d3641092e29650cfa26cc53814823a70\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "d3641092e29650cfa26cc53814823a70",
            "tracklist": "http:\/\/api.deezer.com\/album\/185386862\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 5411298,
        "readable": true,
        "title": "Alors on danse",
        "title_short": "Alors on danse",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/5411298",
        "duration": 207,
        "rank": 716049,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-6.deezer.com\/stream\/c-623a2a16bdc3be1a15e17872e4ed0630-10.mp3",
        "md5_image": "9bcd9e77f86bf813672f9e828dffe107",
        "artist": {
            "id": 310260,
            "name": "Stromae",
            "link": "http:\/\/www.deezer.com\/artist\/310260",
            "picture": "http:\/\/api.deezer.com\/artist\/310260\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/657264c62071008afa7535e7f2390ae2\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/657264c62071008afa7535e7f2390ae2\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/657264c62071008afa7535e7f2390ae2\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/657264c62071008afa7535e7f2390ae2\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/310260\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 495578,
            "title": "Alors On Danse",
            "cover": "http:\/\/api.deezer.com\/album\/495578\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/9bcd9e77f86bf813672f9e828dffe107\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/9bcd9e77f86bf813672f9e828dffe107\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/9bcd9e77f86bf813672f9e828dffe107\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/9bcd9e77f86bf813672f9e828dffe107\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "9bcd9e77f86bf813672f9e828dffe107",
            "tracklist": "http:\/\/api.deezer.com\/album\/495578\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1364016952,
        "readable": true,
        "title": "Run",
        "title_short": "Run",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1364016952",
        "duration": 169,
        "rank": 966729,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-2.deezer.com\/stream\/c-25e63e8c4874004695fde00ea8f86afb-4.mp3",
        "md5_image": "3a8e28a5dbf341cc35e63533b9c0d381",
        "artist": {
            "id": 74398,
            "name": "OneRepublic",
            "link": "http:\/\/www.deezer.com\/artist\/74398",
            "picture": "http:\/\/api.deezer.com\/artist\/74398\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/cbd369aed7d390206dff604421fda3f0\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/cbd369aed7d390206dff604421fda3f0\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/cbd369aed7d390206dff604421fda3f0\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/cbd369aed7d390206dff604421fda3f0\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/74398\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 227970052,
            "title": "Run",
            "cover": "http:\/\/api.deezer.com\/album\/227970052\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/3a8e28a5dbf341cc35e63533b9c0d381\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/3a8e28a5dbf341cc35e63533b9c0d381\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/3a8e28a5dbf341cc35e63533b9c0d381\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/3a8e28a5dbf341cc35e63533b9c0d381\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "3a8e28a5dbf341cc35e63533b9c0d381",
            "tracklist": "http:\/\/api.deezer.com\/album\/227970052\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1436010972,
        "readable": true,
        "title": "Demeanor",
        "title_short": "Demeanor",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1436010972",
        "duration": 184,
        "rank": 510557,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 3,
        "explicit_content_cover": 3,
        "preview": "http:\/\/cdn-preview-1.deezer.com\/stream\/c-1925602c18b558dac2c4a746332e31d2-4.mp3",
        "md5_image": "b1fec0ba8834a3f7c289fb2021e3c944",
        "artist": {
            "id": 58447102,
            "name": "Pop Smoke",
            "link": "http:\/\/www.deezer.com\/artist\/58447102",
            "picture": "http:\/\/api.deezer.com\/artist\/58447102\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/32f4ef8b4a9ab106fbe45a5da6a699f7\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/32f4ef8b4a9ab106fbe45a5da6a699f7\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/32f4ef8b4a9ab106fbe45a5da6a699f7\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/32f4ef8b4a9ab106fbe45a5da6a699f7\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/58447102\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 244891912,
            "title": "Faith",
            "cover": "http:\/\/api.deezer.com\/album\/244891912\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/b1fec0ba8834a3f7c289fb2021e3c944\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/b1fec0ba8834a3f7c289fb2021e3c944\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/b1fec0ba8834a3f7c289fb2021e3c944\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/b1fec0ba8834a3f7c289fb2021e3c944\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b1fec0ba8834a3f7c289fb2021e3c944",
            "tracklist": "http:\/\/api.deezer.com\/album\/244891912\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1389360722,
        "readable": true,
        "title": "Mon soleil",
        "title_short": "Mon soleil",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1389360722",
        "duration": 190,
        "rank": 793299,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-e.deezer.com\/stream\/c-ebff7d206f8e710254e3b75be71a6b2d-4.mp3",
        "md5_image": "bdda644ec4fca3d3c10425b7091fa74d",
        "artist": {
            "id": 4803754,
            "name": "Dadju",
            "link": "http:\/\/www.deezer.com\/artist\/4803754",
            "picture": "http:\/\/api.deezer.com\/artist\/4803754\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/61a87825fecc214738541d721dcfa475\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/61a87825fecc214738541d721dcfa475\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/61a87825fecc214738541d721dcfa475\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/61a87825fecc214738541d721dcfa475\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/4803754\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 234054762,
            "title": "Poison ou Antidote (Miel Book Edition)",
            "cover": "http:\/\/api.deezer.com\/album\/234054762\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/bdda644ec4fca3d3c10425b7091fa74d\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/bdda644ec4fca3d3c10425b7091fa74d\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/bdda644ec4fca3d3c10425b7091fa74d\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/bdda644ec4fca3d3c10425b7091fa74d\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "bdda644ec4fca3d3c10425b7091fa74d",
            "tracklist": "http:\/\/api.deezer.com\/album\/234054762\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1283546482,
        "readable": true,
        "title": "EL MAKINON",
        "title_short": "EL MAKINON",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1283546482",
        "duration": 209,
        "rank": 961604,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-9.deezer.com\/stream\/c-9abb74e58a055f1c0eb2780eff2a3a37-4.mp3",
        "md5_image": "a452975ef997cdd4837888e8eb5a3125",
        "artist": {
            "id": 5297021,
            "name": "KAROL G",
            "link": "http:\/\/www.deezer.com\/artist\/5297021",
            "picture": "http:\/\/api.deezer.com\/artist\/5297021\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/201bff67c7fbd8be01d813fedb4042fe\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/201bff67c7fbd8be01d813fedb4042fe\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/201bff67c7fbd8be01d813fedb4042fe\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/201bff67c7fbd8be01d813fedb4042fe\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/5297021\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 216835762,
            "title": "KG0516",
            "cover": "http:\/\/api.deezer.com\/album\/216835762\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a452975ef997cdd4837888e8eb5a3125\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a452975ef997cdd4837888e8eb5a3125\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a452975ef997cdd4837888e8eb5a3125\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a452975ef997cdd4837888e8eb5a3125\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "a452975ef997cdd4837888e8eb5a3125",
            "tracklist": "http:\/\/api.deezer.com\/album\/216835762\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1457107762,
        "readable": true,
        "title": "Take My Breath",
        "title_short": "Take My Breath",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1457107762",
        "duration": 220,
        "rank": 995735,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-d.deezer.com\/stream\/c-d7057d22f5bae5e595f1fdf7b6494d63-4.mp3",
        "md5_image": "198af52fb6801a5881180232cb649f61",
        "artist": {
            "id": 4050205,
            "name": "The Weeknd",
            "link": "http:\/\/www.deezer.com\/artist\/4050205",
            "picture": "http:\/\/api.deezer.com\/artist\/4050205\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/bd3f01a27e692074ed40bf8755b06afe\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/bd3f01a27e692074ed40bf8755b06afe\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/bd3f01a27e692074ed40bf8755b06afe\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/bd3f01a27e692074ed40bf8755b06afe\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/4050205\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 249950322,
            "title": "Take My Breath",
            "cover": "http:\/\/api.deezer.com\/album\/249950322\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/198af52fb6801a5881180232cb649f61\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/198af52fb6801a5881180232cb649f61\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/198af52fb6801a5881180232cb649f61\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/198af52fb6801a5881180232cb649f61\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "198af52fb6801a5881180232cb649f61",
            "tracklist": "http:\/\/api.deezer.com\/album\/249950322\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1140484252,
        "readable": true,
        "title": "Therefore I Am",
        "title_short": "Therefore I Am",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1140484252",
        "duration": 174,
        "rank": 905983,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-e.deezer.com\/stream\/c-e28ebfad5a68bd5ac55c184f1037286e-4.mp3",
        "md5_image": "7eda1db4ecbc9cd5edb3c02a80d0fb3c",
        "artist": {
            "id": 9635624,
            "name": "Billie Eilish",
            "link": "http:\/\/www.deezer.com\/artist\/9635624",
            "picture": "http:\/\/api.deezer.com\/artist\/9635624\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/8b6e535e08ad7c5cb312102a5ede6c1e\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/8b6e535e08ad7c5cb312102a5ede6c1e\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/8b6e535e08ad7c5cb312102a5ede6c1e\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/8b6e535e08ad7c5cb312102a5ede6c1e\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/9635624\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 185980162,
            "title": "Therefore I Am",
            "cover": "http:\/\/api.deezer.com\/album\/185980162\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7eda1db4ecbc9cd5edb3c02a80d0fb3c\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7eda1db4ecbc9cd5edb3c02a80d0fb3c\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7eda1db4ecbc9cd5edb3c02a80d0fb3c\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7eda1db4ecbc9cd5edb3c02a80d0fb3c\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "7eda1db4ecbc9cd5edb3c02a80d0fb3c",
            "tracklist": "http:\/\/api.deezer.com\/album\/185980162\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1121925562,
        "readable": true,
        "title": "1,2,3",
        "title_short": "1,2,3",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1121925562",
        "duration": 225,
        "rank": 995940,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-0.deezer.com\/stream\/c-0b46931b0727b610fb811f51b76d0b34-4.mp3",
        "md5_image": "a968a41a4e32b7aa76ce7746bb38b6d7",
        "artist": {
            "id": 1765,
            "name": "Amel Bent",
            "link": "http:\/\/www.deezer.com\/artist\/1765",
            "picture": "http:\/\/api.deezer.com\/artist\/1765\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0e17f80431d6cd06bfa2655e1500c41a\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0e17f80431d6cd06bfa2655e1500c41a\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0e17f80431d6cd06bfa2655e1500c41a\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/0e17f80431d6cd06bfa2655e1500c41a\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/1765\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 182279032,
            "title": "1,2,3",
            "cover": "http:\/\/api.deezer.com\/album\/182279032\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a968a41a4e32b7aa76ce7746bb38b6d7\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a968a41a4e32b7aa76ce7746bb38b6d7\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a968a41a4e32b7aa76ce7746bb38b6d7\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a968a41a4e32b7aa76ce7746bb38b6d7\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "a968a41a4e32b7aa76ce7746bb38b6d7",
            "tracklist": "http:\/\/api.deezer.com\/album\/182279032\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1304559992,
        "readable": true,
        "title": "Le reste",
        "title_short": "Le reste",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1304559992",
        "duration": 218,
        "rank": 958215,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-3.deezer.com\/stream\/c-364fa6d09754dc1b5403f7084eb6d0fb-4.mp3",
        "md5_image": "693b2d58b0ddc096ced549ff0047c5de",
        "artist": {
            "id": 4889156,
            "name": "Clara Luciani",
            "link": "http:\/\/www.deezer.com\/artist\/4889156",
            "picture": "http:\/\/api.deezer.com\/artist\/4889156\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ccc832c281c408a09ead0e0a2eae7451\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ccc832c281c408a09ead0e0a2eae7451\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ccc832c281c408a09ead0e0a2eae7451\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/ccc832c281c408a09ead0e0a2eae7451\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/4889156\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 219674942,
            "title": "Le reste",
            "cover": "http:\/\/api.deezer.com\/album\/219674942\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/693b2d58b0ddc096ced549ff0047c5de\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/693b2d58b0ddc096ced549ff0047c5de\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/693b2d58b0ddc096ced549ff0047c5de\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/693b2d58b0ddc096ced549ff0047c5de\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "693b2d58b0ddc096ced549ff0047c5de",
            "tracklist": "http:\/\/api.deezer.com\/album\/219674942\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1252158952,
        "readable": true,
        "title": "Le temps",
        "title_short": "Le temps",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1252158952",
        "duration": 197,
        "rank": 793049,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 2,
        "preview": "http:\/\/cdn-preview-f.deezer.com\/stream\/c-f6101677a4f6eff5ae55b2a8fee6d432-3.mp3",
        "md5_image": "521f97b86d42229a55e890d2e81183ee",
        "artist": {
            "id": 12526056,
            "name": "Tayc",
            "link": "http:\/\/www.deezer.com\/artist\/12526056",
            "picture": "http:\/\/api.deezer.com\/artist\/12526056\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a4cce0cd41ef227b39971ec642d4a458\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a4cce0cd41ef227b39971ec642d4a458\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a4cce0cd41ef227b39971ec642d4a458\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a4cce0cd41ef227b39971ec642d4a458\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/12526056\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 209517102,
            "title": "Fleur froide (Donum Novae)",
            "cover": "http:\/\/api.deezer.com\/album\/209517102\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/521f97b86d42229a55e890d2e81183ee\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/521f97b86d42229a55e890d2e81183ee\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/521f97b86d42229a55e890d2e81183ee\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/521f97b86d42229a55e890d2e81183ee\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "521f97b86d42229a55e890d2e81183ee",
            "tracklist": "http:\/\/api.deezer.com\/album\/209517102\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1424420472,
        "readable": true,
        "title": "Sans moi",
        "title_short": "Sans moi",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1424420472",
        "duration": 159,
        "rank": 983045,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-2.deezer.com\/stream\/c-2b337ab3864bfc0223df2e8ebaa496fc-4.mp3",
        "md5_image": "61de71cfacf84b154de8d10cd1d7ecfc",
        "artist": {
            "id": 10695573,
            "name": "Franglish",
            "link": "http:\/\/www.deezer.com\/artist\/10695573",
            "picture": "http:\/\/api.deezer.com\/artist\/10695573\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/55c73fbd2490b0e78fc4e429a2b1c1de\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/10695573\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 242135912,
            "title": "Vibe",
            "cover": "http:\/\/api.deezer.com\/album\/242135912\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/61de71cfacf84b154de8d10cd1d7ecfc\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/61de71cfacf84b154de8d10cd1d7ecfc\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/61de71cfacf84b154de8d10cd1d7ecfc\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/61de71cfacf84b154de8d10cd1d7ecfc\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "61de71cfacf84b154de8d10cd1d7ecfc",
            "tracklist": "http:\/\/api.deezer.com\/album\/242135912\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 949342392,
        "readable": true,
        "title": "Lovefool",
        "title_short": "Lovefool",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/949342392",
        "duration": 190,
        "rank": 929551,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-b.deezer.com\/stream\/c-bd23b2e4b9426fbc934b49f3c58b8789-7.mp3",
        "md5_image": "370b1eb9ea4c7c447ece434c57ae0af1",
        "artist": {
            "id": 10673381,
            "name": "twocolors",
            "link": "http:\/\/www.deezer.com\/artist\/10673381",
            "picture": "http:\/\/api.deezer.com\/artist\/10673381\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/c9f974643a7dc9dc09ee9f3e79a1733d\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/c9f974643a7dc9dc09ee9f3e79a1733d\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/c9f974643a7dc9dc09ee9f3e79a1733d\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/c9f974643a7dc9dc09ee9f3e79a1733d\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/10673381\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 145932072,
            "title": "Lovefool",
            "cover": "http:\/\/api.deezer.com\/album\/145932072\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/370b1eb9ea4c7c447ece434c57ae0af1\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/370b1eb9ea4c7c447ece434c57ae0af1\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/370b1eb9ea4c7c447ece434c57ae0af1\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/370b1eb9ea4c7c447ece434c57ae0af1\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "370b1eb9ea4c7c447ece434c57ae0af1",
            "tracklist": "http:\/\/api.deezer.com\/album\/145932072\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1271070072,
        "readable": true,
        "title": "Follow You",
        "title_short": "Follow You",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1271070072",
        "duration": 175,
        "rank": 993618,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-5.deezer.com\/stream\/c-51dc1f704920c8930e0b329371c4080b-4.mp3",
        "md5_image": "7a2922ddeea27f558d958c6bb35dffb6",
        "artist": {
            "id": 416239,
            "name": "Imagine Dragons",
            "link": "http:\/\/www.deezer.com\/artist\/416239",
            "picture": "http:\/\/api.deezer.com\/artist\/416239\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a9087f289c3bd826eb8c8bd48cd11f1e\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a9087f289c3bd826eb8c8bd48cd11f1e\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a9087f289c3bd826eb8c8bd48cd11f1e\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/a9087f289c3bd826eb8c8bd48cd11f1e\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/416239\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 213761232,
            "title": "Follow You \/ Cutthroat",
            "cover": "http:\/\/api.deezer.com\/album\/213761232\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7a2922ddeea27f558d958c6bb35dffb6\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7a2922ddeea27f558d958c6bb35dffb6\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7a2922ddeea27f558d958c6bb35dffb6\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/7a2922ddeea27f558d958c6bb35dffb6\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "7a2922ddeea27f558d958c6bb35dffb6",
            "tracklist": "http:\/\/api.deezer.com\/album\/213761232\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1378342622,
        "readable": true,
        "title": "good 4 u",
        "title_short": "good 4 u",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1378342622",
        "duration": 178,
        "rank": 983050,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 1,
        "preview": "http:\/\/cdn-preview-d.deezer.com\/stream\/c-dff6c82b217f3bdb2e12f17c83ac0544-4.mp3",
        "md5_image": "e68da86fd7976135c2d2d1715afaef7c",
        "artist": {
            "id": 11152580,
            "name": "Olivia Rodrigo",
            "link": "http:\/\/www.deezer.com\/artist\/11152580",
            "picture": "http:\/\/api.deezer.com\/artist\/11152580\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/11152580\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 231552772,
            "title": "SOUR",
            "cover": "http:\/\/api.deezer.com\/album\/231552772\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "e68da86fd7976135c2d2d1715afaef7c",
            "tracklist": "http:\/\/api.deezer.com\/album\/231552772\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1120361182,
        "readable": true,
        "title": "Fever",
        "title_short": "Fever",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1120361182",
        "duration": 156,
        "rank": 1000000,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 2,
        "preview": "http:\/\/cdn-preview-0.deezer.com\/stream\/c-076909ce090848c79a61278ca8969408-3.mp3",
        "md5_image": "5cfeef1792d05b6d3ad506bd15d8e3e2",
        "artist": {
            "id": 8706544,
            "name": "Dua Lipa",
            "link": "http:\/\/www.deezer.com\/artist\/8706544",
            "picture": "http:\/\/api.deezer.com\/artist\/8706544\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/e6a04d735093a46dcc8be197681d1199\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/e6a04d735093a46dcc8be197681d1199\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/e6a04d735093a46dcc8be197681d1199\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/e6a04d735093a46dcc8be197681d1199\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/8706544\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 181920172,
            "title": "Fever",
            "cover": "http:\/\/api.deezer.com\/album\/181920172\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/5cfeef1792d05b6d3ad506bd15d8e3e2\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/5cfeef1792d05b6d3ad506bd15d8e3e2\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/5cfeef1792d05b6d3ad506bd15d8e3e2\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/5cfeef1792d05b6d3ad506bd15d8e3e2\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "5cfeef1792d05b6d3ad506bd15d8e3e2",
            "tracklist": "http:\/\/api.deezer.com\/album\/181920172\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1378342612,
        "readable": true,
        "title": "deja vu",
        "title_short": "deja vu",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1378342612",
        "duration": 215,
        "rank": 977322,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 1,
        "preview": "http:\/\/cdn-preview-b.deezer.com\/stream\/c-b779ba7c1730eadf5daa7cf4032fd21f-4.mp3",
        "md5_image": "e68da86fd7976135c2d2d1715afaef7c",
        "artist": {
            "id": 11152580,
            "name": "Olivia Rodrigo",
            "link": "http:\/\/www.deezer.com\/artist\/11152580",
            "picture": "http:\/\/api.deezer.com\/artist\/11152580\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/7e2efcc3fdbfaaed13b07d8c87929615\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/11152580\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 231552772,
            "title": "SOUR",
            "cover": "http:\/\/api.deezer.com\/album\/231552772\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/e68da86fd7976135c2d2d1715afaef7c\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "e68da86fd7976135c2d2d1715afaef7c",
            "tracklist": "http:\/\/api.deezer.com\/album\/231552772\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 973317072,
        "readable": true,
        "title": "Free Woman",
        "title_short": "Free Woman",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/973317072",
        "duration": 191,
        "rank": 746835,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-7.deezer.com\/stream\/c-70d15a10e5f3ad08e921a8f80b84fda9-12.mp3",
        "md5_image": "81572deeede9e5f691e4b1889b828197",
        "artist": {
            "id": 75491,
            "name": "Lady Gaga",
            "link": "http:\/\/www.deezer.com\/artist\/75491",
            "picture": "http:\/\/api.deezer.com\/artist\/75491\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/de53e52fddf43850e6eff3d9f292d6c8\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/de53e52fddf43850e6eff3d9f292d6c8\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/de53e52fddf43850e6eff3d9f292d6c8\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/de53e52fddf43850e6eff3d9f292d6c8\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/75491\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 151092632,
            "title": "Chromatica",
            "cover": "http:\/\/api.deezer.com\/album\/151092632\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/81572deeede9e5f691e4b1889b828197\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/81572deeede9e5f691e4b1889b828197\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/81572deeede9e5f691e4b1889b828197\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/81572deeede9e5f691e4b1889b828197\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "81572deeede9e5f691e4b1889b828197",
            "tracklist": "http:\/\/api.deezer.com\/album\/151092632\/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 1241615112,
        "readable": true,
        "title": "Réfléchir",
        "title_short": "Réfléchir",
        "title_version": "",
        "link": "http:\/\/www.deezer.com\/track\/1241615112",
        "duration": 181,
        "rank": 862085,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "http:\/\/cdn-preview-0.deezer.com\/stream\/c-05c0fd7ccb95c7998f4b0598dcbee3bb-5.mp3",
        "md5_image": "a222e4e20dea95fbe386065e7cb24097",
        "artist": {
            "id": 80681022,
            "name": "Wejdene",
            "link": "http:\/\/www.deezer.com\/artist\/80681022",
            "picture": "http:\/\/api.deezer.com\/artist\/80681022\/image",
            "picture_small": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/4c0831019a60a03c6e7796531f409824\/56x56-000000-80-0-0.jpg",
            "picture_medium": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/4c0831019a60a03c6e7796531f409824\/250x250-000000-80-0-0.jpg",
            "picture_big": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/4c0831019a60a03c6e7796531f409824\/500x500-000000-80-0-0.jpg",
            "picture_xl": "http:\/\/cdn-images.dzcdn.net\/images\/artist\/4c0831019a60a03c6e7796531f409824\/1000x1000-000000-80-0-0.jpg",
            "tracklist": "http:\/\/api.deezer.com\/artist\/80681022\/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 207142322,
            "title": "Réfléchir",
            "cover": "http:\/\/api.deezer.com\/album\/207142322\/image",
            "cover_small": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a222e4e20dea95fbe386065e7cb24097\/56x56-000000-80-0-0.jpg",
            "cover_medium": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a222e4e20dea95fbe386065e7cb24097\/250x250-000000-80-0-0.jpg",
            "cover_big": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a222e4e20dea95fbe386065e7cb24097\/500x500-000000-80-0-0.jpg",
            "cover_xl": "http:\/\/cdn-images.dzcdn.net\/images\/cover\/a222e4e20dea95fbe386065e7cb24097\/1000x1000-000000-80-0-0.jpg",
            "md5_image": "a222e4e20dea95fbe386065e7cb24097",
            "tracklist": "http:\/\/api.deezer.com\/album\/207142322\/tracks",
            "type": "album"
        },
        "type": "track"
    }
]


export default function MusicList(props) {

    const classesIcon = useStyle();
    const redux = useSelector(state => state);
    const allMusic = useSelector(state => state.allMusics) || { erro: "Não chegou nada" };
    const dispatch = useDispatch();
    const [musicPlay, setMusicPlay] = useState('');
    const [urlMusic, setUrlMusic] = useState('');
    const [alert, setAlert] = useState('none');




    useEffect(() => {

        if (redux.favoritList !== []) {
            // localStorage.setItem('favoriteList', JSON.stringify(redux.favoritList))
            // console.log(redux)
        }



        console.log(redux)

    }, [redux])


    function addFavoriteListOnRedux(music) {
        dispatch(addFavoriteList(music))
        setAlert('flex')
        setTimeout(() => { setAlert('none') }, 1000)
    }

    async function saveLocal() {
        if (redux.favoritList !== '') {
            console.log(redux.favoritList.length === [''])
            await localStorage.setItem('favoriteList', JSON.stringify(redux.favoritList))
        }

    }

    saveLocal()

    function play(item) {
        setUrlMusic(item.preview)
        console.log(item.preview)

    }

    function pause(item) {
        setUrlMusic('')
        console.log('pause clicado')

    }

    function saveSelectedMusic(item) {
        dispatch(selectedMusic(item))
        // console.log(redux)
    }

    function convertSecToMin(time) {
        let seconds = (time / 60).toFixed(2);
        let result = seconds.split(".")
        return `${result[0]}:${result[1]}`
    }

    console.log(props.coisa)

    return (

        <Container>

            <div style={{ marginBottom: 10 }} > {urlMusic !== '' ? <audio src={urlMusic} autoPlay loop controls ></audio> : ''} </div>

            <Message alert={alert} />

            <TitleList>
                <h2>Capa</h2>
                <h2>Titulos</h2>
                <h2>Cantor(a)</h2>
                <h2>Duração</h2>
                <h2>Opções</h2>
            </TitleList>



            {redux.isrequest === true ?

                <Load />

                :

                <Listcontainer>

                    {allMusic.length > 0 ?

                        allMusic.map((item) => {

                            return (
                                <List id={item.id} onClick={(() => { saveSelectedMusic(item) })}>
                                    <Item><ThumbNail src={item.album.cover_medium} /></Item>
                                    <Item id={item.id}>{item.title}</Item>
                                    <Item>{item.artist.name}</Item>
                                    <Item>{convertSecToMin(item.duration)}</Item>

                                    <Item>

                                        <PlayArrowTwoToneIcon className={classesIcon.play} onClick={(() => { play(item) })} />
                                        <PauseCircleFilledTwoToneIcon className={classesIcon.pause} onClick={(() => { pause(item) })} />
                                        <FavoriteTwoToneIcon className={classesIcon.favorite} onClick={(() => { addFavoriteListOnRedux(item) })} />
                                        <a href={item.link} target="_black" ><LinkIcon className={classesIcon.link} /></a>
                                    </Item>
                                </List>
                            )


                        })

                        :

                        <Erro > Lista vazia :/</Erro>

                    }

                </Listcontainer>
            }

        </Container >

    );
}