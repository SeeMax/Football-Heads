<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $eost_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'team-grid-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'team-grid-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="content">
    <div class="team-grid-full-page-overlay teamGridOverlay"></div>
    <div class="single-team-popup singleteamPopup">
      <div class="single-team-popup-close singleteamPopupClose">x</div>
      <!-- AJAX DATA GOES HERE -->
      <div class="team-pop-up-image c-width-30">
      </div>
      <div class="team-pop-up-text c-width-70">
        <h3></h3><span class="contact-info"></span><br>
        <h5></h5> 
        <p></p>
      </div>
    </div>
    <?php $sectionTitle = get_field('grid_title');?>
    <?php if($sectionTitle):?>
      <h2><?php echo get_field('grid_title');?></h2>
    <?php endif;?>
    <?php $topics = get_field('team_categories');?>
    <div class="team-grid-nav teamGridNav">  
      <?php foreach ($topics as $topic):?>
        <div class="single-team-grid-nav singleteamGridNav" data-grid-filter-btn="<?php echo $topic;?>">
          <?php $term = get_term( $topic );?>
          <div class="grid-arrow gridArrow"></div>
          <h4><?php echo $term->name;?></h4>
        </div>
        <?php wp_reset_postdata();?>
      <?php endforeach;?>
    </div>
    <div class="team-grid-container teamGridContainer"> 
      <?php foreach ($topics as $topic):?>
        <div class="team-grid-topic-area teamGridTopicArea" data-grid-filter-area="<?php echo $topic;?>">
          <?php $args = array(
            'post_type' => 'board_advisor',
            'posts_per_page' => -1,
            'tax_query' => array(
              array(
                'taxonomy' => 'member-type',
                'terms' => $topic,
              ),
            ),
          );?>
          <?php $team_query = new WP_Query($args);
          if ($team_query->have_posts()):while($team_query->have_posts()):$team_query->the_post();?>
            <?php $post_id = get_the_ID();?>
            <?php $image = get_field('profile_image', $post_id);?>
            <?php $size = 'full';?>
            <div class="single-team-grid-team singleteamGridteam c-width-33-3" data-team-popup=<?php echo $post_id;?>>  
              <div class="team-image-mask background-image-section" 
              style="background-image:url(<?php echo $image['url'];?>)"> 
              </div>
              <h4><?php the_title();?></h4>
              <h5><?php echo get_field('job_description', $post_id);?></h5>  
            </div>
          <?php endwhile;endif;?>
          <?php wp_reset_postdata();?>
        </div>
      <?php endforeach;?>
    </div>
  </div>
</section>
