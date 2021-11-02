import React from 'react';
import {SwapiConsumer} from "../../SwapiServiceContext";

export const WithSwapi = (mapMethodsToProps) => (WrapperComponent) => {
    return props =>
        <SwapiConsumer>
            {
                swapiService => {
                    const serviceProps = mapMethodsToProps(swapiService)
                    return <WrapperComponent {...props} {...serviceProps}/>
                }
            }
        </SwapiConsumer>
}