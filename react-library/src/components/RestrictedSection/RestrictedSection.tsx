import React from 'react'
import {Navbar} from '../Navbar'

type RestrictedSectionProps = {
    children: React.ReactNode;
  };

export const RestrictedSection = (props: RestrictedSectionProps) => {
    return (
        <div>
            <Navbar />
           <h3> What Part of Restricted was confusing???</h3>
            {props.children}
        </div>
    )
}