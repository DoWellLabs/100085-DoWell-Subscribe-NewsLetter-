<?php
/**
 * This file will create admin menu page.
 */

class Admin_Page {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'create_admin_menu' ] );
    }

    public function create_admin_menu() {
        $capability = 'manage_options';
        $slug = 'wprk-settings';

        add_menu_page(
            __( 'WP Newsletter Plugin', 'wp-newsletter-plugin' ),
            __( 'WP Newsletter Plugin', 'wp-newsletter-plugin' ),
            $capability,
            $slug,
            [ $this, 'menu_page_template' ],
            'dashicons-buddicons-replies'
        );
    }

    public function menu_page_template() {
        echo '<div class="wrap"><div id="wpnp-admin-app"></div></div>';
    }

}
new Admin_Page();