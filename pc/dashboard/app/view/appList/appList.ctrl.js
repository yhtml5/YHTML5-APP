'use strict';
angular.module('yhtml5.appList', ['ui.bootstrap', 'ngAnimate', 'factory'])
    .controller('yhtml5.appList', function($scope, $rootScope, $http, $uibModal, Data) {
        $scope.dataInit = Data;
        console.log("Data:", Data);
        Data.obj.fetchUserDetails().success(function(response) {
            console.log("applist10 :", response.data);
            $scope.userApps = response.data.appTradeInfoList;
        });
        $scope.animationsEnabled = true;
        $scope.open = function(size) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'appList-add.html',
                controller: 'ModalInstanceCtrl',
                size: size
            })
        };
        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
        //get json
        //      var localURL = __uri('../../server/init2.json');
        //      var domainURL = 'http://admin.jubaobar.com/front/homePage/console.htm?callback=JSON_CALLBACK';
        //      $http.jsonp('http://admin.jubaobar.com/front/homePage/console.htm?callback=JSON_CALLBACK')
        $http.get('http://admin.jubaobar.com/front/homePage/console.htm')
            .success(function(response) {
                console.log("applist :", response.data);
                $rootScope.userApps = response.data.appTradeInfoList;
            })
        $scope.getRootUserAppIndex = function(userAppIndex) {
            console.log("userAppIndex", $scope.userApps[userAppIndex]);
            $rootScope.rootUserApp = $scope.userApps[userAppIndex];
            $scope.appIdDemo = "appIdDemo";
        };
        //      console.log("scope", $scope.userApps)
        //      console.log("rootScope", $rootScope.nameDemo)
    })
    .controller('ModalInstanceCtrl', function($state, $scope, $http, $uibModalInstance, $uibModal, $state) {
        $scope.data = {};
        $scope.userAppFormSave = function(size) {
            $scope.userPersonFormEnabled = true;
            $scope.userPersonUpdate = true;
            $scope.userPersonSave = true;
            $http({
                method: "get",
                url: "http://admin.jubaobar.com/front/appbanage/save.htm",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                params: {
                    appType: $scope.appTypeSelect,
                    appName: $scope.data.appName,
                    appUrl: $scope.data.appUrl,
                    signature: $scope.data.signature,
                    appPackage: $scope.data.appPackage,
                    bundleId: $scope.data.bundleId,
                    webICP: $scope.data.webICP
                }
            }).success(function(res) {
                if (res.result = '0') {
                    console.log("应用信息保存成功");
                    $uibModalInstance.dismiss('cancel');
                    $state.reload('dashboard');
                }
            }).error(function(res) {
                console.log("保存失败");

            })
        };
        $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            }
    });