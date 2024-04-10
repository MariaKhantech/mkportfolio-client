import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';
import AboutMeKidsSlide from './AboutMeKidsSlide';

function AboutMe() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: 'auto',
        margin: 'auto',
        padding: { xs: 2, sm: 3, md: 4 },
        borderTop: '1px solid #97263a',
      }}
    >
      <Grid
        item
        xs={12}
        md={5}
        xl={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <AboutMeKidsSlide />
      </Grid>

      <Grid
        item
        xs={12}
        md={7}
        xl={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          padding: 2,
        }}
      >
        <Typography
          component="h4"
          level="h4"
          fontWeight="lg"
          sx={{ color: '#97263a', mb: 2 }}
        >
          About Me
        </Typography>
        <Typography sx={{ mt: 1 }} level="body-md">
          Hey! Welcome to my portfolio. I&apos;m excited to share not just my
          work, but a little about myself too. Professionally, I&apos;m deeply
          passionate about technology and web development, always eager to
          explore new skills and innovations in the field. My journey into tech
          was fueled by a natural curiosity and a love for learning, traits I
          carry into every project I tackle.
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: 'bold' }} level="h-5">
          Community
        </Typography>
        <Typography sx={{ mt: 1 }} level="body-md">
          I believe in the power of community and connection, which led me to
          start a Women in Tech meet-up group in New Hampshire. It&apos;s been
          an incredible journey fostering camaraderie among women in technology,
          creating a space where we can support and inspire each other.
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: 'bold' }} level="h-5">
          Work Ethic
        </Typography>
        <Typography sx={{ mt: 1 }} level="body-md">
          Teamwork is second nature to me, honed over years of working
          collaboratively in various settings. I thrive in environments where I
          can blend my technical skills with my ability to work well with
          others, aiming to contribute not just to projects but to the team
          dynamic itself.
        </Typography>
        <Typography level="h-5" sx={{ mt: 1, fontWeight: 'bold' }}>
          Personal Growth and Family
        </Typography>
        <Typography sx={{ mt: 1 }} level="body-md">
          Outside of work, I&apos;m a proud parent we embrace new experience and
          learning. Whether it&apos;s through traveling, exploring new hobbies
          like ice skating and rollerblading, or cooking up a storm in the
          kitchen, I&apos;m always on the lookout for opportunities to grow and
          encourage my children to do the same, they love traveling and
          exploring new things as much as I do if not more.
        </Typography>
        <Typography level="h-5" sx={{ mt: 1, fontWeight: 'bold' }}>
          Learning and Volunteering
        </Typography>
        <Typography sx={{ mt: 1 }} level="body-md">
          Volunteering at the local ice skating rink and immersing myself in
          documentaries and educational content are just a few ways I continue
          to learn and connect with my community. These experiences enrich my
          life and work, bringing new perspectives and ideas to the table.
        </Typography>
        <Typography sx={{ mt: 1 }} level="body-md">
          I&apos;m a firm believer in the adage, &apos;jack of all trades,
          master of none,&apos; seeing it not as a limitation but as an openness
          to a world of possibilities. It&apos;s this blend of professional
          experience, community involvement, and personal growth that I bring to
          my work in web development, eager to tackle new challenges and make
          meaningful connections along the way.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
