<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'signup-form-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'signup-form-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$image = get_field('image');
$formID = get_field('form_id');
$headline = get_field('headline');
$subheadline = get_field('subheadline');
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> background-image-section" style="background-image:url(<?php echo $image['url'];?>)">
  <div class="content c-width-50">
    <h2><?php echo $headline;?></h2>
    <h5><?php echo $subheadline;?></h5>
    <?php $short = '[gravityform id="'.$formID.'" title="false" description="false" ajax="true"]';
    echo do_shortcode($short);?>
  </div>
</section>
