/* External dependencies */
import React from "react";
import { __, sprintf } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { SvgIcon } from "@yoast/components";

/**
 * Creates the loading content for the SEMRush related keywords modal.
 *
 * @returns {React.Element} The SEMRush loading content.
 */
const SemRushLoading = () => {
	return (
		<Fragment>
			<p>
				{
					sprintf(
						/* translators: %1$s expands to "Yoast SEO", %2$s expands to "SEMrush". */
						__( "Please wait while %1$s is connecting to %2$s to get related keyphrases...", "wordpress-seo" ),
						"Yoast SEO",
						"SEMRush"
					)
				}
				&nbsp;
				<SvgIcon icon="loading-spinner" />
			</p>
		</Fragment>
	);
};

export default SemRushLoading;
