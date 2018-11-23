/** @flow
 * @format */

import '../globals';

import React from 'react';

// Gutenberg imports
import { registerCoreBlocks } from '@wordpress/block-library';
import { registerBlockType, setUnregisteredTypeHandlerName } from '@wordpress/blocks';

import AppContainer from './AppContainer';
import initialHtml from './initial-html';

import * as UnsupportedBlock from '../block-types/unsupported-block/';
import '@wordpress/format-library';

registerCoreBlocks();
registerBlockType( UnsupportedBlock.name, UnsupportedBlock.settings );
setUnregisteredTypeHandlerName( UnsupportedBlock.name );

type PropsType = {
	initialData: string,
};

const AppProvider = ( { initialData }: PropsType ) => {
	if ( initialData === undefined ) {
		initialData = initialHtml;
	}
	return (
		<AppContainer initialHtml={ initialData } />
	);
};

export default AppProvider;
