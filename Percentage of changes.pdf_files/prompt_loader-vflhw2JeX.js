// Generated by CoffeeScript 1.10.0
define(['jquery', 'modules/clean/dbmodal', 'modules/clean/uirequest'], function($j, arg, UIRequest) {
  var DBModalStack, HALoader, PromptLoader, TopNotificationBarLoader;
  DBModalStack = arg.DBModalStack;
  HALoader = {
    init: function(location, user, campaign_id) {
      if (!user) {
        return;
      }
      return new UIRequest($j('#ha-container'), '/prompt/ha', {
        data: {
          campaign_id: campaign_id,
          ha_location: location
        },
        subject_user: user
      });
    }
  };
  PromptLoader = {
    init: function(user, controller, action, in_app, sprite_group) {
      return new UIRequest($j('#outer-frame'), '/prompt/main_campaign', {
        data: {
          ref_controller: controller,
          ref_action: action,
          in_app: in_app,
          sprite_group: sprite_group
        },
        dataType: 'json',
        subject_user: user,
        success: function(response) {
          if (!$j('.db-modal-overlay').is(':visible')) {
            return $j('#db-modal-upsell-home-modal').addClass('show-upsell-modal').trigger('show-upsell-modal');
          }
        }
      });
    }
  };
  TopNotificationBarLoader = {
    init: function(controller, action) {
      return new UIRequest($j('#page-header'), '/prompt/top_notification_bar', {
        data: {
          ref_controller: controller,
          ref_action: action
        },
        success: function(data) {
          return $j('body').addClass($j('[data-body-class]').data('body-class'));
        }
      });
    }
  };
  return {
    HALoader: HALoader,
    PromptLoader: PromptLoader,
    TopNotificationBarLoader: TopNotificationBarLoader
  };
});

//# sourceMappingURL=prompt_loader.js.map
