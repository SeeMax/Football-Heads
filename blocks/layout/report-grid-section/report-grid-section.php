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
$id = 'report-grid-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'report-grid-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="content">
    <?php $sectionTitle = get_field('grid_title');?>
    <?php if($sectionTitle):?>
      <h2><?php echo get_field('grid_title');?></h2>
    <?php endif;?>
    <?php $topics = get_field('report_categories');?>
    <div class="report-grid-nav reportGridNav">  
      <?php foreach ($topics as $topic):?>
        <div class="single-report-grid-nav singleReportGridNav" data-grid-filter-btn="<?php echo $topic;?>">
          <?php $term = get_term( $topic );?>
          <div class="grid-arrow gridArrow"></div>
          <h4><?php echo $term->name;?></h4>
        </div>
        <?php wp_reset_postdata();?>
      <?php endforeach;?>
    </div>
    <div class="report-grid-container reportGridContainer"> 
      <?php foreach ($topics as $topic):?>
        <div class="report-grid-topic-area reportGridTopicArea" data-grid-filter-area="<?php echo $topic;?>">
          <?php $args = array(
            'post_type' => 'reports',
            'posts_per_page' => -1,
            
            'tax_query' => array(
              array(
                'taxonomy' => 'report-type',
                'terms' => $topic,
              ),
            ),
          );?>
          <?php $quote_query = new WP_Query($args);
          if ($quote_query->have_posts()):while($quote_query->have_posts()):$quote_query->the_post();?>
            <?php $post_id = get_the_ID();?>
            <div class="single-report-grid-report singleReportGridReport c-width-25">
              <?php $image = get_field('image', $post_id);?>
              <?php $repType = get_field('pdf_or_link', $post_id);?>
              <div class="report-image-mask background-image-section" 
              style="background-image:url(<?php echo $image['url'];?>)">  
              </div>
              <h4><?php the_title();?></h4>
              <a class="c-block-fill"
                <?php if($repType === 'pdf'):?>
                  <?php $pdf = get_field('pdf', $post_id);?>
                  href="<?php echo $pdf['url'];?>"
                <?php else:?>
                  href="<?php echo get_field('url', $post_id);?>"
                  target="_blank"
                <?php endif;?>
              ></a>
            </div>
          <?php endwhile;endif;?>
          <?php wp_reset_postdata();?>
        </div>
      <?php endforeach;?>
    </div>
  </div>
</section>
