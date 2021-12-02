<template>
  <div class="bg-primary">

    <div class="container-fluid">
      <div class="title">
        <h2>Projects</h2>
        <button>Creat New Project</button>
      </div>
      <div class="carts-container">
        <div class="cart">
          <div class="cart-title">
            <p>Projects</p>
          </div>
          <div class="cart-number">
            <b>18</b>
          </div>
          <div class="cart-complated">
            <p>
              <b>2</b> Complated
            </p>
          </div>
        </div><!-- cart -->
        <div class="cart">
          <div class="cart-title">
            <p>Active Task</p>
          </div>
          <div class="cart-number">
            <b>132</b>
          </div>
          <div class="cart-complated">
            <p>
              <b>28</b> Complated
            </p>
          </div>
        </div><!-- cart -->
        <div class="cart">
          <div class="cart-title">
            <p>Teams</p>
          </div>
          <div class="cart-number">
            <b>12</b>
          </div>
          <div class="cart-complated">
            <p>
              <b>1</b> Complated
            </p>
          </div>
        </div><!-- cart -->
        <div class="cart">
          <div class="cart-title">
            <p>Productivity</p>
          </div>
          <div class="cart-number">
            <b>76%</b>
          </div>
          <div class="cart-complated">
            <p>
              <b>5%</b> Complated
            </p>
          </div>
        </div><!-- cart -->
      </div><!-- carts-container -->

      <div class="table-container">
        <div class="table-header">
          <h4>Active Projects</h4>
        </div>
          <table>
            <thead>
              <tr>
                <th>Project name</th>
                <th>Hours</th>
                <th>priority</th> 
                <th>Members</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody v-for="item in activeProjects">
              <tr>
                <td>
                  <div class="td-container">
                    <div class="td-svg" >
                      <HomeDropBoxLogo />
                    </div>
                      <strong>{{item.projectName}}</strong>
                  </div>
                  </td>
                <td>{{item.projectHourse}}</td>
                <td><span class="badge badge-warning">{{item.projectPriority}}</span></td>
                <td>
                  <div class="avatar-group">
                      <span class="avatar">
                        <img alt="avatar" src="@/assets/images/avatar.jpeg" class="rounded-circle">
                      </span>
                      <span class="avatar">
                        <img alt="avatar" src="@/assets/images/avatar.jpeg" class="rounded-circle">
                      </span>
                      <span class="avatar">
                        <img alt="avatar" src="@/assets/images/avatar.jpeg" class="rounded-circle">
                      </span>
                      <span class="avatar avatar-primary">+5</span>
                    </div>
                </td>
                <td>
                  <div>{{item.projectProgress}}%</div>
                      <div class="progress">
                          <div class="progress-bar" role="progressbar" style="width:15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                </td>
              </tr>
            </tbody>
          </table>
      </div><!-- table-container -->
  </div>
      



     </div><!-- container-fluid -->




</template>

<script>
import HomeDropBoxLogo from '@/icons/HomeDropBoxLogo.svg'
export default {
  name: "Home",
  data(){
    return {
      activeProjects : [
        {
          projectIcons: 'HomeDropBoxLogo', projectName: 'Dropbox Design System',
          projectHourse: 34, projectPriority: 'Medium',  projectProgress: 15
        },
        {
          projectIcons: '<HomeDropBoxLogo />', projectName: 'Slack Team UI Design',
          projectHourse: 47, projectPriority: 'Medium',  projectProgress: 35
        },
        {
          projectIcons: '<HomeDropBoxLogo />', projectName: 'GitHub Satellite',
          projectHourse: 120, projectPriority: 'Low',  projectProgress: 75
        },
        {
          projectIcons: '<HomeDropBoxLogo />', projectName: '3D Character Modelling',
          projectHourse: 89, projectPriority: 'Medium',  projectProgress: 63
        },
        {
          projectIcons: '<HomeDropBoxLogo />', projectName: 'Webapp Design System',
          projectHourse: 108, projectPriority: 'Medium',  projectProgress: 100
        },
        {
          projectIcons: '<HomeDropBoxLogo />', projectName: 'Github Event Design',
          projectHourse: 120, projectPriority: 'Low',  projectProgress: 75
        }
      ]
    }
  },
  components: {
    HomeDropBoxLogo
  },

};
</script>

<style lang="css">

</style>