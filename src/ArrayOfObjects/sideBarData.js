import _ from '../Language/Language';
export const side_bar = [
	/************************************ ADMINISTRATION *********************************/
	{
		title: _('Administration'),
		data_toggle: 'Admin_isOpen',
		childs: [
			{
				title: _('General'),
				data_toggle: 'General_isOpen',
				childs: [
					{
						title: _('General'),
						route: '/General/General'
					}
				]
			},
			{
				title: _('Users'),
				data_toggle: 'User_isOpen',
				childs: [
					{
						title: _('Create New User'),
						route: '/Users/CreateUser'
					},
					{
						title: _('Edit User'),
						route: '/Users/EditUser'
					},
					{
						title: _('Delete User'),
						route: '/Users/DeleteUser'
					}
				]
			},
			{
				title: _('Groups'),
				data_toggle: 'Group_isOpen',
				childs: [
					{
						title: _('Create New Group'),
						route: '/Groups/CreateGroup'
					},
					{
						title: _('Edit Group'),
						route: '/Groups/EditGroup'
					},
					{
						title: _('Delete Group'),
						route: '/Groups/DeleteGroup'
					}
				]
			},
			{
				title: _('Templates'),
				data_toggle: 'Template_isOpen',

				childs: [
					{
						title: _('Create New Template'),
						route: '/Template/CreateTemplate'
					},
					{
						title: _('Edit Template'),
						route: '/Template/EditTemplate'
					},
					{
						title: _('Delete Template'),
						route: '/Template/DeleteTemplate'
					}
				]
			},
			{
				title: _('Work Flow'),
				data_toggle: 'WorkFlow_isOpen',
				childs: [
					{
						title: _('Design Work Flow'),
						route: '/WorkFlow/Design'
					},
					{
						title: _('Edit Work Flow'),
						route: '/WorkFlow/EditWorkFlow'
					},
					{
						title: _('Delete WorkFlow'),
						route: '/WorkFlow/DeleteWorkFlow'
					},
					{
						title: _('Debug'),
						route: '/Integerator/Configuration'
					},
					{
						title: _('Production'),
						route: '/Integerator/Configuration'
					}
				]
			},
			{
				title: _('Integrators'),
				data_toggle: 'Integerator_isOpen',

				childs: [
					{
						title: _('Configuration'),
						route: '/Integerator/Configuration'
					}
				]
			}
		]
	},
	/************************************ DESKTOP *********************************/
	{
		title: _('Desktop'),
		data_toggle: 'Desktop_isOpen',
		childs: [
			{
				title: _('Repository'),
				data_toggle: 'repository_isOpen',
				childs: [
					{
						title: _('Create New repository'),
						route: '/Repository/CreateRepository'
					},
					{
						title: _('Rename Repository'),
						route: '/Repository/RenameRepository'
					},
					{
						title: _('Delete Repository'),
						route: '/Repository/DeleteRepository'
					},
					{
						title: _('Find Repository'),
						route: '/Repository/FindRepository'
					}
				]
			},
			{
				title: _('Documents'),
				data_toggle: 'Document_isOpen',
				childs: [
					{
						title: _('Upload Document'),
						route: '/Documents/UploadDocument'
					},
					{
						title: _('Delete Document'),
						route: '/Documents/DeleteDocument'
					},
					{
						title: _('Edit Document'),
						route: '/Documents/EditDocument'
					},
					{
						title: _('Find Document'),
						route: '/Documents/FindDocument'
					},
					{
						title: _('Bookmark Document'),
						route: '/Documents/BookmarkDocument'
					},
					{
						title: _('Copy Document'),
						route: '/Documents/CopyDocument'
					},
					{
						title: _('Move Document'),
						route: '/Documents/MoveDocument'
					},
					{
						title: _('Download Document'),
						route: '/Documents/DownloadDocument'
					},
					{
						title: _('Create Document Shortcut'),
						route: '/Documents/CreateDocumentShortcut'
					}
				]
			},
			{
				title: _('Search'),
				data_toggle: 'Search_isOpen',
				childs: [
					{
						title: _('Search Document'),
						route: '/Search/Search'
					}
				]
			},
			{
				title: _('Recycle Bin'),
				data_toggle: 'RecycleBin_isOpen',

				childs: [
					{
						title: _('Restore File/Folder'),
						route: '/RecycleBin/Restore_File_Folder'
					},
					{
						title: _('Empty Recycle Bin'),
						route: '/RecycleBin/EmptyRecycleBin'
					}
				]
			},
			{
				title: _('Search Results'),
				data_toggle: 'SearchResults_isOpen',
				childs: [
					{
						title: _('Search Results'),
						route: '/SearchResults/SearchResults'
					}
				]
			}
		]
	},
	/************************************ ADVANCE SEARCH *********************************/
	{
		title: _('Advance Search'),
		data_toggle: 'AdvanceSearch_isOpen',
		childs: [
			{
				title: _('Contextual Search'),
				data_toggle: 'ContextualSearch_isOpen',
				childs: [
					{
						title: _('Contextual Search'),
						route: '/AdvanceSearch/ContextualSearch'
					}
				]
			},
			{
				title: _('Search By Date'),
				data_toggle: 'SearchByDate_isOpen',
				childs: [
					{
						title: _('Search By Date'),
						route: '/AdvanceSearch/SearchByDate'
					}
				]
			},
			{
				title: _('Search By Template'),
				data_toggle: 'SearchByTemplate_isOpen',
				childs: [
					{
						title: _('Search By Template'),
						route: '/AdvanceSearch/SearchByTemplate'
					}
				]
			}
		]
	}
];
export default {
	side_bar
};
