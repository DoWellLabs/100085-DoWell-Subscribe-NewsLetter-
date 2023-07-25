<?php
/**
 * Plugin Name: WP newsletter plugin
 * Author: Didymus Orotayo
 * Author URI: https://github.com/
 * Version: 1.0.0
 * Description: WordPress newsletter plugin.
 * Text-Domain: wp-newsletter-plugin
 */

if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed.

/**
* Define Plugins Contants
*/
define ( 'WPNP_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define ( 'WPNP_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

/**
 * Loading Necessary Scripts
 */
add_action( 'admin_enqueue_scripts', 'load_scripts' );
function load_scripts() {
    wp_enqueue_script( 'wp-newsletter-plugin', WPNP_URL . 'dist/bundle.js', [ 'jquery', 'wp-element' ], wp_rand(), true );
    wp_localize_script( 'wp-newsletter-plugin', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ] );
}

require_once WPNP_PATH . 'classes/admin-menu.php';
require_once WPNP_PATH . 'classes/settings-route.php';