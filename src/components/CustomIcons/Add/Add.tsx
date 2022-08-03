import * as React from 'react';
import { Link, Path } from 'react-router-dom';
import './Add.css'

export interface IAddIconProps {
    route?: any;
}

export function AddIcon (props: IAddIconProps) {
  return (
    <Link to={props.route}><span className="material-symbols-outlined p-1 add-icon">add</span></Link>
  );
}
