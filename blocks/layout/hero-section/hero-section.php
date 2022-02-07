<?php

  /**
  * Hero Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'hero-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'hero-section heroSection';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> background-image-section" style="background-image:url(<?php echo $image['url'];?>)">
  <div class="hero-slider-container heroSliderContainer">
    <?php if( have_rows('hero_slides') ): while( have_rows('hero_slides') ) : the_row();
      $title = get_sub_field('title');
      $image = get_sub_field('image');
      $body = get_sub_field('body');
      $logo = get_sub_field('add_logo');
      $bW = get_sub_field('b_or_w');
    ?>
      <div class="single-hero-section-slide <?php echo $bW;?>-hero-section-slide background-image-section" style="background-image:url(<?php echo $image['url'];?>)">
      
        <div class="hero-overlay c-block-fill"></div>
        <div class="content">    
          <?php if($logo):?>

          <?php endif;?>
          <h1>
            <?php if($title):?>
              <?php echo $title;?>
            <?php else:?>
              <?php the_title();?>
            <?php endif;?>
          </h1>
          <?php if($body):?>
            <?php echo $body;?>
          <?php endif;?>
        </div>
      </div>
    <?php endwhile;endif;?>
  </div>
  <!-- <div class="slick-arrow-container">
    <div class="slick-previous-arrow">
      <
    </div>
    <div class="slick-nextious-arrow">
      >
    </div>
  </div> -->
</section>
