import Storage from '../../util/storage';

/**
 * 全局常量类
 */
const Constants = {
  headers: {
    'Content-Type': 'application/json',
    get Authorization() {
      return (async () => {
        const token = await Storage.getItem('jwt-token');
        return `Bearer ${token || ''}`;
      })();
    },
  },
  get baseUrl() {
    return 'http://localhost:8085/';
  },
  apiDoc: 'http://localhost:8085/doc.html',

  user: {
    register: 'user/register',
    sendVerificationCode: 'user/sendCode',
    loginWithCode: 'user/loginWithCode',
    loginWithPassword: 'user/loginWithPassword',
    profile: 'user/profile',
    updateProfile: 'user/profile',
    forgotPassword: 'user/forgotPassword',
  },

  recipes: {
    getDetails: (id: string) => `recipes/${id}`,
    getPopular: 'recipes/popular',
    publish: 'recipes/publish',
    getAllMyRecipes: 'recipes/getAllMyRecipes',
    delete: 'recipes/delete',
    getEditDetails: (id: string) => `recipes/edit/${id}`,
    edit: 'recipes/edit',
    getAll: 'recipes/all',
  },

  comments: {
    postRecipeComment: 'comments/postRecipeComment',
    getRecipeComments: 'comments/getRecipeComments',
    getAllMyComments: 'comments/getAllMyComments',
    deleteComment: 'comments/deleteComment',
  },

  favorites: {
    add: 'favorites/add',
    remove: 'favorites/remove',
    getAllMyFavorites: 'favorites/getAllMyFavorites',
  },

  likes: {
    likeRecipes: 'likes/likeRecipes',
    unlikeRecipe: 'likes/UnlikeRecipe',
    getAllMyLikes: 'likes/getAllMyLikes',
    count: 'likes/count',
  },

  search: {
    recipes: 'recipes/search',
  },

  recommendations: {
    get: 'recommendation',
  },

  tags: {
    getAllMyTags: 'tags/getAllMyTags',
    addNewTag: 'tags/addNewTag',
    deleteTag: (id: string) => `tags/${id}`,
  },
};

export default Constants;