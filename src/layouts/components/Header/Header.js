// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react'; // different import path!
// import 'tippy.js/dist/tippy.css'; // optional

// import { IoLanguage, IoEllipsisVertical, IoSettingsOutline } from 'react-icons/io5';
// import { FaRegQuestionCircle, FaKeyboard } from 'react-icons/fa';
// import { TbPlus, TbLogout2 } from 'react-icons/tb';
// import { FiBookmark } from 'react-icons/fi';
// import { RiUserLine, RiLiveLine } from 'react-icons/ri';

// import config from '~/config/routes';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
// import images from '~/assets/images';
// import Button from '~/components/Button';
// import Menu from '~/components/Popper/Menu';
// import Image from '~/components/Image';
// import Search from '~/layouts/components/Search';
// import { InboxIcon, MessageIcon } from '~/components/Icons';

const cx = classNames.bind(style);

function Header() {
    return <h1 className={cx('d')}>Header</h1>;
}

export default Header;
